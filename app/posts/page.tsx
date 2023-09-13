// (Static) automatically rendered as static HTML (uses no initial props)

import { Metadata } from "next";
import Link from "next/link";

import { siteTitle } from "const";
import { getSortedPostsData } from "lib";
import utilStyles from "styles/utils.module.css";

import { DateComponent } from "components";

export const metadata: Metadata = {
  title: `Posts | ${siteTitle}`,
  keywords: ["Posts", siteTitle],
};

// ISR revalidate time
export const revalidate = 10;

const Posts = async () => {
  const allPostsData = await getSortedPostsData();

  return (
    <>
      <section className={utilStyles.headingMd}>
        <p>
          Hello, I'm Aldar. I'm a frontend developer. You can contact me (no)
        </p>
        <p>
          (This is a sample website - you'll be building a site like this on{" "}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>

      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>{title}</Link>
              <br />
              <small className={utilStyles.lightText}>
                <DateComponent dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
};

export default Posts;
