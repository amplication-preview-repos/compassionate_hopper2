import { InputJsonValue } from "../../types";
import { GameWhereUniqueInput } from "../game/GameWhereUniqueInput";

export type PlayerUpdateInput = {
  name?: string | null;
  role?: "Option1" | null;
  hand?: InputJsonValue;
  game?: GameWhereUniqueInput | null;
};
