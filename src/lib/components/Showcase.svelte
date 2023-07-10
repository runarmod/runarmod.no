<script>
    import ShowcaseElement from "$lib/components/ShowcaseElement.svelte";
    import { projects } from "$lib/projects.js";
</script>

<div class="background">
    <div class="container">
        {#each projects as project}
            <ShowcaseElement {...project} />
        {/each}
    </div>
</div>

<style>
    .background {
        position: absolute;
        width: 100%;
        margin: 0;
        padding: 0;
        top: 100vh;
        left: 0;
        background-color: var(--background);
    }
    .container {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: space-evenly;
        gap: 30px;
        margin: 0 auto;
        width: 100%;
        max-width: 1200px;
    }
</style>
