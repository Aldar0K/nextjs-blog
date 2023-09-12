import fsp from "fs/promises";
import matter from "gray-matter";
import path from "path";

const postsDirectory = path.join(process.cwd(), "posts");

export const getSortedPostsData = async (): Promise<
  {
    date: string;
    title: string;
    id: string;
  }[]
> => {
  // Get file names under /posts
  const fileNames = await fsp.readdir(postsDirectory);
  const allPostsData = await Promise.all(
    fileNames.map(async (fileName) => {
      // Remove ".md" from file name to get id
      const id = fileName.replace(/\.md$/, "");

      // Read markdown file as string
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = await fsp.readFile(fullPath, "utf8");

      // Use gray-matter to parse the post metadata section
      const matterResult = matter(fileContents);

      // Combine the data with the id
      return {
        id,
        ...(matterResult.data as { date: string; title: string }),
      };
    })
  );

  // Sort posts by date
  const sortedPostsData = allPostsData.sort((a, b) => {
    // Convert date strings to Date objects for comparison
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);

    // Sort in descending order (latest date first)
    return dateB.getTime() - dateA.getTime();
  });

  return sortedPostsData;
};
