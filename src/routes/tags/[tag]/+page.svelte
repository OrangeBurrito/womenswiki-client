<script lang="ts">
	import type { PageServerData } from "./$types"
	import Tag from "$lib/components/Tag.svelte"
	import { page } from "$app/stores"
	import { formatTitle } from "$lib/util"

    export let data: PageServerData

    let { tag, subtags } = data
</script>

{#if tag.length === 0}
    <h2>Tag "<code>{$page.params.tag}</code>" not found</h2>
    <a href="/">Go Back</a>
{:else}
    <h1>Tag: <code>{tag.name}</code></h1>
    {#if tag.parentTags.length > 0}
    <h2>Parent Tags</h2>
        <ul>
        {#each tag.parentTags as parentTag}
            <li><Tag name={parentTag.name} color={parentTag.color.value}/></li>
        {/each}
     </ul>
    {/if}
    {#if subtags}
        <h2>Subtags</h2>
        <em class="subtitle">This tag has {subtags.length} subtags</em>
        <ul>
            {#each subtags as subtag}
                <li><Tag name={subtag.name} color={subtag.color.value} /></li>
            {/each}
        </ul>
    {/if}
    {#if tag.articles.length > 0}
    <h2>Articles tagged with <code>{tag.name}</code></h2>
    <em class="subtitle">Showing {tag.articles.length} {tag.articles.length === 1 ? "article" : "articles"}</em>
    <ul>
        {#each tag.articles as article}
            <li><a href="/wiki/{article.title}">{formatTitle(article.title)}</a></li>
        {/each}
    </ul>
    {/if}   
{/if}

<style>
    h1 {
        margin-bottom: 1rem;
    }

    h2 {
        margin-bottom: 1rem;
    }
    ul li {
        margin-bottom: 0.25rem;
    }

    .subtitle {
        display: block;
        margin-top: -1rem;
        margin-bottom: 0.5rem;
    }
</style>