import { JsonValue } from "type-fest";
import { Player } from "../player/Player";
import { Card } from "../card/Card";

export type Game = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  status?: "Option1" | null;
  deck: JsonValue;
  currentTurn: string | null;
  players?: Array<Player>;
  cards?: Array<Card>;
};
