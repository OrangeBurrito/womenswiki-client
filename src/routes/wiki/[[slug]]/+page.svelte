<script lang="ts">
	import Markdown from '$lib/components/Markdown.svelte'
	import type { PageData } from './$houdini'

	export let data: PageData

	$: ({Article} = data)
</script>

<h2>{$Article.data?.article?.title}</h2>
<Markdown text={$Article.data?.article?.latestRevision.content}/>