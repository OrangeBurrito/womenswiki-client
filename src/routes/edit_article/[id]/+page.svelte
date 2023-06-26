<script lang="ts">
	import type { ActionData, PageData } from "./$types"

    let articleText = ''

    export let data: PageData
    export let form: ActionData

    const unsavedChanges = (event: Event) => {
        if (articleText.length > 0) {
            event.preventDefault()
            event.returnValue = ''
            return ''
        }
    }
</script>

<svelte:window on:beforeunload={unsavedChanges}/> 

<h2>Edit Article</h2>

<h3>Editing {data.article.title}</h3>
<form method="POST" action="?/editArticle" use:enhance>
    <label for="content">Content</label>
        <textarea id="content" name="content" bind:value={articleText}></textarea>
        <input type="hidden" name="id" value={data.article.id}>
        {#if form?.missingContent}
            <p class="error">Content is required and must be at least 100 characters long</p>
        {/if}

        <button type="submit">Submit Article</button>
</form>