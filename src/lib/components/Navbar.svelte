<script>
    import { logoUrl } from '$lib/config/context.config';
	import Button from './Button.svelte';

</script>

<nav>
    <a class="navbrand" href="/">
        <img src={logoUrl} alt="dolphin logo" width="170px">
    </a>
    <ul>
        <a href="/book"><li>Book</li></a>
        <a href="/about"><li>About</li></a>
        <a href="/contact">Contact</a>
    </ul>
    <div class="cta">
        <Button class="!w-[80px] !h-[38px] !rounded-md" textClass=" !text-sm" href="/book">Book us</Button>
    </div>
</nav>

<style>

    ul {
        width: 33%;
        display: flex;
        display: flex;
        justify-content: center;
        gap: 20px;
    }

    li {
        font-size: 16px;
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
    }

    nav {
        position: sticky;
        top: 0;
        z-index: 50;
        background-color: var(--color-bg-50);
        border-bottom: 1px solid var(--color-bg-200);
        padding: 12px 2px 12px 2px;
        display: flex;
        justify-content: space-around;
        align-items: center;
    }

    @media screen and (min-width: 640px) {
        nav {
            padding: 12px 7% 12px 7%;
        }
    }

    :global(body.dark) nav {
        background-color: var(--color-bg-900);
        border-bottom: 1px solid var(--color-bg-800);
    }

</style>