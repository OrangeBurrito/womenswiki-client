<script lang="ts">
	import type { PageServerData } from "./$types"
	import { SUBTAGS } from "$lib/graphql/operations/query"
	import { getContextClient, queryStore } from "@urql/svelte"
	import { onMount } from "svelte"
	import Tag from "$lib/components/Tag.svelte"
	import { page } from "$app/stores"
	import { formatTitle } from "$lib/util"

    export let data: PageServerData
    let tag = data?.tag
    
    const subtagsQuery = queryStore({
        client: getContextClient(),
        query: SUBTAGS,
        variables: {
            input: {
                tag: tag?.name,
                descending: false,
                limit: 10,
                offset: 0
            }
        },
        pause: true
    })
    
    onMount(() => {
        subtagsQuery.resume()
    })
</script>

{#if tag}
    <h1>Tag: <code>{tag.name}</code></h1>
    {#if tag.parentTags.length > 0}
    <h2>Parent Tags</h2>
        <ul>
        {#each tag.parentTags as parentTag}
            <li><Tag name={parentTag.name} color={parentTag.color.value}/></li>
        {/each}
     </ul>
    {/if}
    {#if !$subtagsQuery.fetching && $subtagsQuery.data?.subtags.data.length > 0}
        <h2>Subtags</h2>
        <em class="subtitle">This tag has {$subtagsQuery.data.subtags.data.length} subtags</em>
        <ul>
            {#each $subtagsQuery.data.subtags.data as subtag}
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
{:else}
    <h2>Tag "<code>{$page.params.tag}</code>" Not Found</h2>
    <a href="/">Go Back</a>
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