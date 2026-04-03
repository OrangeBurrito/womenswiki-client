import type { UpdateArticleMutation, UpdateArticleMutationVariables } from "$lib/graphql/types";
import UpdateArticleGQL from "$lib/graphql/operations/articles/updateArticle/updateArticle.gql?raw";
import { client } from "$lib/graphql/client";

export default async function updateArticleMutation(articleId: string, content: string, summary: string, author: string) {
    let result = await client.mutation<UpdateArticleMutation, UpdateArticleMutationVariables>(
        UpdateArticleGQL, {
            input: {
                articleId,
                content,
                summary,
                author
            }
        }
    ).toPromise()

    return result.data?.updateArticle ?? []
}