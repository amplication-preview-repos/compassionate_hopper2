import { Game } from "../game/Game";

export type Card = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  value: string | null;
  suit: string | null;
  game?: Game | null;
};
