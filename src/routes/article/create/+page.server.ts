import { redirect, type Actions } from "@sveltejs/kit";

export const actions = {
    default: async ({request}) => {
        const data = await request.formData()

        const res = await fetch('http://localhost:5161/article/create', {
            method: 'POST',
            body: data
        })

        const json = await res.json()
        throw redirect(303, `/article/${json.slug}`)
    }
} satisfies Actions