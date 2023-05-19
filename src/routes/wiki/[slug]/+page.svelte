<script lang="ts">
	import { page } from '$app/stores'
	import type { Article } from '$lib/types'
	import type { PageData } from './$types'

	export let data: PageData

	const article = data.articles.find((article: Article) => {
		return article.slug === $page.params.slug
	})
</script>

{#if article}
	<h2>{article.title}</h2>
{:else}
	<h2>Article Not Found</h2>
{/if}
