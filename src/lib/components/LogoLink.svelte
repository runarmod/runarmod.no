<script>
    import { secondary } from "$lib/consts.js";
    export let url;
    export let image;
    export let name;
</script>

<a href={url}>
    <img src={image} alt={name} background-color={secondary} />
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
