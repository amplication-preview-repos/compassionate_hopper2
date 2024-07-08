import { SortOrder } from "../../util/SortOrder";

export type GameOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  status?: SortOrder;
  deck?: SortOrder;
  currentTurn?: SortOrder;
};