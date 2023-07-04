<script>
    import ShowcaseElement from "$lib/components/ShowcaseElement.svelte";
    import { projects } from "$lib/projects.js";
</script>

<div class="container">
    {#each projects as project}
        <ShowcaseElement {...project} />
    {/each}
</div>

<style>
    .container {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: space-evenly;
        gap: 30px;
        margin: 0 auto;
        width: 100%;
        max-width: 1200px;
        margin-top: 70vh;
    }
</style>
