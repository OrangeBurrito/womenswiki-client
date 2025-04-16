import { client } from "$lib/graphql/client";
import type { TagsQuery, TagsQueryVariables } from "$lib/graphql/types";
import TagsGQL from "$lib/graphql/operations/tags/getTags/getTags.gql?raw";


export default async function getTagsQuery() {
    let result = await client.query<TagsQuery, TagsQueryVariables>(
        TagsGQL, {
            input: {
                limit: 20,
                offset: 0,
                descending: false
            }
        }
    )

    return result.data?.tags.data ?? []
}