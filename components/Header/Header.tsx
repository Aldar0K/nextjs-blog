import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

import utilStyles from "styles/utils.module.css";
import styles from "./Header.module.css";

type HeaderProps = {
  name: string;
  home?: boolean;
};

// TODO turn to client component, show active link (custom component?).
const Header: FC<HeaderProps> = ({ name, home = false }) => {
  return (
    <header className={styles.header}>
      <nav className="flex gap-[8px]">
        <Link href="/">Home</Link>
        <Link href="/posts">Posts</Link>
        <Link href="/about">About</Link>
      </nav>

      {home ? (
        <>
          <Image
            priority
            src="/images/profile.jpg"
            className={utilStyles.borderCircle}
            height={144}
            width={144}
            alt=""
          />
          <h1 className={utilStyles.heading2Xl}>{name}</h1>
        </>
      ) : (
        <>
          <Link href="/">
            <Image
              priority
              src="/images/profile.jpg"
              className={utilStyles.borderCircle}
              height={108}
              width={108}
              alt=""
            />
          </Link>
          <h2 className={utilStyles.headingLg}>
            <Link href="/" className={utilStyles.colorInherit}>
              {name}
            </Link>
          </h2>
        </>
      )}
    </header>
  );
};

export default Header;
