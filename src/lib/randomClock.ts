import randomProperty from '$lib/randomProperty'
import clocks from '$lib/clocks'
import type { SvelteComponent } from 'svelte';

const randomClock : () => typeof SvelteComponent = () => {
    return <typeof SvelteComponent>randomProperty(clocks)
};

export default randomClock