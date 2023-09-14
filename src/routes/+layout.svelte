<script lang="ts">
	import '$lib/global.css'
	import SearchBar from '$lib/components/SearchBar.svelte'
</script>

<header>
    <a href="/"><h2>WomensWiki</h2></a>
	<nav>
		<a href="/">Home</a>
		<a href="/wiki">Articles</a>
		<a href="/create_article">Create New Article</a>
	</nav>

	<SearchBar />
</header>

<main>
    <slot />
</main>

<style>
    header, main {
        padding: 1rem;
    }
</style>