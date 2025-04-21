import { getSubtagsQuery } from "$lib/graphql/operations/tags/getSubtag/getSubtagsQuery";
import getTagQuery from "$lib/graphql/operations/tags/getTag/getTagQuery";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({params}) => {
    const tag = await getTagQuery(params.tag);
    let subtags

    if (tag) {
        subtags = await getSubtagsQuery(params.tag);
    }

    return {
        tag,
        subtags
    }
}