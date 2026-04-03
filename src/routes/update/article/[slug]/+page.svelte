<script lang="ts">
	import { goto } from '$app/navigation'
	import { MarkdownEditor } from 'carta-md'
	import type { PageServerData } from './$types'
	import { enhance } from '$app/forms'
	import { page } from '$app/state'
	import { carta } from '$lib/markdown/plugin'
	import { formatTitle } from '$lib/util'

	interface Props {
		data: PageServerData
	}

	let { data }: Props = $props()

	let updateForm: HTMLFormElement
	let articleContent = $state(data.article.content)
	let errors = $state([])

	function updateArticle() {
		errors = []
		updateForm.requestSubmit()

		if (page.form) {
			if (page.form.errors.length > 0) {
				errors = page.form.errors
			} else {
				setTimeout(() => goto(`/wiki/${page.form.data.article.title}`), 0)
			}
		}
	}
</script>

<div class="update-article">
	<h2>Updating Article {formatTitle(data.article.title)}</h2>
	<form method="POST" bind:this={updateForm} use:enhance={(data) => data.formData.append('content', articleContent)}>
		<label for="summary">
			<span>Summary</span>
			<textarea name="summary" id="summary" placeholder="Summary of changes"></textarea>
		</label>
		<input type="hidden" name="articleId" value={data.article.id} />
		<input type="hidden" name="author" value="orangeburrito" />
	</form>
	<MarkdownEditor {carta} mode="tabs" theme="horizon" bind:value={articleContent} />
	<!-- <button onclick={updateArticle}>Update Article</button> -->
</div>
