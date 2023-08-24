"use client";

import utilStyles from "styles/utils.module.css";

const PostsError = ({ error }: { error: Error }) => {
  return <h1 className={utilStyles.heading2Xl}>Error! ({error.message})</h1>;
};

export default PostsError;
