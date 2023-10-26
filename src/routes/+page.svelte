<script lang="ts">
    import { onMount } from 'svelte'
    
    let articles: Article[]

    onMount(async () => {
        const res = await fetch('http://localhost:5161/articles')
        articles = await res.json()
    })
</script>

<h2>Articles</h2>

{#if articles}
<ul>
    {#each articles as article}
    <li>
        <a href="/article/{article.id}">{article.title}</a>
    </li>
    {/each}
</ul>
{/if}

<a href="/article/create">Create An Article</a>