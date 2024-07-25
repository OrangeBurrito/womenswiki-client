<script lang="ts">
	import type { PageData } from './$houdini'
	import type {Plugin } from 'svelte-exmarkdown'
	import Markdown from 'svelte-exmarkdown'
	import { gfmPlugin } from 'svelte-exmarkdown/gfm'
	import rehypeRaw from 'rehype-raw'

	export let data: PageData
	const plugins: Plugin[] = [gfmPlugin(), { rehypePlugin: [rehypeRaw] }]

	$: ({ Article } = data)
</script>

{#if $Article.fetching}
	<p>Loading...</p>
{:else}
<article>
	<h1>{$Article.data.articleBySlug.title}</h1>
	{#if $Article.data.articleBySlug.updatedAt}
		<em>Last updated: {$Article.data.articleBySlug.updatedAt}</em>
		<br>
	{/if}
	<div class="content">
		<Markdown md={$Article.data.articleBySlug.content} {plugins} />
	</div>
</article>
{/if}