<script lang="ts">
	export let items: { name: string; value: any } | null = null;
	export let options: string[] | null = null;
	export let itemClass = '';
	export let value: any;
</script>

<select {...$$restProps} bind:value>
	{#if items}
		{#each items as { name, value }}
			<option {value} class={itemClass}>{name}</option>
		{/each}
	{:else if options}
		{#each options as option}
			<option value={option} class={itemClass}>{option}</option>
		{/each}
	{/if}
</select>

<style>
	select {
		height: 42px;
		width: 300px;
		border-radius: var(--rounded-input);
		background-color: var(--color-bg-50);
		border: 1px solid var(--color-bg-300);
		color: var(--color-text-900);
		padding: 0px 8px 0px 8px;
	}

	select:focus {
		outline: none;
		border: 1px solid var(--color-secondary-500);
		box-shadow: 0 0 0 3px var(--color-secondary-500);
	}

	:global(.dark) select:focus {
		border: 1px solid var(--color-secondary-400);
		box-shadow:
			var(--color-secondary-400) 0px 0px 3px,
			var(--color-secondary-400) 0px 0px 0px 3px;
	}

	:global(.dark) select {
		background-color: var(--color-bg-700);
		border: 1px solid var(--color-bg-600);
		color: var(--color-text-50);
	}

	:global(.dark) select:focus {
		border: 1px solid var(--color-secondary-400);
	}
</style>
