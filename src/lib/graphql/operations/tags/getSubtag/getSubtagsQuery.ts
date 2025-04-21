import { client } from '$lib/graphql/client';
import SubtagsQL from '$lib/graphql/operations/tags/getSubtag/getSubtags.gql?raw';
import type { SubtagsQuery, SubtagsQueryVariables } from '$lib/graphql/types';

export async function getSubtagsQuery(tag: string) {
    const result = await client.query<SubtagsQuery, SubtagsQueryVariables>(
        SubtagsQL, {
            input: {
                tag
            }
        }
    ).toPromise()

    return result.data?.subtags.data ?? []
}