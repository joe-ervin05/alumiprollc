<script lang="ts">


    export let loading = false;
    export let href : string | null = null;
    export let textClass = '';
    export let color: 'primary' | 'secondary' | 'alternative' | 'base' = 'base';
    export let size: 'sm' | 'normal' = 'normal';

</script>
{#if href}
    <a {href} {...$$restProps} class="btn {size} {color} {$$props.class} {loading ? 'loading' : ''}">
        <div class="btn-spinner"/>
        <span class="btn-text {textClass}"><slot/></span>
    </a>
{:else}
    <button {...$$restProps} on:click class="btn {size} {color} {$$props.class} {loading ? 'loading' : ''}">
        <div class="btn-spinner"/>
        <span class="btn-text {textClass}"><slot/></span>
    </button>
{/if}

<style>

    .loading {
        pointer-events: none;
    }

    .loading .btn-spinner {
        position: absolute;
        opacity: 1;
        margin: 0 auto;
        width: 30px;
        height: 30px;
        border: 5px solid transparent;
        border-radius: 50%;
        border-top: 5px solid var(--color-text-50);
        animation: spin 1.2s infinite;
    }

    .loading.sm .btn-spinner {
        width: 23px;
        height: 23px;
    }

    .loading.alternative .btn-spinner {
        border-top: 5px solid var(--color-text-900);
    }

    .loading.primary .btn-spinner {
        border-top: 5px solid var(--color-text-50);
    }

    .loading.secondary .btn-spinner {
        border-top: 5px solid var(--color-text-900)
    }

    @keyframes spin {
        0% { rotate: 180deg; }
        100% { rotate: 540deg; }
    }

    .loading .btn-text {
        opacity: 0;
    }

    .btn .btn-text {
        color: var(--color-text-50);
        transition: all 300ms;
    }

    .btn.sm .btn-text {
        font-size: 15px;
    }

    .btn.alternative .btn-text {
        color: var(--color-text-900);
    }

    .btn.alternative:hover {
        background-color: var(--color-primary-400);
    }

    .btn.alternative .btn-text {
        color: var(--color-text-900);
    }

    .btn.primary .btn-text {
        color:var(--color-text-900);
    }

    .btn.secondary .btn-text {
        color: var(--color-text-900);
    }

    .btn {
        display: flex;
        position: relative;
        justify-content: center;
        align-items: center;
        height: 42px;
        width: 280px;
        border-radius: var(--rounded-button);
        background-color: var(--color-accent-700);
        transition: all 300ms;
    }

    .btn.alternative {
        background-color: var(--color-bg-50);
        border: 2px solid var(--color-bg-900);
    }

    .btn.primary {
        background-color: var(--color-primary-600);
    }

    .btn.secondary {
        background-color: var(--color-secondary-500);
    }

    .btn.sm {
        width: 80px;
        height: 33px;
    }

    .btn:hover {
        filter: brightness(0.91);
        transform: scale(1.02);
    }

    .btn:active {
        transform: scale(0.99);
    }

    @media (min-width: 640px) {

        .btn {
            width: 300px;
        }

        .btn.sm {
            width: 100px;
        }
    }

</style>