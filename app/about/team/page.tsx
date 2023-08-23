import { Metadata } from "next";

import { siteTitle } from "const";

export const metadata: Metadata = {
  title: `Team | ${siteTitle}`,
  keywords: ["About"],
};

const Team = () => {
  return <h1>Team</h1>;
};

export default Team;
