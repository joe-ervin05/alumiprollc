<script lang="ts">
	import Button from "$lib/components/Button.svelte";
    import { fade, fly } from "svelte/transition";
    import { onMount } from 'svelte';
	import Card from "$lib/components/Card.svelte";

    let video : HTMLVideoElement;

    let width = 0;

    function playVideo() {
        if (video.paused) {
            video.play();
        }
    }

    let ready = false;
    onMount(() => {
        ready = true;
    })

</script>

<svelte:window bind:innerWidth={width} />

<section class="hero">
    <div class="vid-cover-container">
        <div class="vid-cover"/>
    </div>
    {#if width <= 480}
        <video class="hero-vid" bind:this={video} src="/banner-480p.mp4" playsinline autoplay loop muted/>
    {:else if width <= 720}
        <video class="hero-vid" bind:this={video} src="/banner-720p.mp4" playsinline autoplay loop muted/>
    {:else}
        <video class="hero-vid" bind:this={video} src="/banner-1080p.mp4" playsinline autoplay loop muted/>
    {/if}
    {#if ready}
    <div class="hero-content">
        <h1><span transition:fade class="hero-header">Alumi Pro LLC</span></h1>
        <h2 class="theme-h3 !text-slate-200 mt-4">Professional Aluminum Contractors</h2>
        <h3 transition:fade={{ delay: 600 }} class="hero-text max-w-[500px] mt-4">Screen enclosures, rescreens/repairs, hurricane shutters, seamless gutters.</h3>
        <Button color="secondary" class="mt-4">Get a free estimate</Button>
        <div class="flex gap-2 mt-2">
            <Button size="sm" href="tel:2396878658" class="!w-[140px] !h-full py-1">
                (239) 687-8658
            </Button>
            <Button size="sm" href="/contact" class="!w-[140px] !h-full py-1">contact us</Button>
        </div>
    </div>
    {/if}
</section>
<section>
    <Card>test</Card>
    screen enclosures
</section>
<section>
    railings
</section>
<section>
    insulated panels
</section>
<section>
    front entries
</section>

<style>

    .hero {
        text-align: center;
        position: relative;
        width: 100%;
    }

    .hero-content {
        z-index: 20;
        display: flex;
        flex-direction: column;
        align-items: center;
        position: absolute;
        top: calc(50% - 148px);
        left: 0;
        right: 0;
        padding-left: 16px;
        padding-right: 16px;
    }

    .hero-vid {
        z-index: 10;
        width: 100%;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
    }

    .vid-cover-container {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        right: 0;
        left: 0;
        bottom: 0;
    }

    .vid-cover {
        background-color: var(--color-bg-950);
        width: 100%;
        height: 100%;
        opacity: 0.24;
    }

    .hero-header {
        font-size: 44px;
        font-weight: 700;
        line-height: 110%;
        color: var(--color-text-50);
    }

    .hero-text {
        font-size: 23px;
        padding: 0 0 8px 0;
        color: var(--color-text-300);
    }

</style>