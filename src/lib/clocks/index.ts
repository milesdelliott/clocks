import type { SvelteComponent } from 'svelte';
import Lumen from './lumen.svelte'
import Blumen from './blumen.svelte'


const clocks : Record<string, typeof SvelteComponent> = {
    lumen: Lumen,
    blumen: Blumen,
}

export default clocks;