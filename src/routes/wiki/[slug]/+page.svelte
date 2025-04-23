<script lang="ts">
	import type { PageServerData } from './$types'
	import { onMount } from 'svelte'
	import { remark, rehype } from '$lib/markdown/plugin'
	import { anchor } from '@cartamd/plugin-anchor'
	import { formatTitle } from '$lib/util'
	import { Carta, Markdown } from 'carta-md'
	import DOMPurify from 'isomorphic-dompurify'
	import Tag from '$lib/components/Tag.svelte'

	interface Props {
		data: PageServerData
	}

	let { data }: Props = $props()

	const { article } = data

	const carta = new Carta({
		extensions: [anchor(), remark(), rehype()],
		sanitizer: DOMPurify.sanitize
	})

	onMount(() => {
		const articleBody = document.querySelector('.markdown-body')!
		const tocHeadings = Array.from(articleBody.querySelectorAll('h2'))

		const scrollHandler = (entries: IntersectionObserverEntry[]) => {
			entries.forEach((e: IntersectionObserverEntry) => {
				const heading = e.target as HTMLElement
				const id = heading.id
				const headingLink = document.querySelector(`a[href="#${id}"]`)

				if (e.intersectionRatio > 0) {
					headingLink?.classList.add('active')
				} else {
					headingLink?.classList.remove('active')
				}
			})
		}
		
		const observer = new IntersectionObserver(scrollHandler)
		
		tocHeadings.forEach(heading => {
			observer.observe(heading)
		})
	})
</script>

<svelte:head>
	<title>{article.length === 0 ? 'No article found - WomensWiki' : `${formatTitle(article.title)} - WomensWiki`}</title>
</svelte:head>

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
		<Markdown {carta} value={`\n## remarktoc\n## (Top)\n${article.content}`} />
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
    	max-width: clamp(50ch, 60vw, 70ch);
	}

	.last-updated {
		display: block;
		margin-top: -0.5rem;
		color: var(--color-border);
	}

	.tags {
		display: flex;
		gap: 0.5rem;
		margin-bottom: 1rem;
	}
</style>