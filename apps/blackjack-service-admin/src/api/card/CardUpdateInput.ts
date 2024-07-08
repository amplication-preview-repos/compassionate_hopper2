import { GameWhereUniqueInput } from "../game/GameWhereUniqueInput";

export type CardUpdateInput = {
  value?: string | null;
  suit?: string | null;
  game?: GameWhereUniqueInput | null;
};
