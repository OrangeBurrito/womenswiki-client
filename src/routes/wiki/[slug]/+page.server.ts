import type { PageServerLoad } from './$types'

export const load = (async ({fetch, params}) => {
    const data = await fetch(`http://127.0.0.1:5100/articles/${params.slug}`);
    const article = await data.json()
    return {
        article
    }

}) satisfies PageServerLoad