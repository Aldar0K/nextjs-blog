import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";
import Head from "next/head";

import { getAllPostIds, getPostData } from "lib";
import utilStyles from "styles/utils.module.css";

import { DateComponent } from "componets";
import { Layout } from "layouts";

type Params = {
  id: string;
};

export const getStaticPaths: GetStaticPaths<Params> = async () => {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false, // false or "blocking"
  };
};

type Props = {
  postData: {
    id: string;
    title: string;
    date: string;
    contentHtml: string;
  };
};

export const getStaticProps: GetStaticProps<Props, Params> = async (
  context
) => {
  // const id = context.params.id;
  const id = "";
  const postData = await getPostData(id);
  return {
    props: {
      postData,
    },
  };
};

const Post = ({ postData }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>

      <article>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <div className={utilStyles.lightText}>
          <DateComponent dateString={postData.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </Layout>
  );
};

export default Post;
