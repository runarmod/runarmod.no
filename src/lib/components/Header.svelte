<script>
    import LogoLink from "$lib/components/LogoLink.svelte";
    import { links } from "$lib/consts.js";
</script>

<div class="container">
    <h1>Runar Saur Modahl</h1>
    <h2>M.Sc. Computer Science at NTNU</h2>
    <div class="links">
        {#each links as info}
            <LogoLink {...info} />
        {/each}
    </div>
</div>

<style>
    h1,
    h2 {
        text-align: center;
    }

    h1 {
        font-size: 3em;
        color: var(--accent);
    }

    h2 {
        font-size: 1.5em;
        color: var(--text);
    }

    .container {
        max-width: 1200px;
        margin: 0 auto;
        --clearing-top: 10vh;
        margin-top: var(--clearing-top);
        height: calc(100vh - var(--clearing-top));
    }

    .container .links {
        display: flex;
        justify-content: center;
    }
</style>
