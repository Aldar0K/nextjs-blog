import { Metadata } from "next";
import Link from "next/link";
import { ReactNode } from "react";

import { authorName, siteTitle } from "const";
import "styles/main.css";
import styles from "./layout.module.css";

import { Header } from "components";

export const metadata: Metadata = {
  title: siteTitle,
  description: siteTitle,
  keywords: ["Aldar", "Okonov", "Blog"],
};

type RootLayoutProps = {
  children: ReactNode;
  home: boolean;
};

export default function RootLayout({
  children,
  home = false,
}: RootLayoutProps) {
  return (
    <html lang="en">
      <body className="body">
        <div className={styles.container}>
          <Header name={authorName} home={home} />
          <main>{children}</main>
          {!home && (
            <div className={styles.backToHome}>
              <Link href="/">← Back to home</Link>
            </div>
          )}
        </div>
      </body>
    </html>
  );
}
