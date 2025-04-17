import getTagQuery from "$lib/graphql/operations/tags/getTag/getTagQuery";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({params}) => {
    const tag = await getTagQuery(params.tag);

    return {
        tag
    }
}