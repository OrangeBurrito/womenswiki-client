<script lang="ts">
	import type { PageServerData } from "./$types";

    export let data: PageServerData

    console.log(data)
</script>

<h1>Editing Article</h1>

<form action="?/update" method="POST">
    <input type="hidden" id="id" name="id" value={data.article.id} />

    <div>
        <label for="content">Content</label>
        <textarea id="content" name="content" required>{data.article.content}</textarea>
    </div>
    <button>Edit Article</button>
</form>

<form action="?/delete" method="POST">
    <input type="hidden" id="id" name="id" value={data.article.id}>
    <button>Delete Article</button>
</form>