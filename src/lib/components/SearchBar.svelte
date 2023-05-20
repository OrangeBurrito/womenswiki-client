<script lang="ts">
	import { PUBLIC_SERVER_URL } from '$env/static/public'
	import { debounce } from '$lib/util'

	let items: any = []
	let searchQuery: string = ''

	const search = async (e: InputEvent) => {
		searchQuery = (e.target as HTMLInputElement).value
		const res = await fetch(`${PUBLIC_SERVER_URL}/search?title=${searchQuery}`)
		items = await res.json()
		console.log(items)
    }
</script>

<input type="text" on:input={debounce(search,150)} bind:value={searchQuery} placeholder="Search for articles" />

{#if searchQuery.length > 0}
	<div class="search-results">
		{#each items as item}
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