<script lang="ts">
    interface Props {
        name: string
        color: string
    }

    let { name, color}: Props = $props()
</script>

<a href="/tags/{name}" class="tag" style="--color-tag: #{color}" data-sveltekit-reload >{name}</a>

<style>
    .tag {
        display: inline-block;
        font-size: 16px;
        font-weight: 400;
        color: var(--color-text-inverted);
        background-color: var(--color-tag);
        padding: 2px 8px;
        border-radius: 8px;
        border-bottom: none;
    }

    .tag:hover {
        background-image: linear-gradient(rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.25));
        /* box-shadow: inset 0px 0px 0px 0.5px var(--color-primary-dark); */
    }
</style>