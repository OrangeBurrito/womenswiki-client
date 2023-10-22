<script lang="ts">
	import type { PageServerData } from './$types';

    export let data: PageServerData
</script>

<h1>{data.article.title}</h1>