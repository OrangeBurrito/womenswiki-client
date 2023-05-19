import type { PageServerLoad } from './$types'

export const load = (async ({fetch}) => {
    const data = await fetch('http://127.0.0.1:5100/articles')
    const articles = await data.json()
    return {
        articles
    }
}) satisfies PageServerLoad