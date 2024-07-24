<script lang="ts">
    import { onMount } from 'svelte'
    
    let articles: Article[]

    onMount(async () => {
        const res = await fetch('http://localhost:5161/articles')
        articles = await res.json()
    })
</script>

<h1 id="page-title">WomensWiki</h1>

{#if articles}
<h2>Latest Articles</h2>
<ul>
    {#each articles as article}
    <li>
        <a href="/article/{article.slug}">{article.title}</a>
    </li>
    {/each}
</ul>
{/if}

<a href="/article/create">Create An Article</a>

<style>
    .page-title {
        color: var(--color-primary);
    }
</style>