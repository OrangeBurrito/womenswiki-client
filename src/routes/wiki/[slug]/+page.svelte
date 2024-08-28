<script lang="ts">
	import type { PageServerData } from './$types'
	import Tag from '$lib/components/Tag.svelte'
	import { remark, rehype } from '$lib/markdown/plugin'
	import { getContextClient, queryStore } from '@urql/svelte'
	import { ARTICLE_BY_SLUG } from '$lib/graphql/operations/query'
	import { Carta, Markdown } from 'carta-md'
	import { anchor } from '@cartamd/plugin-anchor'
	import Loading from '$lib/components/Loading.svelte'

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
	<Loading/>
{:else if $article.data.articleBySlug.errors}
	<h2>{$article.data.articleBySlug.errors[0].message}</h2>
	<a href="/">Go Back</a>
{:else}
<article>
	<div class="wrap">
		<div class="heading">
			<h1 class="article-title">{$article.data.articleBySlug.data.title}</h1>
			{#if $article.data.articleBySlug.data.updatedAt}
				<em class="last-updated">Last updated: {$article.data.articleBySlug.data.updatedAt}</em>
			{/if}
			<div class="tags">
				{#each $article.data.articleBySlug.data.tags as tag}
					<Tag name={tag.name} />
				{/each}
			</div>
		</div>
			<Markdown {carta} value={$article.data.articleBySlug.data.content} />
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

	article .wrap {
    	max-width: 80ch;
	}

	.last-updated {
		display: block;
		margin-top: -0.5rem;
		margin-bottom: 0.5rem;
	}

	.tags {
		display: flex;
		gap: 0.5rem;
		margin-bottom: 1rem;
	}
</style>