<script lang="ts">
    import { logoUrl } from '$lib/config/context.config';
	import { slide, blur } from 'svelte/transition';
	import Button from './Button.svelte';
    import { navigating } from '$app/stores';
    import { nav } from '$lib/config/context.config';
	import ButtonSm from './ButtonSm.svelte';

    let menu = false;

    $: if ($navigating) menu = false;

</script>
<nav>
    <div class="nav-main">
        <a class="navbrand" href="/">
            <img src={logoUrl} width="200px" alt="dolphin logo">
        </a>
        <ul class="nav-ul">
            {#each nav as { href, name }}
            <a {href}><li>{name}</li></a>
            {/each}
        </ul>
        <div class="cta">
            <ButtonSm class="!w-[100px]" href='/book'>Get Started</ButtonSm>
            <button class="menu-btn" on:click={() => menu = !menu}>
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" viewBox="0 0 16 16">
                    {#if menu}
                        <path transition:blur d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/>
                    {:else}
                        <path transition:blur fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
                    {/if}
                </svg>
            </button>
            
        </div>
    </div>
{#if menu}
<div transition:slide={{ duration: 300 }} class="menu">
    <ul class="menu-ul">
        {#each nav as { href, name }}
        <a {href}><li class="theme-h4">{name}</li></a>
        {/each}
    </ul>
</div>
{/if}
</nav>

<style>

    .nav-main {
        display: flex;
        justify-content: space-around;
        align-items: center;
    }

    .menu {
        padding: none;
        position: absolute;
        width: 100%;
        height: 100%;
        position: sticky;
    }

    .nav-ul {
        display: none;
    }
    
    .menu-ul {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 20px;
        padding: 20px 0px 20px 0px;
    }

    .nav-ul li {
        font-size: 18px;
        white-space: nowrap;
        color: var(--color-text-600);
    }

    li:hover {
        color: var(--color-text-950);
    }

    .navbrand {
        width: 33%;
        display: flex;
        justify-content: flex-start;
    }

    .cta {
        width: 33%;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        gap: 6px;
    }

    nav {
        position: sticky;
        top: 0;
        z-index: 50;
        max-height: 100vh;
        background-color: var(--color-bg-50);
        border-bottom: 1px solid var(--color-bg-200);
        padding: 12px 2px 12px 2px;
    }

    @media screen and (min-width: 640px) {
        nav {
            padding: 12px 7% 12px 7%;
        }

        .nav-ul {
            width: 33%;
            display: flex;
            justify-content: center;
            gap: 20px;
        }

        .menu-btn {
            display: none;
        }
    }

    :global(body.dark) nav {
        background-color: var(--color-bg-900);
        border-bottom: 1px solid var(--color-bg-800);
    }

</style>