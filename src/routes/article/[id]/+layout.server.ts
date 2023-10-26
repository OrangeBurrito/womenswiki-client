import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async ({params}) => {
    const res = await fetch(`http://localhost:5161/article/${params.id}`)
    const article = await res.json();

    return {
        article
    }
}