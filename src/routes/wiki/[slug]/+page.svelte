<script lang="ts">
	import type { PageServerData } from './$types'
	import { remark, rehype } from '$lib/markdown/plugin'
	import { getContextClient, queryStore } from '@urql/svelte'
	import { ARTICLE_BY_SLUG } from '$lib/graphql/query'
	import { Carta, Markdown } from 'carta-md'
	import { anchor } from '@cartamd/plugin-anchor'

	export let data: PageServerData

	const article = queryStore({
		client: getContextClient(),
		query: ARTICLE_BY_SLUG,
		variables: {
			slug: data.slug
		}
	})

	const carta = new Carta({
		extensions: [anchor(), remark(), rehype()]
	})
</script>

{#if $article.fetching}
	<p>Loading...</p>
{:else}
<article>
	<div class="content">
	<h1 class="article-title">{$article.data.articleBySlug.title}</h1>
	{#if $article.data.articleBySlug.updatedAt}
		<em class="last-updated">Last updated: {$article.data.articleBySlug.updatedAt}</em>
	{/if}
		<Markdown {carta} value={$article.data.articleBySlug.content} />
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