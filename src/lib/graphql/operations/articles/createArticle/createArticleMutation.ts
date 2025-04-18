import { client } from "$lib/graphql/client";
import CreateArticleGQL from "$lib/graphql/operations/articles/createArticle/createArticle.gql?raw";
import type { CreateArticleMutation, CreateArticleMutationVariables } from "$lib/graphql/types";

export default async function createArticleMutation(title: string, content: string, tags: string[], author: string) {
    let result = await client.mutation<CreateArticleMutation, CreateArticleMutationVariables>(
        CreateArticleGQL, {
            input: {
                title,
                content,
                tags,
                author
            }
        }
    ).toPromise()

    return result.data?.createArticle ?? []
}