<script lang="ts">
    export let name: string
</script>

<a href="/tags/{name}" class="tag">{name}</a>

<style>
    .tag {
        display: inline-block;
        font-size: 0.75rem;
        background: var(--color-primary-light);
        color: var(--color-primary-dark);
        padding: 0.25rem 0.5rem;
        border-radius: 8px;
        border: 1.5px solid var(--color-primary);
    }
</style>