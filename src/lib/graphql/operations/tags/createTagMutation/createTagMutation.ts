import { client } from "$lib/graphql/client";
import type { CreateTagMutation, CreateTagMutationVariables } from "$lib/graphql/types";
import CreateTagGQL from '$lib/graphql/operations/tags/createTagMutation/createTag.gql?raw';

export default async function createTagMutation(name: string, parentTag: string, color: string) {
    let result = await client.mutation<CreateTagMutation, CreateTagMutationVariables>(
        CreateTagGQL, {
            input: {
                name,
                parentTag,
                color
            }
        }
    )

    return result.data?.createTag;
}