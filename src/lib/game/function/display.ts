import type { Enemy, Tile } from "$lib/game/types";

export function display(tile: Tile) {
        if(tile != null) {
            return (tile as unknown as Enemy).img;
        } else {
            return ".";
        }
    }