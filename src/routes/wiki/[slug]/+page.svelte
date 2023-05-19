<script lang="ts">
	import type { PageData } from "./$types";

    export let data: PageData
</script>

{#if data.article}
    <h2>{data.article.title}</h2>
{:else}
    <h2>Article not found</h2>
{/if}
