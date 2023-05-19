import { PUBLIC_SERVER_URL } from '$env/static/public'
import type { PageServerLoad } from './$types'

export const load = (async ({fetch}) => {
    const data = await fetch(`${PUBLIC_SERVER_URL}/articles`)
    const json = await data.json()

    return {
        json
    }
}) satisfies PageServerLoad