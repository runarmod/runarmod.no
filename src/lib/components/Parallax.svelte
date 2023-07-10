<script>
    import { onMount } from "svelte";
    import { tweened } from "svelte/motion";
    import { sineInOut } from "svelte/easing";
    import { API_URL } from "$lib/consts.js";

    let scrollY;

    let backup_indexes = [0, 1, 2, 3, 4, 5];

    let paths = [];
    let outerWidth = 1920;
    let outerHeight = 1080;

    async function getImages() {
        const res = await fetch(
            `${API_URL}waves?layers=6&points=6&wonkyness=3&start_y=0.5&end_y=0.8&format=json`
        );

        paths = await res.json();
    }

    const opacity = tweened(0, {
        duration: 1500,
        easing: sineInOut,
    });

    onMount(() => {
        opacity.set(1);
    });
</script>

<svelte:window bind:scrollY bind:outerWidth bind:outerHeight />

<div class="container">
    {#await getImages() then}
        {#each paths as path, i}
            {@const new_y = (-scrollY * (i + 1)) / paths.length}
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width={outerWidth}
                height={outerHeight}
                style="transform: translate(0, {new_y}px); opacity: {$opacity};"
            >
                <path
                    fill={path.color}
                    d={path.path}
                    transform="scale({outerWidth}, {outerHeight})"
                />
            </svg>
        {/each}
    {:catch}
        {#each backup_indexes as i}
            {@const new_y = (-scrollY * (i + 1)) / 6}
            <img
                src="/images/parallax/parallax{i}.svg"
                alt="Image {i}"
                style="transform: translate(0, {new_y}px); opacity: {$opacity};"
                draggable="false"
            />
        {/each}
    {/await}
</div>

<style>
    .container {
        position: fixed;
        top: 0;
        left: 50%;
        width: 100%;
        transform: translate(-50%, 0);
    }

    .container svg,
    .container img {
        width: 100%;
        position: absolute;
        top: 0;
        left: 0;
        pointer-events: none;
        z-index: -1;
    }
</style>
