import type { UnifiedTransformer, Plugin } from "carta-md"
import remarkRehype from 'remark-rehype'
import remarkToc from 'remark-toc'
import remarkGfm from 'remark-gfm'
import remarkInfobox from 'remark-infobox'
import { infoboxHastHandlers } from 'mdast-util-infobox';
import rehypeFigure from "@microflash/rehype-figure";

const remarkTransformer: UnifiedTransformer<'sync'> = {
    execution: 'sync',
    type: 'remark',
    transform: ({processor}) => {
        processor
        .use(remarkToc)
        .use(remarkInfobox)
        .use(remarkRehype, {
            handlers: { ...infoboxHastHandlers }
        })
    }
}

const rehypetransformer: UnifiedTransformer<'sync'> = {
    execution: 'sync',
    type: 'rehype',
    transform: ({processor}) => {
        processor
        .use(rehypeFigure)
    }
}

export const remark = (): Plugin => ({transformers: [remarkTransformer]})
export const rehype = (): Plugin => ({transformers: [rehypetransformer]})