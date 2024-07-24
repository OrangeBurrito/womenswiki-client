<script lang="ts">
    import '$lib/style.css'
</script>

<header>
    <h2 id="page-title"><a href="/">WomensWiki</a></h2>
</header>
<main>
    <slot/>
</main>

<style>
    header {
        padding: 1rem 2rem;
        border-bottom: 2px solid var(--color-primary);
    }

    #page-title a {
        font-weight: bold;
        border-bottom: none;
    }
    
    main {
        padding: 2rem;
    }
</style>