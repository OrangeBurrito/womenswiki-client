import { redirect, type Actions } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({parent}) => {
    const { article } = await parent()
    return {
        article
    }
}

export const actions = {
    update: async ({request}) => {
        const data = await request.formData()

        const res = await fetch(`http://localhost:5161/article/update`, {
            method: 'PATCH',
            body: data
        })

        const json = await res.json()
        throw redirect(303, `/article/${json.id}`)
    },
    delete: async ({request}) => {
        const data = await request.formData()

        await fetch(`http://localhost:5161/article/delete/${data.get("id")}`, {
            method: 'DELETE',
        })

        throw redirect(303, `/`)
    }
} satisfies Actions