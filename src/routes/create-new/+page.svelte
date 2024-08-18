<script lang="ts">
    import Errors from '$lib/components/Errors.svelte'
    import Overlay from '$lib/components/Overlay.svelte'
	import { beforeNavigate, goto } from '$app/navigation'
    import { Carta, MarkdownEditor } from 'carta-md'
    import { anchor } from '@cartamd/plugin-anchor'
	import { rehype, remark } from '$lib/markdown/plugin'
    import 'carta-md/default.css'
	import { getContextClient, queryStore, mutationStore } from '@urql/svelte'
    import { TAGS } from '$lib/graphql/query'
	import { CREATE_ARTICLE } from '$lib/graphql/mutation'

    const defaultContent = "{{ infobox\n| title = New Article \n| image = https://images.unsplash.com/photo-1722778610349-e3c02e277ec2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D \n| caption = a little caption \n| value one = some value \n| value two = [a link](https://orangeburrito.com) \n}}\n\nLorem ipsum dolor sit amet consectetur adipisicing elit. Tempora quam at, iste animi pariatur, fugit quod cupiditate, suscipit magnam totam aspernatur assumenda ipsum nihil laboriosam. Modi, ut. Nesciunt, ea temporibus.\n\nLorem ipsum dolor sit amet consectetur adipisicing elit. Nihil voluptatum ea corporis itaque architecto veritatis sed ipsum? Quas placeat vel dolor explicabo velit quia quos.\n\nThe below header is required to generate an optional Table of Contents\n## Contents\n\n## First Header\nSome content\n\nSome content that has a citation below[^1]\n\n## Second Header\n![A brief caption of an image](https://upload.wikimedia.org/wikipedia/commons/a/a7/Caspar_David_Friedrich%27s_Chalk_Cliffs_on_R%C3%BCgen.jpg)\n\nimages should be right below headers\n\nSome other content that also has a citation[^2]\n\n[^1]:[URL to source](https://thesource.com)\n[^2]:Citation that does not contain a link, bad practice"

    beforeNavigate(({cancel}) => {
    if (articleInput.content !== defaultContent || !creatingArticle) {
            if (!confirm('You have unsaved changes. Are you sure you want to leave?')) {
                cancel()
            }
        }
    })

    const client = getContextClient()

    const tags = queryStore({
        client,
        query: TAGS,
        variables: {
            input: {
                limit: 20
            }
        }
    })
    
    const createArticleMutation = (input: any) => {
        return mutationStore({
            client,
            query: CREATE_ARTICLE,
            variables: {
                input
            }
        })
    }

    let articleInput = $state({
        author: "orangeburrito",
        title: "New Article",
        content: defaultContent,
        tags: []
    })
    let errors = $state([])
    let result = $state(null)
    let creatingArticle = $state(false)

    function createArticle() {
        creatingArticle = true
        const infoboxTitle = /\|\s*title\s*=\s*(.*)/gm.exec(articleInput.content)

        if (infoboxTitle != null && (infoboxTitle[1].trim() != articleInput.title.trim())) {
            errors = [{code: "Title", message: "Infobox title must match the article title"}]
            creatingArticle = false
            return
        }

        createArticleMutation(articleInput).subscribe((res) => {
            if (res.fetching === false) {
                result = res.data.createArticle
                errors = result.errors
                
                if (errors == null) {
                    goto(`/wiki/${result.data.slug}`)
                }
                creatingArticle = false
            }
        })
    }

    const carta = new Carta({
        extensions: [anchor(), remark(), rehype()]
    })
</script>

<Overlay show={creatingArticle}><h2>Creating Article...</h2></Overlay>
<div class="create-article">
    <h2>Create New Article</h2>
    <div class="inputs">
        <label for="article-title">
            <span>Title</span>
            <input type="text" id="article-title" bind:value={articleInput.title}>
        </label>
        <label for="article-tags">
            <div>Tags</div>
            {#if $tags.fetching}
            <p>Loading...</p>
            {:else}
            <select id="tags" multiple bind:value={articleInput.tags} >
            {#each $tags.data.tags.data as tag}
                        <option value={tag.name}>{tag.name}</option>
                    {/each}
            </select>
                {/if}
        </label>
    </div>
    {#if result}
        <Errors {errors} />
    {/if}

    <MarkdownEditor {carta} mode="tabs" bind:value={articleInput.content} />
    <!-- <button on:click={createArticle}>Create Article</button> -->
    <button disabled>Create Article</button>
</div>

<style>
    .inputs {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        margin-bottom: 1rem;
    }

    label {
        display: block;
    }

    label span {
        margin-right: 0.5rem;
    }
</style>