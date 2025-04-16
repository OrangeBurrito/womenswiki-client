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
  createdAt: Scalars['DateTime']['output'];
  history: Array<Revision>;
  id: Scalars['UUID']['output'];
  latestVersion?: Maybe<Scalars['String']['output']>;
  tags: Array<Tag>;
  title: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type ArticleResponse = {
  __typename?: 'ArticleResponse';
  content: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['UUID']['output'];
  tags: Array<Tag>;
  title: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type ArticleResponseSortInput = {
  content?: InputMaybe<SortEnumType>;
  createdAt?: InputMaybe<SortEnumType>;
  id?: InputMaybe<SortEnumType>;
  title?: InputMaybe<SortEnumType>;
  updatedAt?: InputMaybe<SortEnumType>;
};

export type Color = {
  __typename?: 'Color';
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['UUID']['output'];
  name: Scalars['String']['output'];
  value: Scalars['String']['output'];
};

export type ColorResponse = {
  __typename?: 'ColorResponse';
  name: Scalars['String']['output'];
  value: Scalars['String']['output'];
};

export type ColorSortInput = {
  createdAt?: InputMaybe<SortEnumType>;
  id?: InputMaybe<SortEnumType>;
  name?: InputMaybe<SortEnumType>;
  value?: InputMaybe<SortEnumType>;
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
  tags?: Maybe<Array<Tag>>;
  title: Scalars['String']['output'];
};

export type CreateColorCommandInput = {
  name: Scalars['String']['input'];
  value: Scalars['String']['input'];
};

export type CreateTagCommandInput = {
  color: Scalars['String']['input'];
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
  createColor: ResultOfColorResponse;
  createTag: ResultOfTagResponse;
  updateArticle: ResultOfArticleResponse;
  updateArticleTags: ResultOfArticleResponse;
  updateTagColor: ResultOfTagResponse;
};


export type MutationCreateArticleArgs = {
  input: CreateArticleCommandInput;
};


export type MutationCreateColorArgs = {
  input: CreateColorCommandInput;
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


export type MutationUpdateTagColorArgs = {
  input: UpdateTagColorCommandInput;
};

export type Query = {
  __typename?: 'Query';
  articleById: ResultOfArticleResponse;
  articleByTitle: ResultOfArticleResponse;
  articles: Array<ArticleResponse>;
  articlesByTag: ResultOfListOfArticleResponse;
  nestedSubtags: ResultOfTagTree;
  subtags: ResultOfListOfTagResponse;
  tag: ResultOfTagResponse;
  tags: ResultOfListOfTagResponse;
  updateTag: ResultOfTagResponse;
};


export type QueryArticleByIdArgs = {
  input: GetArticleByIdRequestInput;
};


export type QueryArticleByTitleArgs = {
  title: Scalars['String']['input'];
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
  order?: InputMaybe<Array<ResultOfTagTreeSortInput>>;
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
  input: UpdateTagCommandInput;
};

export type ResultOfArticleResponse = {
  __typename?: 'ResultOfArticleResponse';
  data?: Maybe<ArticleResponse>;
  errors?: Maybe<Array<Error>>;
  isFailure: Scalars['Boolean']['output'];
  isSuccess: Scalars['Boolean']['output'];
};

export type ResultOfColorResponse = {
  __typename?: 'ResultOfColorResponse';
  data?: Maybe<ColorResponse>;
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

export type ResultOfTagTree = {
  __typename?: 'ResultOfTagTree';
  data?: Maybe<TagTree>;
  errors?: Maybe<Array<Error>>;
  isFailure: Scalars['Boolean']['output'];
  isSuccess: Scalars['Boolean']['output'];
};

export type ResultOfTagTreeSortInput = {
  data?: InputMaybe<TagTreeSortInput>;
  isFailure?: InputMaybe<SortEnumType>;
  isSuccess?: InputMaybe<SortEnumType>;
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
  color: Color;
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['UUID']['output'];
  name: Scalars['String']['output'];
  parentTags: Array<Tag>;
};

export type TagResponse = {
  __typename?: 'TagResponse';
  articles?: Maybe<Array<Article>>;
  color: Color;
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['UUID']['output'];
  name: Scalars['String']['output'];
  parentTags?: Maybe<Array<Tag>>;
};

export type TagSortInput = {
  color?: InputMaybe<ColorSortInput>;
  createdAt?: InputMaybe<SortEnumType>;
  id?: InputMaybe<SortEnumType>;
  name?: InputMaybe<SortEnumType>;
};

export type TagTree = {
  __typename?: 'TagTree';
  subtags: Array<TagTree>;
  tag: Tag;
};

export type TagTreeSortInput = {
  tag?: InputMaybe<TagSortInput>;
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

export type UpdateTagColorCommandInput = {
  color: Scalars['String']['input'];
  tag: Scalars['String']['input'];
};

export type UpdateTagCommandInput = {
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

export type ArticleQueryVariables = Exact<{
  title: Scalars['String']['input'];
}>;


export type ArticleQuery = { __typename?: 'Query', articleByTitle: { __typename?: 'ResultOfArticleResponse', data?: { __typename?: 'ArticleResponse', id: any, createdAt: any, updatedAt?: any | null, title: string, content: string, tags: Array<{ __typename?: 'Tag', name: string, color: { __typename?: 'Color', value: string } }> } | null, errors?: Array<{ __typename?: 'Error', code: string, message?: string | null }> | null } };

export type ArticlesQueryVariables = Exact<{
  input: GetArticlesRequestInput;
}>;


export type ArticlesQuery = { __typename?: 'Query', articles: Array<{ __typename?: 'ArticleResponse', id: any, createdAt: any, title: string, content: string, tags: Array<{ __typename?: 'Tag', name: string }> }> };

export type TagsQueryVariables = Exact<{
  input: GetTagsRequestInput;
}>;


export type TagsQuery = { __typename?: 'Query', tags: { __typename?: 'ResultOfListOfTagResponse', data?: Array<{ __typename?: 'TagResponse', name: string, color: { __typename?: 'Color', value: string } } | null> | null } };


export const ArticleDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"article"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"title"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"articleByTitle"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"title"},"value":{"kind":"Variable","name":{"kind":"Name","value":"title"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"tags"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"color"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"errors"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"message"}}]}}]}}]}}]} as unknown as DocumentNode<ArticleQuery, ArticleQueryVariables>;
export const ArticlesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"articles"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"GetArticlesRequestInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"articles"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"tags"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]} as unknown as DocumentNode<ArticlesQuery, ArticlesQueryVariables>;
export const TagsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"tags"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"GetTagsRequestInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"tags"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"color"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}}]}}]}}]} as unknown as DocumentNode<TagsQuery, TagsQueryVariables>;