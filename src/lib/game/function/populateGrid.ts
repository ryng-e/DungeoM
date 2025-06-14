import type { Tile } from "$lib/game/types";
import type Rand from "rand-seed";

import { bestiary } from '$lib/game/bestiary.js';

export function populateGrid(grid: Tile[][], gridSize: number, enemies: number, maxEnemies: number, rand: Rand): void {

    while(enemies < maxEnemies) {
        const randomPositionX = Math.floor(rand.next() * gridSize);
        const randomPositionY = Math.floor(rand.next() * gridSize);
        const randomEnemies: number = Math.floor(rand.next() * bestiary.length);

        grid[randomPositionY][randomPositionX] = bestiary[randomEnemies];
        enemies += 1;
    }

}