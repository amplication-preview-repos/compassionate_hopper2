import { InputJsonValue } from "../../types";
import { GameWhereUniqueInput } from "../game/GameWhereUniqueInput";

export type PlayerCreateInput = {
  name?: string | null;
  role?: "Option1" | null;
  hand?: InputJsonValue;
  game?: GameWhereUniqueInput | null;
};
