<script lang="ts">
    import Errors from '$lib/components/Errors.svelte'
	import { beforeNavigate, goto } from '$app/navigation'
	import { graphql } from "$houdini"
    import { Carta, MarkdownEditor } from 'carta-md'
    import { anchor } from '@cartamd/plugin-anchor'
	import { rehype, remark } from '$lib/markdown/plugin'
    import 'carta-md/default.css'

    const defaultContent = "{{ infobox\n| title = New Article \n| image = https://images.unsplash.com/photo-1722778610349-e3c02e277ec2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D \n| caption = a little caption \n| value one = some value \n| value two = [a link](https://orangeburrito.com) \n}}\n\nLorem ipsum dolor sit amet consectetur adipisicing elit. Tempora quam at, iste animi pariatur, fugit quod cupiditate, suscipit magnam totam aspernatur assumenda ipsum nihil laboriosam. Modi, ut. Nesciunt, ea temporibus.\n\nLorem ipsum dolor sit amet consectetur adipisicing elit. Nihil voluptatum ea corporis itaque architecto veritatis sed ipsum? Quas placeat vel dolor explicabo velit quia quos.\n\nThe below header is required to generate an optional Table of Contents\n## Contents\n\n## First Header\nSome content\n\nSome content that has a citation below[^1]\n\n## Second Header\n![A brief caption of an image](https://upload.wikimedia.org/wikipedia/commons/a/a7/Caspar_David_Friedrich%27s_Chalk_Cliffs_on_R%C3%BCgen.jpg)\n\nimages should be right below headers\n\nSome other content that also has a citation[^2]\n\n[^1]:[URL to source](https://thesource.com)\n[^2]:Citation that does not contain a link, bad practice"

    beforeNavigate(({cancel}) => {
    if (articleInput.content !== defaultContent && mutationResult == null) {
            if (!confirm('You have unsaved changes. Are you sure you want to leave?')) {
                cancel()
            }
        }
    })

    const createArticleMutation = graphql(`
    mutation CreateArticle($input: CreateArticleCommandInput!) {
        createArticle(input: $input) {
            data {
                createdAt
                title
                content
                slug
            }
            errors {
                code
                message
            }
        }
    }
    `)

	const carta = new Carta({
        extensions: [anchor(), remark(), rehype()]
    })

    let articleInput = {
        author: "orangeburrito",
        title: "New Article",
        content: defaultContent
    }

    let mutationResult
    let errors = $state([])

    const createArticle = async () => {
        if (/\|\s*title\s*=\s*(.*)/gm.exec(articleInput.content)[1].trim() != articleInput.title) {
            errors = [{code: "Title", message: "Infobox title must match the article title"}]
            return
        }

        let result = await createArticleMutation.mutate({input: articleInput})
        mutationResult = await result.data?.createArticle

        errors = mutationResult.errors

        if (mutationResult.errors == null) {
            goto(`/wiki/${mutationResult.data.slug}`)
        }
    }
</script>

<div class="create-article">
        <h2>Create New Article</h2>
        <label for="article-title">
            <span>Title</span>
            <input type="text" id="article-title" bind:value={articleInput.title}>
        </label>
        {#if errors.length > 0}
            <Errors {errors} />
        {/if}
        <!-- {#if mutationResult?.errors} -->
            <!-- <div class="error-box">
                {#each mutationResult.errors as error}
                    <div class="error">{error.message}</div>
                {/each}
            </div>
        {/if} -->
        <MarkdownEditor {carta} mode="tabs" bind:value={articleInput.content} />
        <button on:click={createArticle}>Create Article</button>
</div>

<style>
    label {
        margin-bottom: 1rem;
    }

    label, label span {
        display: block;
        font-weight: 500;
    }
</style>