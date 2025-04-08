<script lang="ts">
	import type { Snippet } from "svelte"

    interface Props {
        children: Snippet
    }

    let { children }: Props = $props()
</script>

<div class="page">
{@render children()}
</div>

<style>
    .page {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 20px;
        background-color: #f0f0f0;
        border-radius: 8px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    }
</style>