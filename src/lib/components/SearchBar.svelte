<script lang="ts">
	import { debounce } from "$lib/util";

    export let items: any = []
    let filteredItems: any = []
    let searchQuery: string = ""
    
    const search = debounce((e: InputEvent) => {
        searchQuery = (e.target as HTMLInputElement).value
    }, 100)

    $: filteredItems = items.filter((i:any) => i.title.toLowerCase().includes(searchQuery.toLowerCase()))
</script>

<input type="text" placeholder="Search for articles"
on:input={search}
>

{#if searchQuery.length > 0}
    {#each filteredItems as item}
        <div class="item">
            <a href="/wiki/{item.slug}">{item.title}</a>
        </div>
    {/each}
{/if}