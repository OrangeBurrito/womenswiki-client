<script lang="ts">
	import type { PageProps, PageServerData } from './$types'
	import { remark, rehype } from '$lib/markdown/plugin'
	import { anchor } from '@cartamd/plugin-anchor'
	import { formatTitle } from '$lib/util'
	import Tag from '$lib/components/Tag.svelte'
	import DOMPurify from 'isomorphic-dompurify'
	import { Carta, Markdown } from 'carta-md'

	interface Props {
		data: PageServerData
	}

	let { data }: Props = $props()

	const { article } = data

	const carta = new Carta({
		extensions: [anchor(), remark(), rehype()],
		sanitizer: DOMPurify.sanitize
	})
</script>

{#if article.length === 0}
	<h2>No article found</h2>
	<a href="/">Go Back</a>
{:else}
	<article data-sveltekit-reload>
		<div class="wrap">
			<div class="heading">
				<h1 class="article-title">{formatTitle(article.title)}</h1>
				<div class="tags">
					{#each article.tags as tag}
					<Tag name={tag.name} color={tag.color.value} />
					{/each}
				</div>
				{#if article.updatedAt}
					<em class="last-updated">Last updated: {new Date(article.updatedAt).toLocaleDateString('en-GB')}</em>
				{/if}
		</div>
		<Markdown {carta} value={article.content} />
	</article>
{/if}

<style>
	article {
		display: flex;
		justify-content: center;
	}

	.heading {
		margin-bottom: 1rem;
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
		color: var(--color-border);
	}

	.tags {
		display: flex;
		gap: 0.5rem;
		margin-bottom: 1rem;
	}
</style>