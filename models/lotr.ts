export type LotrCard = {
  _id: string;
  height: string;
  race: string;
  gender: string;
  birth: string;
  spouse: string;
  death: string;
  realm: string;
  hair: string;
  name: string;
  wikiUrl: string;
};

export type LotrResponse = {
  docs: LotrCard[];
  total: number;
  limit: number;
  page: number;
  pages: number;
};
