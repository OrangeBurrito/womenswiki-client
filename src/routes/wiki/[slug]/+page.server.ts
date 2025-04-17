import getArticleQuery from "$lib/graphql/operations/articles/getArticle/getArticleQuery";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({params}) => {
    const article = await getArticleQuery(params.slug);

    return {
        article
    }
}