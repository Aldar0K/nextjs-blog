"use client";

import { FC, FormEventHandler, useState } from "react";
import useSWR from "swr";

import { getCardsByName } from "api/lotr";

const SearchCards: FC = () => {
  const { mutate } = useSWR("lotr/cards");
  const [search, setSearch] = useState("");

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();

    const cards = await getCardsByName(search);
    mutate(cards);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="search"
        placeholder="search"
        value={search}
        onChange={(event) => setSearch(event.target.value)}
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchCards;
