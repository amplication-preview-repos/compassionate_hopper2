import { InputJsonValue } from "../../types";
import { PlayerUpdateManyWithoutGamesInput } from "./PlayerUpdateManyWithoutGamesInput";
import { CardUpdateManyWithoutGamesInput } from "./CardUpdateManyWithoutGamesInput";

export type GameUpdateInput = {
  status?: "Option1" | null;
  deck?: InputJsonValue;
  currentTurn?: string | null;
  players?: PlayerUpdateManyWithoutGamesInput;
  cards?: CardUpdateManyWithoutGamesInput;
};
