<script>
    export let data;

    import Header from "$lib/components/Header.svelte";
    import Parallax from "$lib/components/Parallax.svelte";
    import ScrollDown from "$lib/components/ScrollDown.svelte";
    import Showcase from "$lib/components/Showcase.svelte";
    import { onMount } from "svelte";

    onMount(() => {
        if (browser) {
            if (localStorage.getItem("theme") === "light") {
                theme.set("light");
            } else {
                theme.set("dark");
            }
        }
    });

    function handleAnchorClick(event) {
        const link = event.currentTarget;
        const anchorId = new URL(link.href).hash.replace("#", "");
        const anchor = document.getElementById(anchorId);
        window.scrollTo({
            behavior: "smooth",
            top: anchor.offsetTop,
        });
    }
</script>

<Header />
<Parallax {data} />
<a href="#showcase" on:click|preventDefault={handleAnchorClick}>
    <ScrollDown text="Scroll down for projects" />
</a>
<div id="showcase">
    <Showcase />
</div>
