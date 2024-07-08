import { GameWhereUniqueInput } from "../game/GameWhereUniqueInput";

export type CardCreateInput = {
  value?: string | null;
  suit?: string | null;
  game?: GameWhereUniqueInput | null;
};
