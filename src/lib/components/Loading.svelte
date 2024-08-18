<script lang="ts">
    export let inline = false
</script>

<div class="loading" class:inline>
    {#if inline}
        <p>Loading...</p>
    {:else}
        <h3>Loading...</h3>
    {/if}
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12a9 9 0 1 1-6.219-8.56"></path></svg>    
</div>

<style>
    .loading {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.5rem;
        margin: 2rem 0;
    }

    .loading h3 {
        font-style: italic;
    }

    .loading.inline {
        width: fit-content;
        height: fit-content;
        margin: 0;
    }

    .loading.inline svg {
        width: 16px;
        height: 16px;
    }

    .loading svg {
        fill: none;
        -webkit-animation: rotation 1s infinite linear;
        animation: rotation 1s infinite linear;
    }

    @-webkit-keyframes rotation {
    from {
        -webkit-transform: rotate(0deg);
    }
    to {
        -webkit-transform: rotate(359deg);
    }
    }
    @keyframes rotation {
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(359deg);
    }
    }

</style>