<script>
    import { browser } from "$app/environment";
    import { themeicons } from "$lib/consts.js";
    import { theme } from "$lib/stores.js";
    import { onMount } from "svelte";

    let src = themeicons[$theme].src;
    let alt = themeicons[$theme].alt;

    // Have to reject the first subscribe event because it's
    // triggered before on mount when the writable has the default
    // value, but we want to get the theme from localStorage
    let firstTime = true;
    theme.subscribe((value) => {
        if (!firstTime) {
            setTheme(value);
        }
        firstTime = false;
    });

    const setTheme = (value) => {
        src = themeicons[value].src;
        alt = themeicons[value].alt;

        let dark = value === "dark";
        if (browser) {
            if (dark) {
                document.documentElement.classList.add("dark");
            } else {
                document.documentElement.classList.remove("dark");
            }
            localStorage.setItem("theme", dark ? "dark" : "light");
        }
        theme.set(dark ? "dark" : "light");
    };

    const toggle = () => {
        theme.update((value) => (value === "dark" ? "light" : "dark"));
    };

    onMount(() => {
        if (browser) {
            if (localStorage.getItem("theme") === "light") {
                setTheme("light");
            } else {
                setTheme("dark");
            }
        }
    });
</script>

<button on:click={toggle}><img {src} {alt} class="{$theme} svgicon" /></button>

<style>
    button {
        position: absolute;
        top: 1rem;
        right: 1rem;
        background: none;
        border: none;
        cursor: pointer;
    }

    img {
        width: 50px;
        height: 50px;
        margin: 0;
        padding: 0;
    }
</style>
