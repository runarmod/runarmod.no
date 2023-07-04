<script>
    let scrollY;
    let indexes = [0, 1, 2, 3, 4, 5];
    $: console.log(scrollY);
</script>

<svelte:window bind:scrollY />

<div class="container">
    {#if scrollY < 660}
        {#each indexes as i}
            <img
                src="/images/parallax/parallax{i}.svg"
                alt="Image {i}"
                style="transform: translate(0, {(-scrollY * (i + 1)) / 5}px);"
                draggable="false"
            />
        {/each}
    {/if}
</div>

<style>
    .container {
        position: fixed;
        top: 40%;
        left: 50%;
        width: 100%;
        transform: translate(-50%, 0);
        z-index: -1;
    }

    .container img {
        width: 100%;
        position: absolute;
        top: 0;
        left: 0;
        pointer-events: none;
    }

    .container img:last-child::after {
        content: "";
        position: absolute;
        border: 1px solid red;
        width: 100%;
        height: 100%;
        background-color: #01051e;
    }
</style>
