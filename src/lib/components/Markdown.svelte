<script lang="ts">
	import { marked } from "marked"

    marked.use({
        mangle: false,
        headerIds: false
    })

    export let text = ''
    $: markdown = marked.parse(text)
</script>

<div class="markdown">
    {@html markdown}
</div>

<style>
    .markdown {
        overflow-wrap: break-word;
        max-width: 60ch;
    }
    /* table:first-of-type {
        width: 200px;
        padding: 0.5rem;
        background: #eee;
    }

    table:first-of-type tr:first-of-type{
        width: 150%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    table:first-of-type tr td:first-of-type {
        font-weight: bold;
    } */
</style>