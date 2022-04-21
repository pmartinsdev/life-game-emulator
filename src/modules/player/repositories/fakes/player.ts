import { Player } from "@modules/player/entities/Player";
import { IncreasePlayerBalanceDTO } from "@modules/player/dtos/increase-player-balance";
import { CreatePlayerDTO } from "@modules/player/dtos/create-player";

import { PlayerRepositoryContract } from "../contract/player-repository";

export class FakePlayerRepository implements PlayerRepositoryContract {
  private players: Player[] = [];

  async create(data: CreatePlayerDTO): Promise<Player> {
    const createdPlayer = new Player(data.name);

    Object.assign(createdPlayer, {
      id: String(Date.now() * this.players.length + 1),
    });

    this.players.push(createdPlayer);

    return createdPlayer;
  }

  async findByPlayerName(name: Player["name"]): Promise<Player | undefined> {
    const lowerCaseName = name.toLocaleLowerCase();

    const foundPlayer = this.players.find(
      (data) => data.name.toLocaleLowerCase() === lowerCaseName
    );

    return foundPlayer;
  }

  async findById(playerID: Player["id"]): Promise<Player | undefined> {
    const foundPlayer = this.players.find((data) => data.id === playerID);

    return foundPlayer;
  }

  async updatePlayerBalance({
    player_id,
    value,
  }: IncreasePlayerBalanceDTO): Promise<Player> {
    const updatedPlayers = this.players.map((data) =>
      data.id === player_id ? { ...data, balance: data.balance + value } : data
    );

    this.players = updatedPlayers;

    const updatedPlayer = await this.findById(player_id);

    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    return updatedPlayer!;
  }
}