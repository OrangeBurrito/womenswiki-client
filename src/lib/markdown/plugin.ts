import type { UnifiedTransformer, Plugin } from "carta-md"
import remarkRehype from 'remark-rehype'
import remarkToc from 'remark-toc'
import remarkCite from '@benrbray/remark-cite'
import remarkInfobox from 'remark-infobox'
import { infoboxHastHandlers } from 'mdast-util-infobox';
import rehypeFigure from "@microflash/rehype-figure";
import rehypeHighlight from "rehype-highlight";
import wikiLinkPlugin from 'remark-wiki-link'

const remarkTransformer: UnifiedTransformer<'sync'> = {
    execution: 'sync',
    type: 'remark',
    transform: ({processor}) => {
        processor
        .use(remarkToc, { heading: 'remarktoc'})
        .use(remarkToc)
        .use(remarkCite)
        .use(remarkInfobox)
        .use(wikiLinkPlugin, { hrefTemplate: (permalink: string) => `/wiki/${permalink}` })
        .use(remarkRehype, {
            handlers: { ...infoboxHastHandlers }
        })
    }
}

const rehypeTransformer: UnifiedTransformer<'sync'> = {
    execution: 'sync',
    type: 'rehype',
    transform: ({processor}) => {
        processor
        .use(rehypeFigure)
        .use(rehypeHighlight)
    }
}

export const remark = (): Plugin => ({transformers: [remarkTransformer]})
export const rehype = (): Plugin => ({transformers: [rehypeTransformer]})