import type { Tile } from "$lib/game/types";

export function createGrid(gridSize: number): Tile[][] {
    let blocks: Tile[][] = [];

    for(let i = 0; i < gridSize; i++) {
        let row: Tile[] = new Array(gridSize).fill(null);
        blocks.push(row);
    }

    return blocks;
}