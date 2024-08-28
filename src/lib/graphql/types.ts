import type { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  DateTime: { input: any; output: any; }
  UUID: { input: any; output: any; }
};

export type Article = {
  __typename?: 'Article';
  content: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  history: Array<Revision>;
  id: Scalars['UUID']['output'];
  slug: Scalars['String']['output'];
  tags: Array<Tag>;
  title: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type ArticleResponse = {
  __typename?: 'ArticleResponse';
  content: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['UUID']['output'];
  slug: Scalars['String']['output'];
  tags: Array<Tag>;
  title: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type ArticleResponseSortInput = {
  content?: InputMaybe<SortEnumType>;
  createdAt?: InputMaybe<SortEnumType>;
  id?: InputMaybe<SortEnumType>;
  slug?: InputMaybe<SortEnumType>;
  title?: InputMaybe<SortEnumType>;
  updatedAt?: InputMaybe<SortEnumType>;
};

export type CreateArticleCommandInput = {
  author: Scalars['String']['input'];
  content: Scalars['String']['input'];
  tags?: InputMaybe<Array<Scalars['String']['input']>>;
  title: Scalars['String']['input'];
};

export type CreateArticleResponse = {
  __typename?: 'CreateArticleResponse';
  content: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['UUID']['output'];
  slug: Scalars['String']['output'];
  tags?: Maybe<Array<Tag>>;
  title: Scalars['String']['output'];
};

export type CreateTagCommandInput = {
  name: Scalars['String']['input'];
  parentTag?: InputMaybe<Scalars['String']['input']>;
};

export type Error = {
  __typename?: 'Error';
  code: Scalars['String']['output'];
  message?: Maybe<Scalars['String']['output']>;
};

export type GetArticleByIdRequestInput = {
  id: Scalars['UUID']['input'];
};

export type GetArticlesByTagRequestInput = {
  descending?: Scalars['Boolean']['input'];
  limit?: Scalars['Int']['input'];
  offset?: Scalars['Int']['input'];
  tag: Scalars['String']['input'];
};

export type GetArticlesRequestInput = {
  descending?: Scalars['Boolean']['input'];
  limit?: Scalars['Int']['input'];
  offset?: Scalars['Int']['input'];
};

export type GetNestedSubtagsRequestInput = {
  tag: Scalars['String']['input'];
};

export type GetSubtagsRequestInput = {
  descending?: Scalars['Boolean']['input'];
  limit?: Scalars['Int']['input'];
  offset?: Scalars['Int']['input'];
  tag: Scalars['String']['input'];
};

export type GetTagRequestInput = {
  name: Scalars['String']['input'];
};

export type GetTagsRequestInput = {
  descending?: Scalars['Boolean']['input'];
  limit?: Scalars['Int']['input'];
  offset?: Scalars['Int']['input'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createArticle: ResultOfCreateArticleResponse;
  createTag: ResultOfTagResponse;
  updateArticle: ResultOfArticleResponse;
  updateArticleTags: ResultOfArticleResponse;
};


export type MutationCreateArticleArgs = {
  input: CreateArticleCommandInput;
};


export type MutationCreateTagArgs = {
  input: CreateTagCommandInput;
};


export type MutationUpdateArticleArgs = {
  input: UpdateArticleCommandInput;
};


export type MutationUpdateArticleTagsArgs = {
  input: UpdateArticleTagsCommandInput;
};

export type Query = {
  __typename?: 'Query';
  articleById: ResultOfArticleResponse;
  articleBySlug: ResultOfArticleResponse;
  articles: Array<ArticleResponse>;
  articlesByTag: ResultOfListOfArticleResponse;
  nestedSubtags: ResultOfListOfTagResponse;
  subtags: ResultOfListOfTagResponse;
  tag: ResultOfTagResponse;
  tags: ResultOfListOfTagResponse;
  updateTag: ResultOfTagResponse;
};


export type QueryArticleByIdArgs = {
  input: GetArticleByIdRequestInput;
};


export type QueryArticleBySlugArgs = {
  slug: Scalars['String']['input'];
};


export type QueryArticlesArgs = {
  input: GetArticlesRequestInput;
  order?: InputMaybe<Array<ArticleResponseSortInput>>;
};


export type QueryArticlesByTagArgs = {
  input: GetArticlesByTagRequestInput;
  order?: InputMaybe<Array<ResultOfListOfArticleResponseSortInput>>;
};


export type QueryNestedSubtagsArgs = {
  input: GetNestedSubtagsRequestInput;
  order?: InputMaybe<Array<ResultOfListOfTagResponseSortInput>>;
};


export type QuerySubtagsArgs = {
  input: GetSubtagsRequestInput;
  order?: InputMaybe<Array<ResultOfListOfTagResponseSortInput>>;
};


export type QueryTagArgs = {
  input: GetTagRequestInput;
};


export type QueryTagsArgs = {
  input: GetTagsRequestInput;
  order?: InputMaybe<Array<ResultOfListOfTagResponseSortInput>>;
};


export type QueryUpdateTagArgs = {
  input: UpdateTagRequestInput;
};

export type ResultOfArticleResponse = {
  __typename?: 'ResultOfArticleResponse';
  data?: Maybe<ArticleResponse>;
  errors?: Maybe<Array<Error>>;
  isFailure: Scalars['Boolean']['output'];
  isSuccess: Scalars['Boolean']['output'];
};

export type ResultOfCreateArticleResponse = {
  __typename?: 'ResultOfCreateArticleResponse';
  data?: Maybe<CreateArticleResponse>;
  errors?: Maybe<Array<Error>>;
  isFailure: Scalars['Boolean']['output'];
  isSuccess: Scalars['Boolean']['output'];
};

export type ResultOfListOfArticleResponse = {
  __typename?: 'ResultOfListOfArticleResponse';
  data?: Maybe<Array<Maybe<ArticleResponse>>>;
  errors?: Maybe<Array<Error>>;
  isFailure: Scalars['Boolean']['output'];
  isSuccess: Scalars['Boolean']['output'];
};

export type ResultOfListOfArticleResponseSortInput = {
  isFailure?: InputMaybe<SortEnumType>;
  isSuccess?: InputMaybe<SortEnumType>;
};

export type ResultOfListOfTagResponse = {
  __typename?: 'ResultOfListOfTagResponse';
  data?: Maybe<Array<Maybe<TagResponse>>>;
  errors?: Maybe<Array<Error>>;
  isFailure: Scalars['Boolean']['output'];
  isSuccess: Scalars['Boolean']['output'];
};

export type ResultOfListOfTagResponseSortInput = {
  isFailure?: InputMaybe<SortEnumType>;
  isSuccess?: InputMaybe<SortEnumType>;
};

export type ResultOfTagResponse = {
  __typename?: 'ResultOfTagResponse';
  data?: Maybe<TagResponse>;
  errors?: Maybe<Array<Error>>;
  isFailure: Scalars['Boolean']['output'];
  isSuccess: Scalars['Boolean']['output'];
};

export type Revision = {
  __typename?: 'Revision';
  article: Article;
  articleId: Scalars['UUID']['output'];
  author: User;
  content: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['UUID']['output'];
  summary?: Maybe<Scalars['String']['output']>;
};

export enum SortEnumType {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type Tag = {
  __typename?: 'Tag';
  articles: Array<Article>;
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['UUID']['output'];
  name: Scalars['String']['output'];
  parentTags: Array<Tag>;
};

export type TagResponse = {
  __typename?: 'TagResponse';
  articles?: Maybe<Array<Article>>;
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['UUID']['output'];
  name: Scalars['String']['output'];
  parentTags?: Maybe<Array<Tag>>;
};

export type UpdateArticleCommandInput = {
  articleId: Scalars['UUID']['input'];
  author: Scalars['String']['input'];
  content: Scalars['String']['input'];
  summary?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateArticleTagsCommandInput = {
  articleId: Scalars['UUID']['input'];
  author: Scalars['String']['input'];
  tags: Array<Scalars['String']['input']>;
};

export type UpdateTagRequestInput = {
  parentTag: Scalars['String']['input'];
  tag: Scalars['String']['input'];
};

export type User = {
  __typename?: 'User';
  createdAt: Scalars['DateTime']['output'];
  email: Scalars['String']['output'];
  id: Scalars['UUID']['output'];
  username: Scalars['String']['output'];
};

export type CreateArticleMutationVariables = Exact<{
  input: CreateArticleCommandInput;
}>;


export type CreateArticleMutation = { __typename?: 'Mutation', createArticle: { __typename?: 'ResultOfCreateArticleResponse', data?: { __typename?: 'CreateArticleResponse', createdAt: any, title: string, content: string, slug: string } | null, errors?: Array<{ __typename?: 'Error', code: string, message?: string | null }> | null } };

export type CreateTagMutationVariables = Exact<{
  input: CreateTagCommandInput;
}>;


export type CreateTagMutation = { __typename?: 'Mutation', createTag: { __typename?: 'ResultOfTagResponse', data?: { __typename?: 'TagResponse', id: any, createdAt: any, name: string } | null, errors?: Array<{ __typename?: 'Error', code: string, message?: string | null }> | null } };

export type ArticlesQueryVariables = Exact<{
  input: GetArticlesRequestInput;
}>;


export type ArticlesQuery = { __typename?: 'Query', articles: Array<{ __typename?: 'ArticleResponse', id: any, createdAt: any, title: string, content: string, slug: string, tags: Array<{ __typename?: 'Tag', name: string }> }> };

export type ArticleQueryVariables = Exact<{
  slug: Scalars['String']['input'];
}>;


export type ArticleQuery = { __typename?: 'Query', articleBySlug: { __typename?: 'ResultOfArticleResponse', data?: { __typename?: 'ArticleResponse', id: any, createdAt: any, updatedAt?: any | null, title: string, content: string, tags: Array<{ __typename?: 'Tag', name: string }> } | null, errors?: Array<{ __typename?: 'Error', code: string, message?: string | null }> | null } };

export type GetTagQueryVariables = Exact<{
  input: GetTagRequestInput;
}>;


export type GetTagQuery = { __typename?: 'Query', tag: { __typename?: 'ResultOfTagResponse', data?: { __typename?: 'TagResponse', id: any, name: string, createdAt: any, parentTags?: Array<{ __typename?: 'Tag', name: string }> | null, articles?: Array<{ __typename?: 'Article', slug: string, title: string }> | null } | null, errors?: Array<{ __typename?: 'Error', code: string, message?: string | null }> | null } };

export type TagsQueryVariables = Exact<{
  input: GetTagsRequestInput;
}>;


export type TagsQuery = { __typename?: 'Query', tags: { __typename?: 'ResultOfListOfTagResponse', data?: Array<{ __typename?: 'TagResponse', name: string } | null> | null } };

export type SubtagsQueryVariables = Exact<{
  input: GetSubtagsRequestInput;
}>;


export type SubtagsQuery = { __typename?: 'Query', subtags: { __typename?: 'ResultOfListOfTagResponse', data?: Array<{ __typename?: 'TagResponse', id: any, createdAt: any, name: string } | null> | null, errors?: Array<{ __typename?: 'Error', code: string, message?: string | null }> | null } };

export type ArticlesByTagQueryVariables = Exact<{
  input: GetArticlesByTagRequestInput;
}>;


export type ArticlesByTagQuery = { __typename?: 'Query', articlesByTag: { __typename?: 'ResultOfListOfArticleResponse', data?: Array<{ __typename?: 'ArticleResponse', slug: string, title: string } | null> | null, errors?: Array<{ __typename?: 'Error', code: string, message?: string | null }> | null } };


export const CreateArticleDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"createArticle"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateArticleCommandInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createArticle"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}},{"kind":"Field","name":{"kind":"Name","value":"errors"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"message"}}]}}]}}]}}]} as unknown as DocumentNode<CreateArticleMutation, CreateArticleMutationVariables>;
export const CreateTagDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"createTag"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateTagCommandInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createTag"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"errors"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"message"}}]}}]}}]}}]} as unknown as DocumentNode<CreateTagMutation, CreateTagMutationVariables>;
export const ArticlesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"articles"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"GetArticlesRequestInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"articles"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"tags"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]} as unknown as DocumentNode<ArticlesQuery, ArticlesQueryVariables>;
export const ArticleDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"article"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"slug"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"articleBySlug"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"slug"},"value":{"kind":"Variable","name":{"kind":"Name","value":"slug"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"tags"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"errors"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"message"}}]}}]}}]}}]} as unknown as DocumentNode<ArticleQuery, ArticleQueryVariables>;
export const GetTagDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getTag"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"GetTagRequestInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"tag"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"parentTags"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"articles"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"errors"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"message"}}]}}]}}]}}]} as unknown as DocumentNode<GetTagQuery, GetTagQueryVariables>;
export const TagsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"tags"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"GetTagsRequestInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"tags"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]} as unknown as DocumentNode<TagsQuery, TagsQueryVariables>;
export const SubtagsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"subtags"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"GetSubtagsRequestInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"subtags"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"errors"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"message"}}]}}]}}]}}]} as unknown as DocumentNode<SubtagsQuery, SubtagsQueryVariables>;
export const ArticlesByTagDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"articlesByTag"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"GetArticlesByTagRequestInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"articlesByTag"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}},{"kind":"Field","name":{"kind":"Name","value":"errors"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"message"}}]}}]}}]}}]} as unknown as DocumentNode<ArticlesByTagQuery, ArticlesByTagQueryVariables>;