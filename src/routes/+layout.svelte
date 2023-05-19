<script lang="ts">
	import '$lib/global.css'
	import SearchBar from '$lib/components/SearchBar.svelte'
	import type { PageData } from './$types'

	export let data: PageData
</script>

<header>
    <a href="/"><h2>WomensWiki</h2></a>
	<nav>
		<a href="/">Home</a>
		<a href="/wiki">Articles</a>
	</nav>

	<SearchBar items={data.articles} />
</header>

<main>
    <slot />
</main>

<style>
    header, main {
        padding: 1rem;
    }
</style>