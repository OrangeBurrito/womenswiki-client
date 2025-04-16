import { client } from "$lib/graphql/client";
import type { ArticlesQuery, ArticlesQueryVariables } from "$lib/graphql/types";
import ArticlesGQL from "$lib/graphql/operations/articles/getArticles/getArticles.gql?raw";

export default async function getArticlesQuery() {
    let result = await client.query<ArticlesQuery, ArticlesQueryVariables>(
        ArticlesGQL, {
            input: {
                descending: true,
                limit: 10,
                offset: 0
            }
        }
    ).toPromise()

    return result.data?.articles ?? []
}