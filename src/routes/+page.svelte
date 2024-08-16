<script lang="ts">
	import { ARTICLES } from "$lib/graphql/query"
	import { getContextClient, queryStore } from "@urql/svelte"

	const articles = queryStore({
		client: getContextClient(),
		query: ARTICLES,
		variables: {
			input: {
				'limit': 10,
			}
		}
	})
</script>

<section class="center">
	<p><strong>WomensWiki</strong>, the free and open Radical Feminist Wiki for all women</p>
	<p>{$articles.data?.articles.length} articles and counting</p>
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
		{#if $articles.fetching}
		<p>Loading...</p>
		{:else}
			<ul>
				{#each $articles.data.articles as article}
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
		margin-bottom: 2rem;
	}

	.content {
		display: grid;
		grid-template-columns: 1fr 1fr;
	}
</style>