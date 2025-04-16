import { client } from "$lib/graphql/client";
import type { ArticleQuery, ArticleQueryVariables } from "$lib/graphql/types";
import ArticleGQL from '$lib/graphql/operations/articles/getArticle/getArticle.gql?raw'

export default async function getArticleQuery(title: string) {
    let result = await client.query<ArticleQuery, ArticleQueryVariables>(ArticleGQL, {
        title: title
    })

    return result.data?.articleByTitle.data ?? []
}