<script lang="typescript">
    import getProgress from '$lib/getProgress'
    import hourNumbers from '$lib/hourNumbers'
    export let time : Date = new Date();
    $: progress = getProgress(time);
    $: handAngle = makeHandAngle(progress.minutes)
    $: wedgeCoordinates = makeWedgeCoordinates(progress.period)
    const polarToCartesian = ([distance, radians]) => [distance * Math.cos(radians), distance * Math.sin(radians)]
    const makeNumberCoords = (i : number) => (polarToCartesian([15, (i - 2) * 0.523599]) )
    const makeHandAngle = (periodProgress : number) => [polarToCartesian([5, (periodProgress - 0.25) * 6.2839]), polarToCartesian([12, (periodProgress - 0.25) * 6.2839])]
    const makeWedgeCoordinates = (periodProgress : number) => [polarToCartesian([20, (periodProgress - 0.2) * 6.2839]), polarToCartesian([20, (periodProgress - 0.3) * 6.2839])]
</script>
<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="-1 -1 52 52">
    <defs>
        <filter id="neon"  y="-90%" height="290%"  x="-60%" width="220%">
        <feGaussianBlur in="SourceGraphic" stdDeviation="1" result="blurTight"/>
            <feMerge>
                <feMergeNode in="blurTight"/>
                <feMergeNode in="SourceGraphic" />
            </feMerge>
        </filter>
    </defs>
    <clipPath id="circle">
        <circle cx="25" cy="25" r="18" />
    </clipPath>
    <circle cx="25" cy="25" r="18" />
    <circle class="container" cx="25" cy="25" r="19" />
    <path  class="hand" filter="url(#neon)" d="M {handAngle[0][0] + 25} {handAngle[0][1] + 25} L {handAngle[1][0] + 25} {handAngle[1][1] + 25}" />
    <path clip-path="url(#circle)" class="wedge" filter="url(#neon)" d="M 25 25 L {wedgeCoordinates[0][0] + 25} {wedgeCoordinates[0][1] + 25} L {wedgeCoordinates[1][0] + 25} {wedgeCoordinates[1][1] + 25} z" />
    <circle cx="25" cy="25" r="1" />
    {#each hourNumbers as hourNumber, i }
    <text x="{makeNumberCoords(i)[0] + 25}" y={makeNumberCoords(i)[1] + 25}>{hourNumber}</text>
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
            fill: black;
            font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
            font-weight: 900;
            text-anchor: middle;
        }
        .hand {
            stroke: white;
            fill: none;
            stroke-width:0.5;
        }
        .container {
            stroke: black;
            fill: #00000033;
            stroke-width:0.5;
        }
        .wedge {
            fill: white;
        }
    </style>
