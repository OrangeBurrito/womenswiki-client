<script lang="ts">
    let search = ''
</script>

<div class="search-bar">
    <input type="text" bind:value={search} placeholder="Search WomensWiki">
</div>

<style>
    input {
        padding: 0.5rem;
        background: #fff;
        border: none;
    }

</style>