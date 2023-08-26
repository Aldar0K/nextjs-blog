import { LotrCard, LotrResponse } from "models/lotr";

// TODO move to const
export const BASE_URL = "https://the-one-api.dev/v2";
export const CHARACTERS_URL = `${BASE_URL}/character`;

export const getCards = async (name = ""): Promise<LotrCard[]> => {
  // TODO take as params
  const limit = 10;
  const sortBy = "name";
  const page = 1;

  const response = await fetch(
    `${CHARACTERS_URL}?name=/${name}/i&sort=${sortBy}:asc&limit=${limit}&page=${page}`,
    {
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization: "Bearer -GJagFSC2ClvFrwTKg3_",
      },
    }
  );

  if (response.status === 404) {
    throw new Error("Not found");
  }
  if (response.status === 401) {
    throw new Error("Not authorized");
  }
  if (response.status === 429) {
    throw new Error("Too Many Requests. Try again later");
  }

  const data = (await response.json()) as LotrResponse;
  return data.docs;
};
