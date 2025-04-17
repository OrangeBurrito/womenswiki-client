import { client } from "$lib/graphql/client";
import type { GetTagQuery, GetTagQueryVariables } from "$lib/graphql/types";
import TagGQL from '$lib/graphql/operations/tags/getTag/getTag.gql?raw'

export default async function getTagQuery(tag: string) {
    let result = await client.query<GetTagQuery, GetTagQueryVariables>(TagGQL, {
        input: {
            name: tag
        }
    }).toPromise()

    return result.data?.tag.data ?? []
}