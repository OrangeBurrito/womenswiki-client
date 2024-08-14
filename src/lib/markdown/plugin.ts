import { type UnifiedTransformer, type Plugin } from "carta-md"
import remarkRehype from 'remark-rehype'
import remarkToc from 'remark-toc'
import remarkGfm from 'remark-gfm'
import remarkInfobox from 'remark-infobox'
import { infoboxHastHandlers } from 'mdast-util-infobox';

const remarkTransformer: UnifiedTransformer<'sync'> = {
    execution: 'sync',
    type: 'remark',
    transform: ({processor}) => {
        processor
        .use(remarkGfm)
        .use(remarkToc)
        .use(remarkInfobox)
        .use(remarkRehype, {
            handlers: { ...infoboxHastHandlers }
        })
    }
}

export const remark = (): Plugin => ({transformers: [remarkTransformer]})