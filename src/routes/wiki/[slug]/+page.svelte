<script lang="ts">
	import { page } from "$app/stores";
import type { PageData } from "./$types";

    export let data: PageData

    let article = data.json.find((article: { slug: string; }) => {
        return article.slug === $page.params.slug
    })
</script>

{#if article}
    <h2>{article.title}</h2>
{:else}
    <h2>Article Not Found</h2>
{/if}