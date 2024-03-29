import fs from "fs";
import path from "path";

const postsDirectory = path.join(process.cwd(), "posts");

export const getAllPostIds = (): {
  params: {
    id: string;
  };
}[] => {
  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.md$/, ""),
      },
    };
  });
};
