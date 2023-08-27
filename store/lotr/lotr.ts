import { create } from "zustand";

import { getCardsByName } from "api/lotr";
import { LotrCard } from "models/lotr";

export type LotrStore = {
  cards: LotrCard[];
  loading: boolean;
  getAllCards: () => Promise<void>;
  getCardsBySearch: (value: string) => Promise<void>;
};

export const useLotrStore = create<LotrStore>((set) => ({
  cards: [],
  loading: false,
  getAllCards: async () => {
    set({ loading: true });
    const cards = await getCardsByName();
    set({ cards, loading: false });
  },
  getCardsBySearch: async (value: string) => {
    set({ loading: true });
    const cards = await getCardsByName(value);
    set({ cards, loading: false });
  },
}));
