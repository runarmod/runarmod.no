<script>
    import { theme } from "../stores.js";
    import { getDarkmodeImages, getLightmodeImages } from "../wavy.js";
    import { onMount } from "svelte";
    import { sineInOut } from "svelte/easing";
    import { Tween } from "svelte/motion";

    /** @type {{data: any}} */
    let { data } = $props();
    let paths = data.paths;
    let outerWidth = $state(1920);
    let outerHeight = $state(1080);
    let scrollY = $state();

    const opacity = new Tween(0, {
        duration: 1000,
        easing: sineInOut,
    });

    $effect(async () => {
        if ($theme === "dark") {
            paths.dark.shift();
            paths.dark.push(await getDarkmodeImages());
        } else {
            paths.light.shift();
            paths.light.push(await getLightmodeImages());
        }
    });

    onMount(() => {
        opacity.set(1);
    });
</script>

<svelte:window bind:scrollY bind:outerWidth bind:outerHeight />

<div class="container">
    {#each paths[$theme][0] as path, i}
        {@const len = paths[$theme][0].length}
        {@const newY = (-scrollY * (i + 1)) / len}
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={outerWidth}
            height={outerHeight}
            style="transform: translate(0, {newY}px); opacity: {opacity.current};"
        >
            <path fill={path.color} d={path.path} transform="scale({outerWidth}, {outerHeight})" />
        </svg>
    {/each}
</div>

<style>
    .container {
        position: fixed;
        top: 0;
        left: 50%;
        width: 100%;
        transform: translate(-50%, 0);
    }

    .container svg {
        width: 100%;
        position: absolute;
        top: 0;
        left: 0;
        pointer-events: none;
        z-index: -1;
    }

    .container svg path {
        transition: fill 0.5s;
    }
</style>
