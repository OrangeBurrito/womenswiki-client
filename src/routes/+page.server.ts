import getArticlesQuery from "$lib/graphql/operations/articles/getArticles/getArticlesQuery";
import getTagsQuery from "$lib/graphql/operations/tags/getTags/getTagsQuery";
import type { PageServerLoad } from "./wiki/[slug]/$types";

export const load: PageServerLoad = async () => {
    const articles = await getArticlesQuery()
    const tags = await getTagsQuery()

    return {
        articles,
        tags
    }
}