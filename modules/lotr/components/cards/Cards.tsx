"use client";

import { Metadata } from "next";
import { FC } from "react";
import useSWR from "swr";

import { getCardsByName } from "api/lotr";
import { siteTitle } from "const";
import { LotrStore } from "store/lotr";
import utilStyles from "styles/utils.module.css";

export const metadata: Metadata = {
  title: `The Lord of the Rings | ${siteTitle}`,
  keywords: ["lotr", "LOTR", "The Lord of the Rings"],
};

const selector = (state: LotrStore) => ({
  cards: state.cards,
  loading: state.loading,
  getAllCards: state.getAllCards,
});

const Cards: FC = () => {
  const { data: cards, isLoading } = useSWR(
    "lotr/cards",
    async () => await getCardsByName("")
  );

  return (
    <section className={utilStyles.headingMd}>
      <h2 className={utilStyles.headingLg}>Cards:</h2>

      {isLoading ? (
        <h2>Loading...</h2>
      ) : (
        <>
          {cards ? (
            <ul className={utilStyles.list}>
              {cards.map((card) => (
                <li key={card._id}>{card.name}</li>
              ))}
            </ul>
          ) : (
            <h2>Can't fetch cards</h2>
          )}
        </>
      )}
    </section>
  );
};

export default Cards;
