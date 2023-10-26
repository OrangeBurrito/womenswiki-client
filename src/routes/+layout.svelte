<script lang="ts">
    import '$lib/style.css'
</script>

<header>
    <h2><a href="/">WomensWiki</a></h2>
</header>
<main>
    <slot/>
</main>

<style>
    header {
        padding: 1rem 2rem;
        background: #eee;
    }
    main {
        padding: 2rem;
    }
</style>