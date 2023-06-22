<script lang="ts">
	import Markdown from '$lib/components/Markdown.svelte'
	import type { PageData } from './$types'

	export let data: PageData

</script>

{#if data.article}
	<a href={`edit?article=${data.article.slug}`}>Edit Article</a>
	<h2>{data.article.title}</h2>
	<Markdown text={data.article.latestRevision.content}/>
{:else}
	<h2>Article Not Found</h2>
{/if}