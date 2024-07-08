import { InputJsonValue } from "../../types";
import { PlayerCreateNestedManyWithoutGamesInput } from "./PlayerCreateNestedManyWithoutGamesInput";
import { CardCreateNestedManyWithoutGamesInput } from "./CardCreateNestedManyWithoutGamesInput";

export type GameCreateInput = {
  status?: "Option1" | null;
  deck?: InputJsonValue;
  currentTurn?: string | null;
  players?: PlayerCreateNestedManyWithoutGamesInput;
  cards?: CardCreateNestedManyWithoutGamesInput;
};
