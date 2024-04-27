
{#if $$props.href}
<a href={$$props.href} {...$$restProps} class="theme-card {$$props.class}">
    <slot/>
</a>
{:else}
<div {...$$restProps} class="theme-card {$$props.class}">
    <slot/>
</div>
{/if}

<style>
    .theme-card {
        padding: 16px;
        border-radius: var(--rounded-container);
        background-color: var(--color-accent-200);
        color: var(--text-600);
        box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
        transition: all 300ms;
    }

    a.theme-card:hover {
        background-color: var(--color-accent-300);
        transform: scale(1.02);
    }
</style>