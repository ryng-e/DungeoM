<script lang="ts">

    import { playerEmoji } from "$lib/game/emoji";
    import { bestiary } from "$lib/game/bestiary";
    import type { State, Tile } from "$lib/game/types";

    import { createGrid } from "$lib/game/function/createGrid";
    import { populateGrid } from "$lib/game/function/populateGrid";
    import { display } from "$lib/game/function/display"

    import Rand, { PRNG } from 'rand-seed';

    let gameState: State = 'start';
    let seed: number = 0;
    const rand = new Rand(seed.toString());

    let enemies: number = 0;
    let maxEnemies: number = 1;

    let gridSize: number = 6;
    let grid: Tile[][] = createGrid(gridSize);

    populateGrid(grid, gridSize, enemies, maxEnemies, rand);

</script>

{#if gameState === 'start'}
    <button on:click={() => gameState = 'playing'}>PlaY</button>
{/if}

{#if gameState === 'playing'}
    <div class="blocks">
        {#each grid as row, blockIndex}
            {#each row as tile}
                <div class="flex justify-around flex-wrap">
                    <div>{display(tile)}</div>
                </div>
            {/each}
            <br>
        {/each}
    </div>
{/if}