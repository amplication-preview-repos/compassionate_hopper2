import { Game as TGame } from "../api/game/Game";

export const GAME_TITLE_FIELD = "currentTurn";

export const GameTitle = (record: TGame): string => {
  return record.currentTurn?.toString() || String(record.id);
};
