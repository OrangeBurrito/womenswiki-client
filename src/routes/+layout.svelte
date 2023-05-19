<script lang="ts">
	import SearchBar from "$lib/components/SearchBar.svelte";
	import type { PageData } from "./$types";

    export let data: PageData
</script>

<header>
    <h2>WomensWiki</h2>
    <nav>
        <a href="/">Home</a>
        <a href="/wiki">Articles</a>
    </nav>

    <SearchBar items={data.json}/>
</header>


<slot/>