<script lang="typescript">
    import clocks from '$lib/clocks';
    $: clockSlugs = Object.keys(clocks);
</script>

{#each clockSlugs as clockSlug}
<a href="/{clockSlug}">{clockSlug}</a>
{/each}