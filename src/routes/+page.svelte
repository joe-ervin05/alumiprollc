<script>
    import Button from "$lib/components/Button.svelte";
	import { shortName } from "$lib/config/context.config";

    let innerWidth = 0;
</script>

<section class="flex flex-col gap-8 items-center justify-center">
    <div class="w-[282px] sm:w-[572px]">
        <h1 class="theme-h1">Premium washing services</h1>
        <p class="theme-p">We believe in honesty, service, and quality work. It makes a tremendous difference when you care about the work you are doing.</p>
    </div>
    <div>
        <Button href="/book">Book now</Button>
        <p class="mt-2 theme-p">or call us at <a class="theme-h3 hover:underline" href="Tel: 239-200-0912">(239) 200-0912</a>.</p>
    </div>
    <div class="w-[282px] md:w-[572px] lg:w-[862px] flex flex-col md:flex-row gap-4 mx-4">
            <video src="pool-cleaning.mov" class="shadow-lg object-none w-[281px] h-[470px]" playsinline autoplay muted loop />
        <div class="mt-4">
            <h1 class="theme-h2">What is {shortName}</h1>
            <p class="theme-p max-w-[500px]">{shortName} was started to be more than a white glove pressure washing service. We aim to create high paying specialist jobs in the Naples/ Marco Island/ Bonita Springs area.</p>
        </div>
    </div>
    <header class="text-center mb-4">
        <h1 class="theme-h1">Our Work</h1>
        <p class="theme-p">A collection of our best work.</p>
    </header>
    <section class="items-center justify-center grid sm:grid-cols-2 lg:grid-cols-3 w-[282px] sm:w-[572px] lg:w-[862px] gap-2 mx-4">
        <img src="leafblower.jpg" class="shadow-lg" loading="lazy" alt="roof work">
        <img src="spraying-cage.jpg" class="shadow-lg" loading="lazy" alt="">
        <div>
            <img src="blowing-gutter.jpg" loading="lazy" class="w-[282px] sm:w-full sm:h-[246px] shadow-lg" alt="">
            <img src="house-above.jpg" loading="lazy" class="w-[282px] sm:w-full sm:h-[246px] mt-2 shadow-lg" alt="">
        </div>
        <img src="screen-above.jpg" loading="lazy" class="hidden lg:block" alt="">
        <img src="blowing-roof.jpg" loading="lazy" class="hidden lg:block" alt="">
        <img src="above-rotated.jpg" loading="lazy" class="hidden lg:block" alt="">
        <div>
            <img src="ladder-on-house.jpg" loading="lazy" class="w-[282px] sm:w-full sm:h-[246px] shadow-lg" alt="">
            <img src="spraying-roof.jpg" loading="lazy" class="w-[282px] sm:w-full sm:h-[246px] mt-2 shadow-lg" alt="">
        </div>
        <img src="cage-after.jpg" loading="lazy" class="h-[500px] shadow-lg" alt="">
        <img src="lucas-spraying.jpg" loading="lazy" class="h-[500px] shadow-lg" alt="">
    </section>
</section>

<style>

    video {
        border-radius: var(--rounded-container);
        background-color: var(--color-bg-300);
    }

    img {
        border-radius: var(--rounded-container);
        background-color: var(--color-bg-300);
    }

</style>

<svelte:window bind:innerWidth></svelte:window>