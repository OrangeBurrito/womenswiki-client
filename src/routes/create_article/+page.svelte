<script lang="ts">
	import Markdown from "$lib/components/Markdown.svelte"
	import { debounce } from "$lib/util"
	import { onMount } from "svelte"

    let articleText = ''
    let title = ''

    onMount(() => {
        ({ title, articleText } = JSON.parse(localStorage.getItem('articleEdit') ?? ''))
        console.log(articleText)
    })

    const cacheArticleEdit = () => {
        localStorage.setItem('articleEdit', JSON.stringify({
            title,
            articleText
        }))
    }
</script>

<h2>Create New Article</h2>

<div class="create-article">
    <form action="">
        <label for="title">Title</label>
        <input type="text" id="title" bind:value={title} on:input={debounce(cacheArticleEdit, 400)}>

        <label for="content">Content</label>
        <textarea id="content" bind:value={articleText} on:input={debounce(cacheArticleEdit, 400)}></textarea>
    </form>
    
    <div class="article-preview">
        <h2>Live Preview</h2>
        <h3>{title}</h3>
        <Markdown text={articleText} />
    </div>
</div>
<button>Submit Article</button>

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