import { Card as TCard } from "../api/card/Card";

export const CARD_TITLE_FIELD = "value";

export const CardTitle = (record: TCard): string => {
  return record.value?.toString() || String(record.id);
};
