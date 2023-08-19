import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";

import { Layout } from "layouts";
import { getAllPostIds, getPostData } from "lib";

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
  const id = context.params.id;
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
      {postData.title}
      <br />
      {postData.id}
      <br />
      {postData.date}
      <br />
      <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
    </Layout>
  );
};

export default Post;
