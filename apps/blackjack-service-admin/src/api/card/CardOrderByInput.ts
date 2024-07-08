import { SortOrder } from "../../util/SortOrder";

export type CardOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  value?: SortOrder;
  suit?: SortOrder;
  gameId?: SortOrder;
};
