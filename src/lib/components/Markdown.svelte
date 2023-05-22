<script lang="ts">
	import { marked } from "marked"

    export let text = ''
    $: markdown = marked.parse(text)
</script>

<div class="markdown">
    {@html markdown}
</div>