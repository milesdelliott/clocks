<script lang="typescript">
    import get12Hour from '$lib/get12Hour'
    import hourNumbers from '$lib/hourNumbers'
    export let time : Date;
    $: hour = time.getHours();
    $: minute = time.getMinutes();
    $: height = (((get12Hour(hour) * 60 + minute) / 720) * 50) - 6
</script>
<p>{get12Hour(hour)}:{minute}</p>
<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="-1 -1 12 52">
    <defs>
        <filter id="neon"  y="-90%" height="290%"  x="-60%" width="220%">
        <feGaussianBlur in="SourceGraphic" stdDeviation="1" result="blurTight"/>
            <feMerge>
                <feMergeNode in="blurTight"/>
                <feMergeNode in="SourceGraphic" />
            </feMerge>
        </filter>
        </defs>
    
    <rect class="container" height="50" width="10" x="0" y="0" />
    <path  class="highlight" d="M 11 -1 h -12 v 52" />
    <path  class="highlight" d="M 10 0 v 50 h -10" />
    <path  class="reflection" d="M -0.4 {height - 2.5} v 10" />
    <path  class="reflection" d="M 10.4 {height - 2.5} v 10" />
    <path  class="reflection" d="M -0.4 {((minute/60) * 50) - 0.75} v 3" />
    <path  class="reflection" d="M 10.4 {((minute/60) * 50) - 0.75} v 3" />
    <rect  filter="url(#neon)" class="marker" width="10" height="1" x="0" y={(minute/60) * 50} />
    <rect  filter="url(#neon)" class="hour" width="10" height="5" x="0" y={height} />
    {#each hourNumbers as hourNumber, i }
     <text x="5" y={hourNumber * 4}>{hourNumber}</text>
    {/each}
    </svg>
    <style>
        :global(body){
            background: radial-gradient(#221, #111);
            height: 100vh;
            width: 100vw;
            margin: 0;
        }
        svg {
            max-height: 100vh;
            height: 70%;
            left: 50%;
            top: 50%;
            position: absolute;
            transform: translate(-50%, -50%);
        }
        text {
            font-size: 3px;
            font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
            font-weight: 900;
            text-anchor: middle;
        }
        .container {
            stroke: black;
            fill: black;
            stroke-width: 2;
        }
        .highlight {
            stroke: rgb(131, 22, 134);
            fill: none;
            stroke-width: 0.15;
            opacity: 0.4;
        }
        .reflection {
            stroke:white;
            fill: none;
            stroke-width: 0.5;
            opacity: 0.1;
            filter: blur(0.1px);
        }
        .marker {
            fill: white;
        }
        .hour {
            fill: white;
        }
    </style>
