<script lang="ts">
	import { enhance } from '$app/forms';
	import Button from '$lib/components/Button.svelte';
	import Input from '$lib/components/Input.svelte';
	import Card from '$lib/components/Card.svelte';
	import TextArea from '$lib/components/TextArea.svelte';
	import { fade } from 'svelte/transition';

	let loading = false;

	export let form: { success: boolean; error: string };

	$: if (form?.success) {
		loading = false;
	}
</script>

<svelte:head>
	<title>Alumi Pro- Contact</title>
	<meta
		name="description"
		content="Get a free estimate for screen enclosures, rescreens, shutters, gutters or anything else Alumi Pro LLC offers."
	/>
</svelte:head>

<section class="flex justify-center py-8 sm:py-24">
	<Card class="max-w-[500px] mx-4">
		<h1 class="theme-h1 text-center">Contact</h1>
		<div class="mb-4">
			<p class="text-center theme-p">
				Thanks for taking the time to reach out! We Will get back to you as soon as possible.
			</p>
		</div>
		<form
			class="space-y-2 flex flex-col items-center"
			method="POST"
			use:enhance
			on:submit={() => (loading = true)}
		>
			<div>
				<label for="Name" class="block theme-p">Name</label>
				<Input required placeholder="Your name" name="Name" />
			</div>
			<div>
				<label for="Email" class="block theme-p">Email</label>
				<Input required placeholder="email@example.com" name="Email" />
			</div>
			<div>
				<label for="Message" class="block theme-p">Message</label>
				<TextArea required placeholder="Add any extra details here." name="Message" />
			</div>
			{#if form?.success}
				<p transition:fade class="theme-p !text-green-500 max-w-[300px] text-center">
					Thanks for reaching out! We will get back soon.
				</p>
			{:else if form?.error}
				<p transition:fade class="theme-p !text-red-500 max-w-[300px] text-center">{form.error}</p>
			{:else}
				<Button color="primary" bind:loading>Submit</Button>
			{/if}
		</form>
	</Card>
</section>
