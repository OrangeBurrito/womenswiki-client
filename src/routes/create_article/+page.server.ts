import { PUBLIC_SERVER_URL } from "$env/static/public"
import { fail, type Actions, redirect } from "@sveltejs/kit"

export const actions: Actions = {
    submitArticle: async ({request}) => {
        const formData = await request.formData()

        const article = {
            title: formData.get('title'),
            revisions: [
                {content: formData.get('content')}
            ]
        }

        if (!article.title) {
            return fail(400, {article, missingTitle: true })
        }
        
        if (!article.revisions[0].content || article.revisions[0].content.length < 100) {
            return fail(400, {article, missingContent: true })
        }

        fetch(`${PUBLIC_SERVER_URL}/create_article`, {
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