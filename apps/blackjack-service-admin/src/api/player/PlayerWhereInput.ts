import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { GameWhereUniqueInput } from "../game/GameWhereUniqueInput";

export type PlayerWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  role?: "Option1";
  hand?: JsonFilter;
  game?: GameWhereUniqueInput;
};
