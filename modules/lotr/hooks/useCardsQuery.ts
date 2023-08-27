import useSWR from "swr";

import { getCardsByName } from "api/lotr";

export const useCardsQuery = (search = "") => {
  return useSWR("lotr/cards", async () => await getCardsByName(search));
};
