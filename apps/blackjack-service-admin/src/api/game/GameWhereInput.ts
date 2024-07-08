import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { PlayerListRelationFilter } from "../player/PlayerListRelationFilter";
import { CardListRelationFilter } from "../card/CardListRelationFilter";

export type GameWhereInput = {
  id?: StringFilter;
  status?: "Option1";
  deck?: JsonFilter;
  currentTurn?: StringNullableFilter;
  players?: PlayerListRelationFilter;
  cards?: CardListRelationFilter;
};
