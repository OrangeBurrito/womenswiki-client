<script lang="ts">
	import Markdown from '$lib/components/Markdown.svelte'
	import type { PageData } from './$houdini'

	export let data: PageData

	$: ({Article} = data)
</script>

<article>
	<h1>{$Article.data?.article?.title}</h1>
	<Markdown text={$Article.data?.article?.latestRevision?.content}/>
</article>