<script>
    import { browser } from "$app/environment";
    import { themeicons } from "$lib/consts.js";
    import { theme } from "../stores.js";
    import { onMount } from "svelte";

    let src = $state(themeicons[$theme].src);
    let alt = $state(themeicons[$theme].alt);

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

    $effect(() => {
        setTheme($theme);
    });
</script>

<button onclick={toggle}><img {src} {alt} class="{$theme} svgicon" /></button>

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
