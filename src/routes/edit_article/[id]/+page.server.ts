import { fail, type Actions, redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { PUBLIC_SERVER_URL } from '$env/static/public';

export const load = (({params, url}) => {
    return {
        article: {
            id: params.id,
            title: url.searchParams.get('title')
        }
    }
}) satisfies PageServerLoad

export const actions: Actions = {
    editArticle: async ({request}) => {
        const formData = await request.formData()

        const article = {
            articleId: formData.get('id'),
            content: formData.get('content')
        }

        if (!article.content || article.content.length < 100) {
            return fail(400, {missingContent: true })
        }

        fetch(`${PUBLIC_SERVER_URL}/update_article`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(article)
        })

        throw redirect(303, `/create_article/submitted`)
    }
}