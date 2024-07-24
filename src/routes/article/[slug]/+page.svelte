<script lang="ts">
	import type { PageData } from '../[[slug]]/$houdini'

	export let data: PageData

	$: ({ Article } = data)
</script>

{#if $Article.fetching}
	<p>Loading...</p>
{:else}
	<h1>{$Article.data.articleBySlug.title}</h1>
	{#if $Article.data.articleBySlug.updatedAt}
		<em>Last updated: {$Article.data.articleBySlug.updatedAt}</em>
		<br>
	{/if}
	<p>{$Article.data.articleBySlug.content}</p>
{/if}