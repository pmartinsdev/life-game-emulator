import { PlayerCategory } from "@modules/category/modules/player-category/entities/PlayerCategory";

import { DEFAULT_PLAYER_BALANCE } from "@shared/constants/default-player-balance";

export class Player {
  id: string;
  balance: number;

  category: PlayerCategory | null = null;

  constructor(public name: string) {
    this.balance = DEFAULT_PLAYER_BALANCE;
  }
}
