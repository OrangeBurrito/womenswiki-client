<script lang="ts">
	import { goto } from '$app/navigation'
    import { Carta, MarkdownEditor } from 'carta-md'
    import { anchor } from '@cartamd/plugin-anchor'
	import { rehype, remark } from '$lib/markdown/plugin'
    import DOMPurify from 'isomorphic-dompurify'
    import Errors from '$lib/components/Errors.svelte'
    import Overlay from '$lib/components/Overlay.svelte'
    import 'carta-md/default.css'
	import type { PageServerData } from './$types'
	import { enhance } from '$app/forms'
	import { page } from '$app/state'

    interface Props {
        data: PageServerData
    }

    let { data }: Props = $props()

    const defaultContent = "{{ infobox\n| title = Article \n| image = https://images.com/image.png \n| caption = Image Caption \n| extravalue = More metadata \n}}\n\nLorem ipsum dolor sit amet consectetur adipisicing elit. Tempora quam at, iste animi pariatur, fugit quod cupiditate, suscipit magnam totam aspernatur assumenda ipsum nihil laboriosam. Modi, ut. Nesciunt, ea temporibus.\n\nLorem ipsum dolor sit amet consectetur adipisicing elit. Nihil voluptatum ea corporis itaque architecto veritatis sed ipsum? Quas placeat vel dolor explicabo velit quia quos.\n\nThe below header is required to generate an optional Table of Contents\n## Contents\n\n## First Header\nSome content\n\nSome content that has a citation below[^1]\n\n## Second Header\n![A brief caption of an image](https://upload.wikimedia.org/wikipedia/commons/a/a7/Caspar_David_Friedrich%27s_Chalk_Cliffs_on_R%C3%BCgen.jpg)\n\nimages should be placed right below headers\n\nSome other content that also has a citation[^2]\n\n[^1]:[URL to source](https://thesource.com)\n[^2]:Citation that does not contain a link, bad practice"
    
    let createForm: HTMLFormElement
    let articleTitle = $state('')
    let articleContent = $state(defaultContent)
    let creatingArticle = $state(false)
    let errors = $state([])

    function createArticle() {
        creatingArticle = true
        errors = []
        // const infoboxTitle = /\|\s*title\s*=\s*(.*)/gm.exec(articleContent)

        // if (infoboxTitle != null && (infoboxTitle[1].trim() != articleTitle.trim())) {
        //     errors = [{code: "Title", message: "Infobox title must match the article title"}]
        //     creatingArticle = false
        //     return
        // }

        createForm.requestSubmit()

        if (page.form) {
            if (page.form.errors) {
                errors = page.form.errors
            } else {
                goto(`/wiki/${page.form.data.article.title}`)
            }
        }
        creatingArticle = false
    }

    const carta = new Carta({
        extensions: [anchor(), remark(), rehype()],
        sanitizer: DOMPurify.sanitize
    })
</script>

<Overlay show={creatingArticle}><h2>Creating Article...</h2></Overlay>
<div class="create-article">
    <h2>Create New Article</h2>
    <form method="POST" bind:this={createForm} use:enhance={(data) => data.formData.append('content', articleContent)} >
        <div class="inputs">
            <label for="title">
                <span>Title</span>
                <input type="text" id="title" name="title" bind:value={articleTitle}>
            </label>
            <label for="tags">
                <div>Tags</div>
                {#if data.tags}
                <select id="tags" name="tags" multiple >
                {#each data.tags as tag}
                            <option value={tag.name}>{tag.name}</option>
                        {/each}
                </select>
                    {/if}
            </label>
            <input hidden type="text" name="author" value='orangeburrito' />
        </div>
    </form>
    <MarkdownEditor {carta} mode="tabs" bind:value={articleContent} />
    <!-- <button onclick={createArticle}>Create Article</button> -->
    <button disabled>Create Article</button>
    {#if errors.length > 0}
        <Errors {errors} />
    {/if}
</div>

<style>
    :global(main) {
        width: 100%;
    }

    .create-article {
        position: relative;
    }

    :global(.create-article .errors) {
        position: absolute;
        top: 0;
        right: 0;
        width: 60%;
    }
</style>