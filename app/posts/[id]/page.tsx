import { Metadata, ResolvingMetadata } from "next";

import { siteTitle } from "const";
import { getPostData } from "lib";
import utilStyles from "styles/utils.module.css";

import { DateComponent } from "componets";

type PostProps = {
  params: {
    id: string;
  };
};

export const generateMetadata = async (
  { params }: PostProps,
  parent: ResolvingMetadata
): Promise<Metadata> => {
  const postData = await getPostData(params.id);

  return {
    title: `${postData.title} | Posts | ${siteTitle}`,
  };
};

const Post = async ({ params }: PostProps) => {
  const postData = await getPostData(params.id);

  return (
    <article>
      <h1 className={utilStyles.headingXl}>{postData.title}</h1>
      <div className={utilStyles.lightText}>
        <DateComponent dateString={postData.date} />
      </div>
      <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
    </article>
  );
};

export default Post;
