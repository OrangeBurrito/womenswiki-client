import { PUBLIC_SERVER_URL } from '$env/static/public'
import type { Article } from '$lib/types'
import type { LayoutServerLoad } from './$types'

export const load = (async ({ fetch }) => {
    const data = await fetch(`${PUBLIC_SERVER_URL}/articles`)
    const articles: Article[] = await data.json()

    return {
        articles
    }
}) satisfies LayoutServerLoad