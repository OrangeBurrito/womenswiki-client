<script lang="ts">
	import type { PageData } from './$houdini'
	import { Carta, Markdown } from 'carta-md'
	import type { Plugin, UnifiedTransformer} from 'carta-md'
	import { anchor } from '@cartamd/plugin-anchor'
	import remarkToc from 'remark-toc'
	import remarkGfm from 'remark-gfm'

	export let data: PageData

	$: ({ Article } = data)

	const transformer: UnifiedTransformer<'sync'> = {
		execution: 'sync',
		type: 'remark',
		transform: ({processor}) => {
			processor
				.use(remarkGfm)
				.use(remarkToc)
		}
	}

	const remark = (): Plugin => ({transformers: [transformer]})

	const carta = new Carta({
		extensions: [anchor(), remark()]
	})
</script>

{#if $Article.fetching}
	<p>Loading...</p>
{:else}
<article>
	<h1 class="article-title">{$Article.data.articleBySlug.title}</h1>
	{#if $Article.data.articleBySlug.updatedAt}
		<em class="last-updated">Last updated: {$Article.data.articleBySlug.updatedAt}</em>
	{/if}
	<div class="content">
		<Markdown {carta} value={$Article.data.articleBySlug.content} />
	</div>
</article>
{/if}

<style>
	.last-updated {
		display: block;
		margin-top: -0.5rem;
		margin-bottom: 1rem;
	}
</style>