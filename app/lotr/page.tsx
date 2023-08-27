import { Metadata } from "next";

import { siteTitle } from "const";
import utilStyles from "styles/utils.module.css";

import { Cards, SearchCards } from "modules/lotr/components";

export const metadata: Metadata = {
  title: `The Lord of the Rings | ${siteTitle}`,
  keywords: ["lotr", "LOTR", "The Lord of the Rings"],
};

const Lotr = async () => {
  return (
    <>
      <h2 className={utilStyles.headingLg}>The Lord of the Rings</h2>
      <SearchCards />
      <Cards />
    </>
  );
};

export default Lotr;
