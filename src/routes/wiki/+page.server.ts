import type { PageServerLoad } from './$types'

export const load = (async ({fetch}) => {
    const data = await fetch('http://127.0.0.1:5100/articles')
    const json = await data.json()

    return {
        json
    }
}) satisfies PageServerLoad