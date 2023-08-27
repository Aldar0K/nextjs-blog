"use client";

import { Metadata } from "next";
import { FC, useEffect } from "react";
import { shallow } from "zustand/shallow";

import { siteTitle } from "const";
import { LotrStore, useLotrStore } from "store/lotr";
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
  const { cards, loading, getAllCards } = useLotrStore(selector, shallow);

  useEffect(() => {
    getAllCards();
  }, []);

  return (
    <section className={utilStyles.headingMd}>
      <h2 className={utilStyles.headingLg}>Cards:</h2>

      {loading ? (
        <h2>Loading...</h2>
      ) : (
        <ul className={utilStyles.list}>
          {cards.map((card) => (
            <li key={card._id}>{card.name}</li>
          ))}
        </ul>
      )}
    </section>
  );
};

export default Cards;
