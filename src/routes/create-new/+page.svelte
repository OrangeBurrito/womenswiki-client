<script lang="ts">
	import { beforeNavigate, goto } from '$app/navigation'
	import { graphql } from "$houdini"
    import { Carta, MarkdownEditor } from 'carta-md'
    import { anchor } from '@cartamd/plugin-anchor'
	import { rehype, remark } from '$lib/markdown/plugin'
    import 'carta-md/default.css'

    const defaultContent = "{{ infobox \n| title = New Article \n| image = https://images.unsplash.com/photo-1722778610349-e3c02e277ec2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D \n| caption = a little caption \n| value one = some value \n| value two = [a link](https://orangeburrito.com) \n}}\n\nThe below header is required for the Table of Contents\n## Contents\n\n## First Header\nSome content\n\n## Second Header\nSome other content\n\n![Alt Text](https://upload.wikimedia.org/wikipedia/commons/a/a7/Caspar_David_Friedrich%27s_Chalk_Cliffs_on_R%C3%BCgen.jpg)\n\nan image that is very well known of course, hmmm"

    beforeNavigate(({cancel}) => {
    if (articleInput.content !== defaultContent) {
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

	const carta = new Carta({
        extensions: [anchor(), remark(), rehype()]
    })

    let articleInput = {
        author: "orangeburrito",
        title: "New Article",
        content: defaultContent
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
        <MarkdownEditor {carta} mode="tabs" bind:value={articleInput.content} />
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