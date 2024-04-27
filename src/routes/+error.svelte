<script>

    import { page } from "$app/stores";
	import Button from "$lib/components/Button.svelte";

</script>

<main class="w-[100vw] h-[80vh] flex flex-col items-center justify-center">
    <h1 class="theme-hero-text !text-[60px] text-center !text-red-600">{$page.status}</h1>
    <h2 class="theme-hero-text text-center">{$page.error?.message}</h2>
    <Button class="mt-4" href="/" color="alternative">Home page</Button>
</main>