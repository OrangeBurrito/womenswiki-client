import { HoudiniClient } from '$houdini';

export default new HoudiniClient({
    url: import.meta.env.VITE_GRAPHQL_API_URL
})
