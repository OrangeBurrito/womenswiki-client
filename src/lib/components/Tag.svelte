<script lang="ts">
    export let name: string
</script>

<a href="/tags/{name}" class="tag">{name}</a>

<style>
    .tag {
        display: inline-block;
        font-size: var(--text-s);
        font-weight: 500;
        background: var(--color-primary-light);
        color: var(--color-primary-dark);
        padding: 2px 6px;
        border-radius: 8px;
        border: 1.5px solid var(--color-primary);
    }

    .tag:hover {
        font-weight: 700;
        box-shadow: inset 0px 0px 0px 0.5px var(--color-primary-dark);
    }
</style>