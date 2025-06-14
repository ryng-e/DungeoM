export interface Enemy {
  name: string;
  level: number;
  img: string;
  speed: number;
}

export type State = 'start' | 'playerTurn' | 'enemyTurn' | 'roomCompleted' | 'won' | 'lost';

export type Tile = null | Enemy;