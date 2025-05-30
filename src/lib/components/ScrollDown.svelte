<script>
    import { onMount } from "svelte";

    /** @type {{text?: string}} */
    let { text = "Scroll down" } = $props();

    let scrollY = $state(0);

    let windowHeight = $state(0);
    onMount(() => {
        windowHeight = window.innerHeight;
    });
</script>

<svelte:window bind:scrollY />

<div class="container float">
    {#if scrollY <= windowHeight / 2}
        <p><b>{text}</b></p>
    {:else}
        <p><b>Project portfolio</b></p>
    {/if}
    <img src="/images/arrowdown.svg" alt="arrow down" />
</div>

<style>
    .container {
        position: absolute;
        bottom: 2.5vh;
        width: calc(100% - 2 * var(--scroll-bar-width));
        left: var(--scroll-bar-width);

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .float {
        animation: floatY 1.5s ease-in-out infinite alternate;
    }

    @keyframes floatY {
        from {
            transform: translateY(0);
        }
        to {
            transform: translateY(-10px);
        }
    }

    img {
        width: 50px;
        height: 50px;
    }

    p {
        color: var(--primary);
        text-align: center;
        font-size: 1.5rem;
        margin: 0;
        padding: 0;
        -webkit-text-stroke: 0.5px var(--text);
    }
</style>
