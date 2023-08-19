import { GetStaticPaths, GetStaticProps } from "next";

import { getAllPostIds, getPostData } from "lib";

import { Layout } from "layouts";

export const getStaticPaths: GetStaticPaths = async () => {
  // Return a list of possible value for id
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  // Fetch necessary data for the blog post using params.id
  const postData = await getPostData(params?.id as string);
  return {
    props: {
      postData,
    },
  };
};

type PostProps = {
  postData: {
    id: string;
    title: string;
    contentHtml: string;
    date: string;
  };
};

const Post = ({ postData }: PostProps) => {
  return (
    <Layout>
      {postData.title}
      <br />
      {postData.id}
      <br />
      {postData.date}
    </Layout>
  );
};

export default Post;
