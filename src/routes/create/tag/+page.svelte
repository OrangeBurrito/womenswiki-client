<script lang="ts">
    import Overlay from '$lib/components/Overlay.svelte'
    import Errors from '$lib/components/Errors.svelte'
    import { debounce } from '$lib/util'
    import { getContextClient, mutationStore, queryStore } from '@urql/svelte'
	import { goto } from '$app/navigation'
	import type { CreateTagMutation, CreateTagMutationVariables, TagsQuery, TagsQueryVariables } from '$lib/graphql/types'

    let searchQuery = $state('')
    let filteredTags = $state([])

    let tagInput = $state({
        name: '',
        parentTag: null
    })
    let errors = $state([])
    let creatingTag = $state(false)

    function search() {
        // filteredTags = $tagsQuery.data?.tags?.data?.filter((tag: any) => {
        //     return tag.name.toLowerCase().includes(searchQuery.toLowerCase())
        // })
    }

    // function createTag() {
    //     creatingTag = true
    //     createTagMutation(tagInput).subscribe((res) => {
    //         if (res.fetching === false) {
    //             errors = res.data.createTag.errors
                
    //             if (errors == null) {
    //                 goto(`/tags/${res.data.createTag.data.name}`)
    //             }
    //             creatingTag = false
    //         }
    //     })
    // }
</script>


<h2>Create Tag</h2>
<!-- <Overlay show={creatingTag}><h2>Creating Tag...</h2></Overlay>

{#if errors.length > 0}
    <Errors {errors} />
{/if}
<div class="inputs">
    <label for="parent-tag">
        <p>Parent Tag</p>
        <input type="text" id="parent-tag" bind:value={searchQuery} placeholder="Search for a tag" onkeyup={debounce(search,250)}>
        <select id="parent-tag" bind:value={tagInput.parentTag} onchange={() => searchQuery = tagInput.parentTag}>
            <option value="" disabled selected>Select Tag</option>
            {#each filteredTags as tag}
            <option value={tag.name}>{tag.name}</option>
            {/each}
        </select>
    </label>
    <label for="tag-name">
        <p>Tag Name</p>
        <input type="text" id="tag-name" bind:value={tagInput.name}>
    </label>
</div>
<button disabled>Create Tag</button> -->
<!-- <button onclick={createTag}>Create Tag</button> -->