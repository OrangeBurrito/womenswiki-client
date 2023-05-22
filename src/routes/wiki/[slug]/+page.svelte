<script lang="ts">
	import Markdown from '$lib/components/Markdown.svelte'
	import type { PageData } from './$types'

	export let data: PageData
</script>

{#if data.article}
	<h2>{data.article.title}</h2>
	<Markdown text={data.article.revisions[0].content}/>
{:else}
	<h2>Article Not Found</h2>
{/if}