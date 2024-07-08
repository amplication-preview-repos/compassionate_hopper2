import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { GameWhereUniqueInput } from "../game/GameWhereUniqueInput";

export type CardWhereInput = {
  id?: StringFilter;
  value?: StringNullableFilter;
  suit?: StringNullableFilter;
  game?: GameWhereUniqueInput;
};
