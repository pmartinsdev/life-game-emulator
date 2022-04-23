import { Property } from "@shared/modules/property/entities/Property";
import { Player } from "@shared/modules/player/entities/Player";

export interface CreateBoardDTO {
  player_ids: Player["id"][];
  building_ids: Property["id"][];
}