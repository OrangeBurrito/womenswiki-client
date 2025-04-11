<script lang="ts">
	import type { PageServerData } from './$types'
	import { getContextClient, queryStore } from '@urql/svelte'
	import { remark, rehype } from '$lib/markdown/plugin'
	import { ARTICLE_BY_TITLE } from '$lib/graphql/operations/query'
	import { anchor } from '@cartamd/plugin-anchor'
	import DOMPurify from 'isomorphic-dompurify'
	import { Carta, Markdown } from 'carta-md'
	import Tag from '$lib/components/Tag.svelte'
	import Loading from '$lib/components/Loading.svelte'
	import { formatTitle } from '$lib/util'

	export let data: PageServerData

	const articleQuery = queryStore({
		client: getContextClient(),
		query: ARTICLE_BY_TITLE,
		variables: {
			title: data.slug
		}
	})

	const carta = new Carta({
		extensions: [anchor(), remark(), rehype()],
		sanitizer: DOMPurify.sanitize
	})
</script>

{#if $articleQuery.fetching}
	<Loading/>
{:else if $articleQuery.data.articleByTitle.errors}
	<h2>{$articleQuery.data.articleByTitle.errors[0].message}</h2>
	<a href="/">Go Back</a>
{:else}
	{@const article = $articleQuery.data.articleByTitle.data}
	<article data-sveltekit-reload>
		<div class="wrap">
			<div class="heading">
				<h1 class="article-title">{formatTitle(article.title)}</h1>
				{#if article.updatedAt}
					<em class="last-updated">Last updated: {article.updatedAt}</em>
				{/if}
				<div class="tags">
					{#each article.tags as tag}
						<Tag name={tag.name} color={tag.color.value} />
					{/each}
				</div>
		</div>
		<Markdown {carta} value={article.content} />
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