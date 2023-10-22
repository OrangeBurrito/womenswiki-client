<script lang="ts">
    import { onMount } from 'svelte'
    
    let articles: Article[]

    onMount(async () => {
        const res = await fetch('http://localhost:5161/articles')
        articles = await res.json()
        console.log(articles)
    })
</script>

<h1>WomensWiki</h1>

<h2>Articles</h2>

{#if articles}
    {#each articles as article}
        <a href="/article/{article.id}">{article.title}</a>
    {/each}
{/if}