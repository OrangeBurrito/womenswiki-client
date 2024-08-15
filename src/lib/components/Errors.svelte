<script lang="ts">
    export let errors: {code: string, message: string}[] = []

    function closeErrors() {
        errors = []
    }
</script>

{#if errors.length > 0}
<div class="errors">
    <button onclick={closeErrors}>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
    </button>
    {#each errors as error}
        <div class="error">{error.message}</div>
    {/each}
</div>
{/if}

<style>
    .errors {
        position: relative;
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        padding: 0.5rem;
        margin-bottom: 1rem;
        background-color: #ffdae4;
        color: #4c0f13;
        font-size: 0.95rem;
    }

    .errors button {
        display: inline-block;
        position: absolute;
        top: 0.5rem;
        align-self: flex-end;
        background: none;
        border: none;
        cursor: pointer;
    }
</style>