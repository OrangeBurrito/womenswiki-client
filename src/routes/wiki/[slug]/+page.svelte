<script lang="ts">
	import type { PageData } from './$houdini'
	import { Carta, Markdown } from 'carta-md'
	import { anchor } from '@cartamd/plugin-anchor'
	import { remark, rehype } from '$lib/markdown/plugin'

	export let data: PageData

	$: ({ Article } = data)

	const carta = new Carta({
		extensions: [anchor(), remark(), rehype()]
	})
</script>

{#if $Article.fetching}
	<p>Loading...</p>
{:else}
<article>
	<div class="content">
	<h1 class="article-title">{$Article.data.articleBySlug.title}</h1>
	{#if $Article.data.articleBySlug.updatedAt}
		<em class="last-updated">Last updated: {$Article.data.articleBySlug.updatedAt}</em>
	{/if}
		<Markdown {carta} value={$Article.data.articleBySlug.content} />
	</div>
</article>
{/if}

<style>
	article {
		display: flex;
		justify-content: center;
	}

	.article-title {
		margin-bottom: 0.5rem;
	}

	article .content {
    	max-width: 80ch;
	}

	.last-updated {
		display: block;
		margin-top: -0.5rem;
		margin-bottom: 1rem;
	}
</style>