<script>

    import '../app.css';
    import config from '$lib/config/context.config';
    import { getThemeCss } from '$lib/util/site';
	import { loadGoogleFonts } from '$lib/util/css';
	import { onMount } from 'svelte';
    import { PUBLIC_FATHOM_URL, PUBLIC_FATHOM_ID } from "$env/static/public";
    import * as Fathom from 'fathom-client';
    import Navbar from '$lib/components/Navbar.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import { browser } from '$app/environment';
	import { page } from '$app/stores';

    onMount(async () => {
        Fathom.load(PUBLIC_FATHOM_ID, {
            url: PUBLIC_FATHOM_URL
        })
    })

    $: if (browser && $page.url.pathname) {
         Fathom.trackPageview();
    }
</script>

<svelte:head>
    <link href={loadGoogleFonts(config.theme.variables.font)} rel="stylesheet">
</svelte:head>
<div class="min-h-screen content" style={getThemeCss(config.theme)}>
    <Navbar/>
    <div class="py-24">
        <slot/>
    </div>
    <Footer />
</div>

<style>
    .content{
        background-color: var(--color-bg-50);
        transition: all 300ms;
    }
    
    .content :global(.dark) {
        background-color: var(--color-bg-900);
    }
</style>