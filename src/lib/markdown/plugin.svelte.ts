import { type UnifiedTransformer, type Plugin, Carta } from "carta-md"
import remarkRehype from 'remark-rehype'
import remarkToc from 'remark-toc'
import remarkCite from '@benrbray/remark-cite'
import remarkInfobox from 'remark-infobox'
import { infoboxHastHandlers } from 'mdast-util-infobox';
import rehypeFigure from "@microflash/rehype-figure";
import rehypeHighlight from "rehype-highlight";
import wikiLinkPlugin from 'remark-wiki-link'
import WikiLinkIcon from "$lib/components/icons/WikiLinkIcon.svelte"
import H2Icon from "$lib/components/icons/H2Icon.svelte"
import H3Icon from "$lib/components/icons/H3Icon.svelte"
import ImageIcon from "$lib/components/icons/ImageIcon.svelte"
import DOMPurify from 'isomorphic-dompurify'
import { anchor } from "@cartamd/plugin-anchor"

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
export const cartaIcons = (): Plugin => ({
    icons: [
        {id: 'section', action: (input) => input.toggleLinePrefix('##'), component: H2Icon},
        {id: 'subsection', action: (input) => input.toggleLinePrefix('###'), component: H3Icon},
        {id: 'image', action: (input) => input.toggleSelectionSurrounding(['![](',')' ]), component: ImageIcon},
        {id: 'wikilink', action: (input) => input.toggleSelectionSurrounding(['[[', ']]']), component: WikiLinkIcon},
    ]
})

export const carta = new Carta({
    sanitizer: DOMPurify.sanitize,
    extensions: [anchor(), remark(), rehype(), cartaIcons()]
})