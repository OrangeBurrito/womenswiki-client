<script lang="ts">
	import type { PageData } from './$houdini'

	export let data: PageData

	$: ({ Articles } = data)

	
</script>

<section class="center">
	<p><strong>WomensWiki</strong>, the free and open Radical Feminist Wiki for all women</p>
	<p>{$Articles.data?.articles.length} articles and counting</p>
</section>
<div class="content">
	<section>
		<h2>Self-Made Categories</h2>
		<ul>
			<li>Category1</li>
			<li>Category2</li>
			<li>Category3</li>
			<li>Category4</li>
			<li>Category5</li>
		</ul>
		<h2>Common Tags</h2>
		<ul>
			<li>Tag1</li>
			<li>Tag2</li>
			<li>Tag3</li>
			<li>Tag4</li>
		</ul>
	</section>
	<section>
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
	</section>
</div>

<style>
	.center {
		text-align: center;
		padding: 2rem 0;
	}

	.content {
		display: grid;
		grid-template-columns: 1fr 1fr;
		/* grid-template-columns: 1fr 1fr; */
	}
</style>