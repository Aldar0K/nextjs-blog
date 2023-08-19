import { GetStaticProps } from "next";
import Head from "next/head";

import { getSortedPostsData } from "lib";
import utilStyles from "styles/utils.module.css";

import { Layout, siteTitle } from "layouts";

type HomeProps = {
  allPostsData: {
    date: string;
    title: string;
    id: string;
  }[];
};

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
};

// export const getServerSideProps: GetServerSideProps = async (context) => {
//   return {
//     props: {
//        props for your component
//     },
//   };
// }

const Home = ({ allPostsData }: HomeProps) => {
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
          (This is a sample website - you'll be building a site like this on{" "}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>

      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              {title}
              <br />
              {id}
              <br />
              {date}
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
};

export default Home;
