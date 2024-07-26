<script lang="ts">
	import { beforeNavigate, goto } from '$app/navigation'
	import { graphql } from "$houdini"
    import { Carta, MarkdownEditor } from 'carta-md'
    import type { Plugin, UnifiedTransformer} from 'carta-md'
    import 'carta-md/default.css'
    import { anchor } from '@cartamd/plugin-anchor'
	import remarkToc from 'remark-toc'
	import remarkGfm from 'remark-gfm'
    import remarkBreaks from 'remark-breaks'

    beforeNavigate(({cancel}) => {
        if (articleInput.content !== "Put content here\nThe below header is for the Table of Contents\n## Contents\n\n## First Header\nSome content\n\n## Second Header") {
            if (!confirm('You have unsaved changes. Are you sure you want to leave?')) {
                cancel()
            }
        }
    })

    const createArticleMutation = graphql(`
    mutation CreateArticle($input: CreateArticleCommandInput!) {
        createArticle(input: $input) {
            data {
                createdAt
                title
                content
                slug
            }
            errors {
                code
                message
            }
        }
    }
    `)

    const transformer: UnifiedTransformer<'sync'> = {
        execution: 'sync',
		type: 'remark',
		transform: ({processor}) => {
            processor
            .use(remarkGfm)
            .use(remarkBreaks)
            .use(remarkToc)
		}
	}
	const remark = (): Plugin => ({transformers: [transformer]})
    
	const carta = new Carta({
        extensions: [anchor(), remark()]
	})

    let articleInput = {
        author: "orangeburrito",
        title: "New Article",
        content: "Put content here\nThe below header is for the Table of Contents\n## Contents\n\n## First Header\nSome content\n\n## Second Header"
    }

    let mutationResult

    const createArticle = async () => {
        let result = await createArticleMutation.mutate({input: articleInput})
        mutationResult = await result.data?.createArticle
        if (mutationResult.errors == null) {
            goto(`/wiki/${mutationResult.data.slug}`)
        }
    }
</script>

<div class="create-article">
        <h2>Create New Article</h2>
        <div class="title-section">
            <label for="article-title">
                <span>Title</span>
                <input type="text" id="article-title" bind:value={articleInput.title}>
            </label>
            <h2>{articleInput.title}</h2>
        </div>
        {#if mutationResult?.errors}
            <div class="error-box">
                {#each mutationResult.errors as error}
                    <div class="error">{error.message}</div>
                {/each}
            </div>
        {/if}
        <MarkdownEditor {carta} mode="split" bind:value={articleInput.content} />
        <button on:click={createArticle}>Create Article</button>
</div>

<style>

    label {
        margin-bottom: 1rem;
    }

    label, label span {
        display: block;
        font-weight: 500;
    }

    .title-section {
        display: flex;
        align-items: flex-end;
    }

    .title-section label {
        flex-basis: 50%;
    }

    .title-section h2 {
        margin-bottom: 1rem;
    }

    .article-title-preview {
        font-size: 1.75rem;
        font-weight: 700;
    }

    .article-preview {
        height: 100%;
        padding: 1rem;
        border: 1px solid gray;
    }

    .error-box {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        padding: 0.5rem;
        margin-bottom: 1rem;
        background-color: #ffdae4;
        color: #4c0f13;
        font-size: 0.95rem;
    }
</style>