import { PUBLIC_SERVER_URL } from '$env/static/public';
import type { PageServerLoad } from './$types';

export const load = (async ({ fetch, params }) => {
    const data = await fetch(`${PUBLIC_SERVER_URL}/articles/${params.slug}`)
    const article = await data.json()

    return {
        article
    }
}) satisfies PageServerLoad