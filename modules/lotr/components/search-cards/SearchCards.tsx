"use client";

import { FC, FormEventHandler, useState } from "react";

import { useCardsQuery } from "modules/lotr/hooks";

const SearchCards: FC = () => {
  const [search, setSearch] = useState("");
  const { mutate, isValidating, isLoading } = useCardsQuery(search);

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();
    mutate();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        id="search"
        type="search"
        placeholder="search"
        value={search}
        onChange={(event) => setSearch(event.target.value)}
      />
      <button type="submit" disabled={isValidating || isLoading}>
        Search
      </button>
    </form>
  );
};

export default SearchCards;
