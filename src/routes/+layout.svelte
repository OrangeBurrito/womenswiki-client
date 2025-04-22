<script lang="ts">
	import type { LayoutServerData } from './$types'
    import { setContextClient } from '@urql/svelte'
    import { client } from '$lib/graphql/client'
    import '$lib/styles/global.css'
	import { onMount, type Snippet } from 'svelte'

    interface Props {
        data: LayoutServerData
        children: Snippet
    }

    let { data, children }: Props = $props()

    setContextClient(client)

    onMount(() => {
        if (data?.googleAnalytics) {
            const script = document.createElement('script');
            script.async = true;
            script.src = `https://www.googletagmanager.com/gtag/js?id=${data.googleAnalytics}`
            script.innerHTML = `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());

                gtag('config', '${data.googleAnalytics}');
            `
            document.head.appendChild(script);
        }
    })
</script>


<header>
    <div class="inner">
        <h3 id="page-title"><a href="/">WomensWiki</a></h3>
    </div>
</header>
<main>
    {@render children()}
</main>
<footer>
    <div class="inner">
        <p>Copyright © OrangeBurrito 2024</p>
    </div>
</footer>

<style>
    header, footer {
        background: var(--color-primary-light);
    }
    
    header .inner {
        max-width: 85ch;
        display: flex;
        align-items: center;
        gap: 1rem;
        padding: 1rem;
        margin: 0 auto;
    }

    footer {
        text-align: center;
        font-style: italic;
        font-size: 14px;
        padding: 0.5rem 1rem;
    }

    #page-title a {
        font-family: var(--font-serif);
        font-weight: bold;
        color: var(--color-primary-dark);
        border-bottom: none;
    }
    
    main {
        width: 900px;
        flex-grow: 1;
        padding: 2rem 1rem;
        margin: 0 auto;
    }

    @media (max-width: 900px) {
        main {
            width: 100%;
        }
    }
</style>