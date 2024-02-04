<script>
    export let value = '';
</script>

<input
{...$$restProps}
bind:value
on:input
on:click
on:change
on:keydown
on:keypress
on:keyup
class="theme-input">

<style>
    .theme-input {
        height: 42px;
        width: 300px;
        border-radius: var(--rounded-input);
        background-color: var(--color-bg-50);
        border: 1px solid var(--color-bg-300);
        color: var(--color-text-900);
        padding: 0px 8px 0px 8px;
    }

    .theme-input:focus {
        outline: none;
        border: 1px solid var(--color-secondary-500);
        box-shadow: 0 0 0 3px var(--color-secondary-500);
    }

    :global(.dark) .theme-input:focus {
        border: 1px solid var(--color-secondary-400);
        box-shadow: var(--color-secondary-400) 0px 0px 3px, var(--color-secondary-400) 0px 0px 0px 3px;
    }

    :global(.dark) .theme-input {
        background-color: var(--color-bg-700);
        border: 1px solid var(--color-bg-600);
        color: var(--color-text-50);
    }

    :global(.dark) .theme-input:focus {
        border: 1px solid var(--color-secondary-400);
    }
</style>