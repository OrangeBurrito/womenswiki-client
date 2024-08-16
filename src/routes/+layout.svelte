<script lang="ts">
    import { setContextClient } from '@urql/svelte'
    import { client } from '$lib/graphql/client'
    import SearchBar from '$lib/components/SearchBar.svelte'
    import '$lib/style.css'

    setContextClient(client)
</script>

<header>
    <div class="inner">
        <h3 id="page-title"><a href="/">WomensWiki</a></h3>
        <SearchBar/>
    </div>
</header>
<main>
    <slot/>
</main>

<style>
    header {
        background: var(--color-primary-light);
    }
    
    header .inner {
        max-width: 900px;
        display: flex;
        align-items: center;
        gap: 1rem;
        padding: 0.5rem 0;
        margin: 0 auto;
    }

    #page-title a {
        font-weight: bold;
        border-bottom: none;
    }
    
    main {
        max-width: 900px;
        padding: 2rem 0;
        margin: 0 auto;
    }
</style>