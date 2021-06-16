<script lang="typescript">
    import { onMount } from 'svelte';
    import Lumen from './c/lumen.svelte'
    let time: Date = new Date();
    const checkTime = () => {
        time = new Date()
    }
    onMount(() => {
        setInterval(checkTime, 60000)
    });

</script>
<h1>Clocks</h1>
<Lumen time={time} />
