import { client } from "$lib/graphql/client";
import { TAG } from "$lib/graphql/query";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({params}) => {
    const tag = await client.query(TAG, {
        input: {
            name: params.tag
        }
    }).toPromise()

    return {
        tag: tag.data.tag.data
    }
}