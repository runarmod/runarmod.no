<script>
    import LogoLink from "$lib/components/LogoLink.svelte";
    import github from "$lib/images/github.svg";
    import linkedin from "$lib/images/linkedin.svg";

    const links = [
        {
            name: "Github",
            url: "https://github.com/runarmod",
            image: github,
        },
        {
            name: "LinkedIn",
            url: "https://www.linkedin.com/in/runar-saur-modahl-068827202",
            image: linkedin,
        },
    ];
</script>

<div class="container">
    <h1>Runar Saur Modahl</h1>
    <h3>M.Sc. Computer Science at NTNU</h3>
    <div class="links">
        {#each links as info}
            <LogoLink {...info} />
        {/each}
    </div>
</div>

<style>
    h1,
    h3 {
        text-align: center;
    }

    h1 {
        font-size: 3em;
        color: #c62368;
    }

    h3 {
        font-size: 1.5em;
        color: #eceaea;
    }

    .container {
        max-width: 60vw;
        margin: 0 auto;
        margin-top: 10vh;
    }

    .container .links {
        display: flex;
        justify-content: center;
    }
</style>
