"use client";

import { FC, FormEventHandler, useState } from "react";
import { useLotrStore } from "store";

const SearchCards: FC = () => {
  const [search, setSearch] = useState("");
  const getCardsBySearch = useLotrStore((state) => state.getCardsBySearch);

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();

    getCardsBySearch(search);
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
