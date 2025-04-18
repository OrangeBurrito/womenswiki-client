import createArticleMutation from "$lib/graphql/operations/articles/createArticle/createArticleMutation";
import getTagsQuery from "$lib/graphql/operations/tags/getTags/getTagsQuery";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async () => {
    let tags = await getTagsQuery()

    return {
        tags
    }
}

export const actions = {
  default: async ({ request }) => {
    const formData = await request.formData();
    const title = formData.get("title");
    const content = formData.get("content");
    const tags = formData.getAll("tags");
    const author = formData.get("author");

    let response = await createArticleMutation(title, content, tags, author)

    return { data: response.data, errors: response.errors };
  }
};