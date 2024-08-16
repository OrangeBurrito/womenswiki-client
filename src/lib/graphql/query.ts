import { gql } from "@urql/svelte";

export const ARTICLES = gql`
query articles($input: GetArticlesRequestInput!) {
  articles(input: $input) {
    id
    createdAt
    title
    content
    slug
  }
}`

export const ARTICLE_BY_SLUG = gql`
query article($slug: String!) {
  articleBySlug(slug: $slug) {
    id
    createdAt
    updatedAt
    title
    content
  }
}
`