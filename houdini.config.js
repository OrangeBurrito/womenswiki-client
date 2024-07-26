/// <references types="houdini-svelte">

/** @type {import('houdini').ConfigFile} */
const config = {
    "watchSchema": {
        "url": process.env.GRAPHQL_API_URL
    },
    "plugins": {
        "houdini-svelte": {}
    }
}

export default config
