<script context="module">
    import clocks from '$lib/clocks'
	/**
	 * @type {import('@sveltejs/kit').Load}
	 */
	export async function load({ page }) {

        const Clock = clocks[page.params.clockSlug]

		if (Clock) {
			return {
				props: {
					Clock,
				}
			};
		}

		return {
			status: 404,
			error: new Error(`Could not find Clock ${page.params.clockSlug}`)
		};
	}
</script>

<script lang="typescript">
    import { onMount } from 'svelte';
    export let Clock;
    let time: Date = new Date();
    const checkTime = () => {
        time = new Date()
    }
    onMount(() => {
        setInterval(checkTime, 60000)
    });

</script>
<svelte:component time={time} this={Clock}/>
