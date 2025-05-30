<script>
    import ThemeSwitch from "$lib/components/ThemeSwitch.svelte";
    /** @type {{children?: import('svelte').Snippet}} */
    let { children } = $props();
</script>

<ThemeSwitch />
{@render children?.()}
