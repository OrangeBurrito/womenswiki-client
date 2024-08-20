<script lang="ts">
	import type { PageServerData } from "./$types"
	import { SUBTAGS } from "$lib/graphql/query"
	import { getContextClient, queryStore } from "@urql/svelte"
	import { onMount } from "svelte"
	import Tag from "$lib/components/Tag.svelte"

    export let data: PageServerData

    const subtags = queryStore({
        client: getContextClient(),
        query: SUBTAGS,
        variables: {
            input: {
                tag: data.tag.name
            }
        },
        pause: true
    })

    onMount(() => {
        subtags.resume()
    })
</script>

{#if data.tag}
    <h2>Tag: <code>{data.tag.name}</code></h2>
    {#if data.tag.parentTags.length > 0}
    <h3>Parent Tags</h3>
        <ul>
        {#each data.tag.parentTags as parentTag}
            <li><a href="/tags/{parentTag.name}">{parentTag.name}</a></li>
        {/each}
     </ul>
    {/if}
    <h3>Subtags</h3>
    {#if !$subtags.fetching && $subtags.data}
    <ul>
        {#each $subtags.data.subtags.data as subtag}
            <li><Tag name={subtag.name} /></li>
        {/each}
    </ul>
    {/if}
    <h3>Articles tagged with <code>{data.tag.name}</code></h3>
    <ul>
        {#each data.tag.articles as article}
            <li><a href="/wiki/{article.slug}">{article.title}</a></li>
        {/each}
    </ul>
{:else}
    <p>Tag Not Found</p>
{/if}