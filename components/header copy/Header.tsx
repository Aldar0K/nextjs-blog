import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

import utilStyles from "styles/utils.module.css";
import { navItems } from "./const";

import { Navigation } from "components";

type HeaderProps = {
  name: string;
  home?: boolean;
};

const Header: FC<HeaderProps> = ({ name, home = false }) => {
  return (
    <header className="flex flex-col items-center bg-slate-200">
      <Navigation navItems={navItems} />

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
