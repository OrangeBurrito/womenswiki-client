<script lang="ts">
	import type { Snippet } from "svelte"

    interface Props {
        children: Snippet
        href: string
        disabled?: boolean
    }

    let { children,  href, disabled = false }: Props = $props()
</script>

<div class="category-box" class:disabled>
    <a class="overlay-link" href={href} ></a>
    {@render children()}
</div>

<style>
    .category-box {
        position: relative;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0.75rem 1rem;
        border: 2px solid var(--color-primary-light);


        &:hover {
            color: var(--color-primary-dark);
            border-color: var(--color-primary)
        }

        &.disabled {
            opacity: 0.5;
            pointer-events: none;
        }

        .overlay-link {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: 1;
            cursor: pointer;
            border: none;
        }
    }

    .category-box :global(h3) {
        font-weight: 500;
    }
</style>