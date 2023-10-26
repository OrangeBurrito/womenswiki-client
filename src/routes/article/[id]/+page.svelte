<script lang="ts">
	import type { PageServerData } from './$types';

    export let data: PageServerData
</script>

<article>
    <h1>{data.article.title}</h1>
    {@html data.article.content}
</article>

<a href={`/article/${data.article.id}/edit`}>Edit</a>