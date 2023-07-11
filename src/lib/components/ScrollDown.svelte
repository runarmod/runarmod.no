<script>
    import { onMount } from "svelte";
    import { tweened } from "svelte/motion";
    import { quadInOut } from "svelte/easing";

    export let text = "Scroll down";

    let scrollY = 0;

    let windowHeight = 0;
    onMount(() => {
        windowHeight = window.innerHeight;
    });

    const anim = tweened(0, {
        duration: 1500,
        easing: quadInOut,
    });

    let loop = () =>
        anim
            .set(1)
            .then(() => anim.set(0))
            .then(() => loop());
    loop();
</script>

<svelte:window bind:scrollY />

<div class="container" style="transform: translateY({-10 * $anim}px)">
    {#if scrollY <= windowHeight / 2}
        <p><b>{text}</b></p>
    {:else}
        <p><b>My project showcase</b></p>
    {/if}
    <img src="/images/arrowdown.svg" alt="arrow down" />
</div>

<style>
    .container {
        position: absolute;
        bottom: 2.5vh;
        width: calc(100vw - 2 * var(--scroll-bar-width));
        left: var(--scroll-bar-width);

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
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
    }
</style>
