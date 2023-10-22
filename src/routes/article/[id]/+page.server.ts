import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({params}) => {
    const res = await fetch(`http://localhost:5161/article/${params.id}`)
    const article = await res.json();

    return {
        article
    }
}