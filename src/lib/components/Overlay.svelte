<script lang="ts">
    import { browser } from '$app/environment'

    export let show = false
</script>

{#if browser}
    {#if show}
        {document.body.classList.add('modal-open')}
        <div class="overlay">
            <slot/>
        </div>
    {:else}
        {document.body.classList.remove('modal-open')}
    {/if}
{/if}

<style>
    .overlay {
        position: fixed;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        z-index: 3;
        display: flex;
        align-items: center;
        justify-content: center;
        background: rgba(0,0,0,0.5);
        color: white;
    }
</style>