<script>
    import Header from "$lib/components/Header.svelte";
    import Parallax from "$lib/components/Parallax.svelte";
    import ScrollDown from "$lib/components/ScrollDown.svelte";
    import Showcase from "$lib/components/Showcase.svelte";
    /** @type {{data: any}} */
    let { data } = $props();

    function handleAnchorClick(event) {
        const link = event.currentTarget;
        const anchorId = new URL(link.href).hash.replace("#", "");
        const anchor = document.getElementById(anchorId);
        window.scrollTo({
            behavior: "smooth",
            top: anchor.offsetTop,
        });
    }

    function preventDefault(fn) {
        return (event) => {
            event.preventDefault();
            fn(event);
        };
    }
</script>

<Header />
<Parallax {data} />
<a href="#showcase" onclick={preventDefault(handleAnchorClick)}>
    <ScrollDown text="Scroll down for projects" />
</a>
<div id="showcase">
    <Showcase />
</div>
