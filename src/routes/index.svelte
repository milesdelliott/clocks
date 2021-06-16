<script lang="typescript">
    import { onMount } from 'svelte';
    import randomClock from '$lib/randomClock'
    const Clock = randomClock()
    let time: Date = new Date();
    const checkTime = () => {
        time = new Date()
    }
    onMount(() => {
        setInterval(checkTime, 60000)
    });

</script>
<h1>Clocks</h1>
<svelte:component time={time} this={Clock}/>
