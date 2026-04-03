import getArticleQuery from '$lib/graphql/operations/articles/getArticle/getArticleQuery'
import updateArticleMutation from '$lib/graphql/operations/articles/updateArticle/updateArticleMutation'
import type { PageServerLoad } from '../$types'

export const load: PageServerLoad = async ({ params }) => {
	let article = await getArticleQuery(params.slug)

	return {
		article
	}
}

export const actions = {
	default: async ({ request }) => {
		const formData = await request.formData()
		const articleId = formData.get('articleId')
		const content = formData.get('content')
		const summary = formData.get('summary')
		const author = formData.get('author')

		let response = await updateArticleMutation(articleId, content, summary, author)

		return { data: response.data, errors: response.errors }
	}
}
