import { gql } from "@urql/svelte";

export const CREATE_ARTICLE = gql`
mutation createArticle($input: CreateArticleCommandInput!) {
    createArticle(input: $input) {
        data {
            createdAt
            title
            content
            slug
        }
        errors {
            code
            message
        }
    }
}
`