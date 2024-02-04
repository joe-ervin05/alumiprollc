<div {...$$restProps} class="theme-card {$$props.class}">
    <slot/>
</div>

<style>
    .theme-card {
        padding: 16px;
        border-radius: var(--rounded-container);
        background-color: var(--text-50);
        border: 1px solid var(--bg-100);
        color: var(--text-600);
        box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
    }

    :global(.dark) .theme-card {
        background-color: var(--bg-800);
        border: 1px solid var(--bg-700);
        box-shadow: none;
    }
</style>