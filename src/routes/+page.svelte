<script lang="ts">
	import List from '$lib/components/List.svelte'
	import Tag from '$lib/components/Tag.svelte'
	import CategoryBox from '$lib/components/CategoryBox.svelte'
	import { ARTICLES, TAGS } from "$lib/graphql/query"
	import { getContextClient, queryStore } from "@urql/svelte"

	const articles = queryStore({
		client: getContextClient(),
		query: ARTICLES,
		variables: {
			input: {
				'limit': 5,
			}
		}
	})

	const tags = queryStore({
		client: getContextClient(),
		query: TAGS,
		variables: {
			input: {
				'limit': 10,
				'descending': true
			}
		}
	})
</script>

<section class="center">
	<div class="text">
		<h2>WomensWiki</h2>
		<em>The Radical Feminist Wiki<br>exclusively for, and by women</em>
		<p><strong>{$articles.data?.articles.length ?? '??'}</strong> articles and counting</p>
	</div>
	<img src="/images/underconstruction.png" alt="Under Construction">
	<!-- <p><strong>WomensWiki</strong>, the free and open Radical Feminist Wiki</p> -->
</section>
<div class="content">
	<section>
		<h2>Categories</h2>
		<List>
			<CategoryBox href="/wiki/introduction">
				<h3>Introduction</h3>
			</CategoryBox>
			<CategoryBox href="/wiki/radical_feminism">
				<h3>Radical Feminism</h3>
			</CategoryBox>
			<CategoryBox href="/wiki/history">
				<h3>Women in History</h3>
			</CategoryBox>
			<CategoryBox href="/wiki/media_literature">
				<h3>Feminist Media & Literature</h3>
			</CategoryBox>
			<CategoryBox href="/other_resources">
				<h3>Other Websites & Resources</h3>
			</CategoryBox>
		</List>
		<h2>Common Tags</h2>
		{#if $tags.fetching}
			<p>Loading...</p>
		{:else}
		<ul class="common-tags">
			{#each $tags.data.tags.data as tag}
			<li>
				<Tag name={tag.name}/>
			</li>
			{/each}
		</ul>
		{/if}
	</section>
	<section class="latest-articles">
		<h2>Latest Articles</h2>
		{#if $articles.fetching}
		<p>Loading...</p>
		{:else}
			<List>
				{#each $articles.data.articles as article}
				<CategoryBox href="/wiki/{article.slug}">
					<h3>{article.title}</h3>
					<div class="tags">
						{#each article.tags as tag}
							<Tag name={tag.name}/>
						{/each}
					</div>
				</CategoryBox>
				{/each}
			</List>
		{/if}
	</section>
</div>

<style>
	.center {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 2rem;
		margin-bottom: 2rem;
	}

	.center img {
		max-width: 180px;
	}

	.text h2 {
		color: var(--color-primary);
		margin-bottom: 0;
	}

	.content {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 2rem;
	}

	.common-tags, .tags {
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem;
		list-style: none;
	}

	.common-tags li {
		margin-bottom: 0.5rem;
	}

	.latest-articles {
		max-width: 70%;
		overflow-y: auto;
	}

	@media (max-width: 450px) {
		.center {
			flex-direction: column;
		}
	}
	@media (max-width: 700px) {
		.content {
			grid-template-columns: 1fr;
		}
	}
</style>