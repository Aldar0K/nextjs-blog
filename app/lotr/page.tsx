import { Metadata } from "next";

import { getCards } from "api/lotr";
import { siteTitle } from "const";
import utilStyles from "styles/utils.module.css";

export const metadata: Metadata = {
  title: `The Lord of the Rings | ${siteTitle}`,
  keywords: ["lotr", "LOTR", "The Lord of the Rings"],
};

const Lotr = async () => {
  const cards = await getCards();

  return (
    <>
      <h2 className={utilStyles.headingLg}>The Lord of the Rings</h2>

      <section className={utilStyles.headingMd}>
        <ul className={utilStyles.list}>
          {cards.map((card) => (
            <li key={card._id}>{card.name}</li>
          ))}
        </ul>
      </section>
    </>
  );
};

export default Lotr;
