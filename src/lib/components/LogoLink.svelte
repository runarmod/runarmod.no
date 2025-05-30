<script>
    import { theme } from "$lib/stores.js";

    /** @type {{url: any, image: any, name: any}} */
    let { url, image, name } = $props();
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
        aspect-ratio: 1/1;
    }
</style>
