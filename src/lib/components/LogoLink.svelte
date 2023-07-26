<script>
    import { theme } from "$lib/stores.js";

    export let url;
    export let image;
    export let name;
</script>

<a href={url}>
    <img src={image} alt={name} class="{$theme} svgicon" />
</a>

<style>
    a {
        margin: 0 10px;
    }

    img {
        width: 24px;
        height: 24px;
    }
</style>
