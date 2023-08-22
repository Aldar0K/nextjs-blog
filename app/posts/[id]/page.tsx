type PostProps = {
  params: {
    id: string;
  };
};

const Post = ({ params }: PostProps) => {
  return <h1>About page {params.id}</h1>;
};

export default Post;
