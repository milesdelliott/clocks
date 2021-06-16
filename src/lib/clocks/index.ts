import type { SvelteComponent } from 'svelte';
import Lumen from './lumen.svelte'


const clocks : Record<string, typeof SvelteComponent> = {
    lumen: Lumen
}

export default clocks;