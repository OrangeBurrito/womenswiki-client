<script lang="ts">
    import SearchBar from '$lib/components/SearchBar.svelte'
    import '$lib/style.css'
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
        background: rgb(236, 232, 241);
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
        margin: 0 auto;
    }
</style>