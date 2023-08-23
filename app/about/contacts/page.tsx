import { Metadata } from "next";

import { siteTitle } from "const";

export const metadata: Metadata = {
  title: `Contacts | ${siteTitle}`,
  keywords: ["About"],
};

const Contacts = () => {
  return <h1>Contats</h1>;
};

export default Contacts;
