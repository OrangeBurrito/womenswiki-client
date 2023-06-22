<script lang="ts">
	import Markdown from "$lib/components/Markdown.svelte"
	import { debounce } from "$lib/util"
	import { onMount } from "svelte"
    import { applyAction, enhance } from "$app/forms"
	import type { ActionData, SubmitFunction } from "./$types"

    export let form: ActionData

    let articleText = ''
    let title = ''

    onMount(() => {
        ({ title, articleText } = JSON.parse(localStorage.getItem('articleEdit') ?? ''))
    })

    const cacheArticleEdit = () => {
        localStorage.setItem('articleEdit', JSON.stringify({
            title,
            articleText
        }))
    }
    const submitArticle: SubmitFunction = () => {      
        return async({result}) => {
            await applyAction(result)
            if (!form?.missingTitle && !form?.missingContent) {
                console.log('it passes')
                articleText = ''
                title = ''
                localStorage.removeItem('articleEdit')
            }
        }
    }
</script>

<h2>Create New Article</h2>

<div class="create-article">
    <form method="POST" action="?/submitArticle" use:enhance={submitArticle}>
        <label for="title">Title</label>
        <input type="text" id="title" name="title" bind:value={title} on:input={debounce(cacheArticleEdit, 400)}>
        {#if form?.missingTitle}
            <p class="error">Title is required</p>
        {/if}

        <label for="content">Content</label>
        <textarea id="content" name="content" bind:value={articleText} on:input={debounce(cacheArticleEdit, 400)}></textarea>
        {#if form?.missingContent}
            <p class="error">Content is required and must be at least 100 characters long</p>
        {/if}

        <button type="submit">Submit Article</button>
    </form>
    
    <div class="article-preview">
        <h2>Live Preview</h2>
        <h3>{title}</h3>
        <Markdown text={articleText} />
    </div>
</div>

<style>
    .create-article {
        display: grid;
        grid-template-columns: 1fr 1fr;
    }

    label {
        display: block;
    }

    #content {
        padding: 0.5rem;
        min-width: 400px;
        min-height: 400px;
    }
</style>
<!-- 
![Tux, the Linux mascot](https://mdg.imgix.net/assets/images/tux.png?auto=format&fit=clip&q=40&w=100)
> Tux the image mascot

| Name |
|------|
| Penguin |

| Age |
|------|
| 36 |

| Country of Origin |
|------|
| Finland | -->