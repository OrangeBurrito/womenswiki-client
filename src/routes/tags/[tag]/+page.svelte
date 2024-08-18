<script lang="ts">
	import type { PageServerData } from "./$types"
	import { ARTICLES_BY_TAG } from "$lib/graphql/query"
	import { getContextClient, queryStore } from "@urql/svelte"

    export let data: PageServerData

    const articles = queryStore({
        client: getContextClient(),
        query: ARTICLES_BY_TAG,
        variables: {
            input: {
                tag: data.tag,
                limit: 10,
                descending: true
            }
        }
    })
</script>

<h2>Tag: {data.tag}</h2>
{#if $articles.fetching}
    <p>Loading...</p>
{:else if $articles.data.articlesByTag.errors}
    <h2>{$articles.data.articlesByTag.errors[0].message}</h2>
    <a href="/">Go Back</a>
{:else}
    <ul>
        {#each $articles.data.articlesByTag.data as article}
            <li><a href="/wiki/{article.slug}">{article.title}</a></li>
        {/each}
    </ul>
{/if}