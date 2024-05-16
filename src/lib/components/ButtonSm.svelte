<script lang="ts">
	export let loading = false;
	export let href: string | null = null;
	export let textClass = '';
</script>

{#if href}
	<a {href} {...$$restProps} class="btn {$$props.class} {loading ? 'loading' : ''}">
		<div class="btn-spinner" />
		<span class="btn-text {textClass}"><slot /></span>
	</a>
{:else}
	<button {...$$restProps} on:click class="btn {$$props.class} {loading ? 'loading' : ''}">
		<div class="btn-spinner" />
		<span class="btn-text {textClass}"><slot /></span>
	</button>
{/if}

<style>
	.btn-spinner {
		display: none;
	}

	.loading {
		pointer-events: none;
	}

	.loading .btn-spinner {
		display: block;
		width: 20px;
		height: 20px;
		border: 4px solid transparent;
		border-radius: 50%;
		border-top: 4px solid var(--color-text-50);
		animation: spin 1.2s infinite;
	}

	@keyframes spin {
		0% {
			rotate: 180deg;
		}
		100% {
			rotate: 540deg;
		}
	}

	.loading .btn-text {
		display: none;
	}

	.btn-text {
		color: var(--color-text-50);
		font-size: 13px;
	}

	.btn {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 42px;
		width: 80px;
		border-radius: var(--rounded-button);
		background-color: var(--color-primary-500);
		transition: all 300ms;
	}

	.btn:hover {
		background-color: var(--color-primary-600);
		transform: scale(1.02);
	}

	.btn:active {
		transform: scale(0.99);
	}

	:global(.dark) .btn {
		background-color: var(--color-primary-400);
	}

	:global(.dark) .btn:hover {
		background-color: var(--color-primary-500);
	}
</style>
