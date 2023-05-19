<script lang="ts">
    import type { PageData } from './$types'

    export let data: PageData

    console.log(data)
</script>

<h1>Articles</h1>

{#each data.json as article}
    <a class="article" href={`/wiki/${article.slug}`}>
        <h2>{article.title}</h2>
    </a>
{/each}

<style>
    .article {
        display: block;
        padding: 1rem;
    }
</style>