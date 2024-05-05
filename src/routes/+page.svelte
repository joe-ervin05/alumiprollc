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
    <div class="hidden sm:block">
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
    </div>
    {#if ready}
    <div class="z-20 flex flex-col py-8 sm:py-0 mx-4 items-center sm:absolute top-[calc(50%-148px)] bottom-0 right-0 left-0">
        <h1><span transition:fade class="text-[44px] font-bold leading-relaxed sm:!text-slate-50">Alumi Pro LLC</span></h1>
        <h2 class="theme-h2 sm:!text-slate-200 mt-4">Professional Aluminum Contractors</h2>
        <h3 transition:fade={{ delay: 600 }} class="text-[20px] sm:text-[22px] pb-2 sm:!text-slate-300 max-w-[500px] mt-4">Screen enclosures, rescreens/repairs, hurricane shutters, seamless gutters.</h3>
        <Button color="secondary" href="/estimate" class="mt-4">Get a free estimate</Button>
        <div class="flex gap-2 mt-2">
            <Button size="sm" href="tel:2396878658" class="!w-[140px] !h-full py-1">
                (239) 687-8658
            </Button>
            <Button size="sm" href="/contact" class="!w-[140px] !h-full py-1">contact us</Button>
        </div>
    </div>
    {/if}
</section>
<section class="gap-2 flex flex-wrap justify-center py-8">
    <Card class="!w-[150px] sm:!w-[240px] flex justify-center" href="/estimate?work=Screen%20enclosures"><p class="!text-[14px] md:!text-[20px]">Screen enclosures</p></Card>
    <Card class="!w-[150px] sm:!w-[240px] flex justify-center" href="/estimate?work=Rescreening"><p class="!text-[15px] md:!text-[20px]">Rescreens/repairs</p></Card>
    <Card class="!w-[150px] sm:!w-[240px] flex justify-center" href="/estimate?work=Hurricane%20shutters"><p class="!text-[13.5px] md:!text-[20px]">Hurricane shutters</p></Card>
    <Card class="!w-[150px] sm:!w-[240px] flex justify-center" href="/estimate?work=Seamless%20gutters"><p class="!text-[15px] md:!text-[20px]">Seamless gutters</p></Card>
</section>
<section>
</section>
<section class="py-8 sm:py-24">
    <div class="flex justify-center flex-wrap mx-4 gap-2">
        <div class="grid grid-cols-2 gap-2 justify-center">
            <img src="screen-1.webp" class="rounded-md shadow-md" alt="">
            <img src="screen-2.webp" class="rounded-md shadow-md" alt="">
            <img src="screen-3.webp" class="rounded-md shadow-md" alt="">
            <img src="screen-4.webp" class="rounded-md shadow-md" alt="">
        </div>
        <img src="screen-5.webp" class="rounded-md shadow-md" alt="">
        <img src="screen-6.webp" class="rounded-md shadow-md" alt="">        
        <div class="grid grid-cols-2 gap-2">
            <img src="screen-7.webp" class="rounded-md shadow-md" alt="">
            <img src="screen-8.webp" class="rounded-md shadow-md" alt="">
            <img src="screen-9.webp" class="rounded-md shadow-md" alt="">
            <img src="screen-10.webp" class="rounded-md shadow-md" alt="">
        </div>
    </div>
</section>
<section class="pt-8 sm:pt-24 pb-4 sm:pb-8">
    <div class="flex justify-center flex-wrap mx-4 gap-2">
        <div class="flex flex-wrap gap-2">
            <img src="entry1.webp" class="rounded-md shadow-md" alt="">
            <img src="entry2.webp" class="rounded-md shadow-md" alt="">
        </div>
        <img src="railing-1.webp" class="rounded-md shadow-md" alt="">
        <img src="railing-2.webp" class="rounded-md shadow-md" alt="">
        <div class="flex flex-wrap gap-2">
            <img src="entry3.webp" class="rounded-md shadow-md" alt="">
            <img src="entry4.webp" class="rounded-md shadow-md" alt="">    
        </div>
    </div>
</section>
<section class="py-8 sm:py-24">
    <div class="flex justify-center flex-wrap mx-4 gap-2">
        <div class="grid grid-cols-2 gap-2 justify-center">
            <img src="panel-4.webp" class="rounded-md shadow-md" alt="">
            <img src="panel-9.webp" class="rounded-md shadow-md" alt="">
            <img src="panel-2.webp" class="rounded-md shadow-md" alt="">
            <img src="panel-8.webp" class="rounded-md shadow-md" alt="">
        </div>
        <img src="panel-5.webp" class="rounded-md shadow-md" alt="">
        <img src="panel-6.webp" class="rounded-md shadow-md" alt="">        
        <div class="grid grid-cols-2 gap-2">
            <img src="panel-7.webp" class="rounded-md shadow-md" alt="">
            <img src="panel-1.webp" class="rounded-md shadow-md" alt="">
            <img src="panel-3.webp" class="rounded-md shadow-md" alt="">
            <img src="panel-10.webp" class="rounded-md shadow-md" alt="">
        </div>
    </div>
</section>
<section class="py-4 sm:py-8 flex justify-center">
    <Button color="secondary">Get an estimate</Button>
</section>

<style>

    .hero {
        text-align: center;
        position: relative;
        width: 100%;
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

</style>