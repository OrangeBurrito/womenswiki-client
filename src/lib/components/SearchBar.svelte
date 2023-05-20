<script lang="ts">
	import { debounce } from '$lib/util'

	export let items: any = []
	let filteredItems: any = []
	let searchQuery: string = ''

	const search = (e: InputEvent) => {
		searchQuery = (e.target as HTMLInputElement).value
    }

	$: filteredItems = items.filter((i: any) =>
		i.title.toLowerCase().includes(searchQuery.toLowerCase())
	)
</script>

<input type="text" on:input={debounce(search,100)} bind:value={searchQuery} placeholder="Search for articles" />

{#if searchQuery.length > 0}
	<div class="search-results">
		{#each filteredItems as item}
		<a class="article" href={`/wiki/${item.slug}`} on:click={()=>searchQuery=''} target="_self">{item.title}</a>
		{/each}
	</div>
{/if}

<style>
	.search-results {
		width: fit-content;
		border: 1px solid #333;
	}

	input, .article {
		display: block;
		padding: 0.5rem 1rem;
	}
	
	.article:hover {
		cursor: pointer;
		text-decoration: underline;
		background: #eee;
	}
</style>