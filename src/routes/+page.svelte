<script lang="ts">
	import { ARTICLES, TAGS } from "$lib/graphql/query"
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

	const tags = queryStore({
		client: getContextClient(),
		query: TAGS,
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
		<h2>Predefined Categories</h2>
		<ul>
			<li>Radical Feminism & TERFery</li>
			<li>Notable Women</li>
			<li>Women in History</li>
			<li>Literature</li>
			<li>Media</li>
		</ul>
		<h2>Common Tags</h2>
		{#if $tags.fetching}
			<p>Loading...</p>
		{:else}
		<ul>
			{#each $tags.data.tags.data as tag}
			<a href="/tags/{tag.name}">{tag.name}</a>
			{/each}
		</ul>
		{/if}
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