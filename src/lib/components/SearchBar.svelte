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

<input type="text" placeholder="Search for articles" on:input={debounce(search,100)} />

{#if searchQuery.length > 0}
	{#each filteredItems as item}
		<div class="item">
			<a href="/wiki/{item.slug}">{item.title}</a>
		</div>
	{/each}
{/if}
