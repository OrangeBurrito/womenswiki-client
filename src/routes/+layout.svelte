<script lang="ts">
    import { setContextClient } from '@urql/svelte'
    import { client } from '$lib/graphql/client'
    import SearchBar from '$lib/components/SearchBar.svelte'
    import '$lib/style.css'

    setContextClient(client)
</script>

<svelte:head>
    <script async src="https://www.googletagmanager.com/gtag/js?id={import.meta.env.VITE_GOOGLE_ANALYTICS_ID}"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
    
      gtag('config', import.meta.env.VITE_GOOGLE_ANALYTICS_ID);
    </script>
</svelte:head>

<header>
    <div class="inner">
        <h3 id="page-title"><a href="/">WomensWiki</a></h3>
        <!-- <SearchBar/> -->
    </div>
</header>
<main>
    <slot/>
</main>
<footer>
    <p>Copyright © OrangeBurrito 2024</p>
</footer>

<style>
    header, footer {
        background: var(--color-primary-light);
    }
    
    header .inner, footer .inner {
        max-width: 85ch;
        display: flex;
        align-items: center;
        gap: 1rem;
        padding: 1rem;
        margin: 0 auto;
    }

    footer {
        padding: 0.75rem 1rem;
        text-align: center;
    }

    #page-title a {
        font-weight: bold;
        border-bottom: none;
    }
    
    main {
        max-width: 900px;
        flex-grow: 1;
        padding: 2rem 1rem;
        margin: 0 auto;
    }
</style>