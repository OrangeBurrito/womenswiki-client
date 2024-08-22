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

export const CREATE_TAG = gql`
mutation createTag($input: CreateTagCommandInput!) {
  createTag(input: $input) {
    data {
      id
      createdAt
      name
    }
    errors {
      code
      message
    }
  }
}
`