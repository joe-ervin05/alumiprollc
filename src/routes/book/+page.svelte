<script lang="ts">
  import { enhance } from "$app/forms";
	import Button from "$lib/components/Button.svelte";
	import Input from "$lib/components/Input.svelte";
  import Card from "$lib/components/Card.svelte";
	import Select from "$lib/components/Select.svelte";
	import { slide } from "svelte/transition";
	import TextArea from "$lib/components/TextArea.svelte";
	import PhoneInput from "$lib/components/PhoneInput.svelte";

  let loading = false;

  export let form : { success : boolean, error : string };

  $: if (form?.success) {
    loading = false;
  }

  const options = [
    "Power/pressure washing",
    "Gutter cleaning",
    "Soft wash cleaning",
    "Deck cleaning",
    "Driveway cleaning",
    "Pool cage cleaning",
    "Sidewalk Cleaning",
    "Lanai cleaning",
    "Window cleaning",
    "House wash",
    'Other/not sure'
  ]

  let service = options[0];

  $: console.log(service);
</script>

<section class="flex justify-center">
  <Card class="max-w-[500px]">
    <h1 class="theme-h1 text-center">Book</h1>
    <div class="mb-4">
      <p class="text-center theme-p">
        Thanks for taking the time to reach out! We Will get back to you as soon as possible.
      </p>
      <p class="text-center">You can also call us at <a href="Tel:239-200-0912" class="font-bold">(239) 200-0912</a>.</p>
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
        <label for="Email" class="block theme-p">Email</label>
        <Input required placeholder="email@example.com" name="Email"/>
      </div>
      <div>
        <label for="Email" class="block theme-p">Phone number</label>
        <Input required type="tel" placeholder="(239) 123-4567" name="Phone number"/>
      </div>
      <div>
        <label for="Address" class="block theme-p">Address</label>
        <Input type="text" name="Address" />
      </div>
      <div>
        <label for="Service requested" class="block theme-p">Service needed</label>
        <Select required bind:value={service} {options}  name="Service requested" />
      </div>
      {#if service === 'Other/not sure'}
        <div transition:slide>
          <label for="Service info" class="block theme-p">Describe what you're looking for</label>
          <TextArea required placeholder="Provide as many details as you can." name="Service info" />
        </div>
      {/if}
      <div>
        <label for="Comments" class="block theme-p">Comments</label>
        <TextArea required placeholder="Add any extra details here." name="Comments" />
      </div>
      <Button>Submit</Button>
    </form>
  </Card>
</section>