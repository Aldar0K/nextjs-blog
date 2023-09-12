import fsp from "fs/promises";
import path from "path";

const postsDirectory = path.join(process.cwd(), "posts");

export const getAllPostIds = async (): Promise<
  {
    id: string;
  }[]
> => {
  const fileNames = await fsp.readdir(postsDirectory);
  return fileNames.map((fileName) => {
    return {
      id: fileName.replace(/\.md$/, ""),
    };
  });
};
