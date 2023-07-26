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
    })
</script>

<Header />
<Parallax {data} />
<ScrollDown text="Scroll down for projects" />
<Showcase />
