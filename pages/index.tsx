import Head from "next/head";

import utilStyles from "styles/utils.module.css";

import { Layout, siteTitle } from "layouts";

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p className="text-red-50">
          Hello, I'm Aldar. I'm a frontend developer. You can contact me (no)
        </p>
        <p>
          (This is a sample website - you’ll be building a site like this on{" "}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  );
}
