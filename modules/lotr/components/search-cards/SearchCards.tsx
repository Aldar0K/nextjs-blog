"use client";

import { FC, FormEventHandler, useState } from "react";

import { useCardsQuery } from "modules/lotr/hooks";

const SearchCards: FC = () => {
  const [search, setSearch] = useState("");
  const { mutate } = useCardsQuery(search);

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();
    mutate();
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
