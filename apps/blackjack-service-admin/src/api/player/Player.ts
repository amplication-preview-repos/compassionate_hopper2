import { JsonValue } from "type-fest";
import { Game } from "../game/Game";

export type Player = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string | null;
  role?: "Option1" | null;
  hand: JsonValue;
  game?: Game | null;
};
