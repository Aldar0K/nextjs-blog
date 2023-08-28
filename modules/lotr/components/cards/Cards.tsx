"use client";

import { Metadata } from "next";
import { FC } from "react";

import { siteTitle } from "const";
import { useCardsQuery } from "modules/lotr/hooks";
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
  const { data: cards, isLoading, isValidating, error } = useCardsQuery();

  return (
    <section className={utilStyles.headingMd}>
      <h2 className={utilStyles.headingLg}>Cards:</h2>

      {isLoading || isValidating ? (
        <h2>Loading...</h2>
      ) : (
        <>
          {!!error ? (
            <h2>Error(error)</h2>
          ) : (
            <>
              {!!cards?.length ? (
                <ul className={utilStyles.list}>
                  {cards.map((card) => (
                    <li key={card._id}>{card.name}</li>
                  ))}
                </ul>
              ) : (
                <h2>No cards</h2>
              )}
            </>
          )}
        </>
      )}
    </section>
  );
};

export default Cards;
