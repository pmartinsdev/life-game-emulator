import { Player } from "@modules/player/entities/Player";

import { CreatePropertyDTO } from "../dtos/create-property";

export class Property {
  id: number;
  name: string;
  sale_cost: number;
  rent_cost: number;
  owner?: Player["name"];

  constructor(data: CreatePropertyDTO) {
    Object.assign(this, data);
  }
}
