<script lang="ts">
	import type { PageProps } from './$types'
	import List from '$lib/components/List.svelte'
	import Tag from '$lib/components/Tag.svelte'
	import CategoryBox from '$lib/components/CategoryBox.svelte'
	import Loading from '$lib/components/Loading.svelte'
	import { formatTitle } from '$lib/util'

	let { data }: PageProps = $props()

	let { articles, tags } = data
</script>


<section class="center">
	<div class="text">
		<h2>WomensWiki</h2>
		<em>The Radical Feminist Wiki<br>exclusively for, and by women</em>
		<p><strong>{articles.length > 0 ? articles.length : '???'}</strong> articles and counting</p>
	</div>
	<img src="/images/underconstruction.png" alt="Under Construction">
</section>
<section>

</section>
<div class="content">
	<section>
		<h2>Categories</h2>
		<List>
			<CategoryBox href="/wiki/about_womenswiki">
				<h3>About WomensWiki</h3>
			</CategoryBox>
			<CategoryBox href="/wiki/radical_feminism" disabled>
				<h3>Radical Feminism</h3>
			</CategoryBox>
			<CategoryBox href="/wiki/history" disabled>
				<h3>Women in History</h3>
			</CategoryBox>
			<CategoryBox href="/wiki/media_literature" disabled>
				<h3>Feminist Media & Literature</h3>
			</CategoryBox>
			<CategoryBox href="/other_resources" disabled>
				<h3>Other Websites & Resources</h3>
			</CategoryBox>
		</List>
		<h2>Tags</h2>
		{#if tags}
			<div class="common-tags">
				{#each tags as tag}
					<Tag name={tag.name} color={tag.color.value}/>
				{/each}
			</div>
		{/if}
	</section>
	<section class="latest-articles">
		<h2>Latest Articles</h2>
		{#if articles}
			<List>
				{#each articles as article}
				<CategoryBox href="/wiki/{article.title}">
					<h3>{formatTitle(article.title)}</h3>
					<div class="tags">
						{#each article.tags as tag}
							<Tag name={tag.name} color={tag.color.value}/>
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
		grid-template-columns: 3fr 4fr;
		gap: 2rem;
	}

	.common-tags, .tags {
		display: flex;
		flex-wrap: wrap;
		gap: 6px;
	}

	.tags {
		z-index: 2;
	}

	.latest-articles {
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