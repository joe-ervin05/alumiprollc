<div {...$$restProps} class="theme-card {$$props.class}">
    <slot/>
</div>

<style>
    .theme-card {
        padding: 16px;
        border-radius: var(--rounded-container);
        background-color: var(--color-accent-200);
        color: var(--text-600);
        box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
    }
</style>