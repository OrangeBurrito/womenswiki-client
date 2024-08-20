import { cacheExchange, Client, fetchExchange } from "@urql/svelte";

export const client = new Client({
    url: import.meta.env.VITE_GRAPHQL_API_URL,
    exchanges: [cacheExchange, fetchExchange],
})