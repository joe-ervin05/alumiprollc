<script lang="ts">
    import { enhance } from "$app/forms";
    import Button from "$lib/components/Button.svelte";
    import Input from "$lib/components/Input.svelte";
    import Card from "$lib/components/Card.svelte";
    import TextArea from "$lib/components/TextArea.svelte";
	import { fade } from "svelte/transition";
	import { page } from "$app/stores";
  
    let loading = false;

    let work = "";

    if ($page.url.searchParams.has("work")) {
        work = $page.url.searchParams.get("work") as string
    }
  
    export let form : { success : boolean, error : string };
  
    $: if (form?.success) {
      loading = false;
    }
</script>
  
  <section class="flex justify-center py-8 sm:py-24">
    <Card class="max-w-[500px] mx-4">
      <h1 class="theme-h1 text-center">Estimates</h1>
      <div class="mb-4">
        <p class="text-center theme-p">
            Please fill out this form and we will get in touch for an estimate of the job.
        </p>
      </div>
      <form
        class="space-y-2 flex flex-col items-center"
        method="POST"
        use:enhance
        on:submit={() => loading = true}
      >
        <div>
          <label for="Name" class="block theme-p">Name</label>
          <Input required placeholder="Your name" name="Name"/>
        </div>
        <div>
            <label for="Number" class="block theme-p">Phone Number</label>
            <Input placeholder="(239) 000-0000" name="Number"/>
          </div>
        <div>
          <label for="Email" class="block theme-p">Email</label>
          <Input required placeholder="email@example.com" name="Email"/>
        </div>
        <div>
            <label for="Address" class="block theme-p">Address</label>
            <Input required placeholder="Your street address" name="Address"/>
        </div>
        <div>
        <label for="Type of work needed" class="block theme-p">Type of work needed</label>
        <TextArea bind:value={work} required placeholder="I need a screen enclosure for my pool." name="Type of work needed" />
        </div>
        <div>
          <label for="Message" class="block theme-p">Other details</label>
          <TextArea placeholder="Add any extra details here." name="Other details" />
        </div>
        {#if form?.success}
            <p transition:fade class="theme-p !text-green-600 max-w-[300px] text-center">Thanks for reaching out! We will get back soon.</p>
        {:else if form?.error}
            <p transition:fade class="theme-p !text-red-500 max-w-[300px] text-center">{form.error}</p>
        {:else}
            <Button bind:loading color="primary">Submit</Button>
        {/if}
      </form>
    </Card>
  </section>