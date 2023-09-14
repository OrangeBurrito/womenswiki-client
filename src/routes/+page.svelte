<script lang="ts">
    import type { PageData } from './$houdini'

    export let data: PageData

    $: ({Articles} = data)
</script>

<h1>Homepage</h1>
<p>Check out our articles!</p>

<h2>Articles</h2>

{#each $Articles.data.articles as article}
    <a class="article" href={`/wiki/${article.slug}`}>
        <h2>{article.title}</h2>
    </a>
{/each}

<style>
    .article {
        display: block;
    }
</style>