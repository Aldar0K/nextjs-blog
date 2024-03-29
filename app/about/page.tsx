import { Metadata } from "next";

import { siteTitle } from "const";

export const metadata: Metadata = {
  title: `About | ${siteTitle}`,
  keywords: ["About"],
};

const About = () => {
  return <h2>Select subitem</h2>;
};

export default About;
