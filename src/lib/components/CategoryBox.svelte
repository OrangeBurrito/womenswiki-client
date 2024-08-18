<script lang="ts">
    export let href = '';
    export let disabled = false
</script>

<a {href} class:disabled >
    <div class="category-box">
        <slot/>
    </div>
</a>

<style>
    .category-box {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0.75rem 1rem;
        border: 2px solid var(--color-primary-light); 
    }

    .category-box:hover {
        color: var(--color-primary-dark);
        border-color: var(--color-primary)
    }

    a {
        display: block;
        border-bottom: none;
    }

    a.disabled {
        pointer-events: none;
        opacity: 0.5;
    }

    .category-box :global(h3) {
        font-weight: 500;
    }
</style>