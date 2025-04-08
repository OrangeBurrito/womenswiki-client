import { gql } from "@urql/svelte";

export const ARTICLES = gql`
query articles($input: GetArticlesRequestInput!) {
  articles(input: $input) {
    id
    createdAt
    title
    content
    slug
    tags {
      name
    }
  }
}`

export const ARTICLE_BY_SLUG = gql`
query article($slug: String!) {
  articleBySlug(slug: $slug) {
    data {
      id
      createdAt
      updatedAt
      title
      content
      tags {
        name
        color {
          value
        }
      }
    }
    errors {
      code
      message
    }
  }
}
`

export const TAG = gql`
query getTag($input: GetTagRequestInput!) {
    tag(input: $input) {
        data {
          id
          name
          color {
            name
            value
          }
          parentTags {
            name
            color {
              value
            }
          }
          articles {
            slug
            title
          }
        }
        errors {
            code
            message
        }
    }
}
`

export const TAGS = gql`
query tags($input: GetTagsRequestInput!) {
  tags(input: $input) {
    data {
      name
      color {
        value
      }
    }
  }
}
`

export const SUBTAGS = gql`
query subtags($input: GetSubtagsRequestInput!) {
  subtags(input: $input) {
    data {
      id
      createdAt
      name
      color {
        value
      }
    }
    errors {
      code
      message
    }
  }
}
`

export const ARTICLES_BY_TAG = gql`
query articlesByTag($input: GetArticlesByTagRequestInput!) {
    articlesByTag(input: $input) {
        data {
            slug
            title
        }
        errors {
            code
            message
        }
    }
}
`