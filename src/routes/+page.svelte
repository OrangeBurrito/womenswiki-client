<script lang="ts">
	import type { PageData } from './$houdini'

	export let data: PageData

	$: ({ Articles } = data)

	
</script>

<h2>Latest Articles</h2>
{#if $Articles.fetching}
	<p>Loading...</p>
{:else}
	<ul>
		{#each $Articles.data.articles as article}
			<li>
				<a href="/wiki/{article.slug}">{article.title}</a>
			</li>
		{/each}
	</ul>
{/if}