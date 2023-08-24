import Link from "next/link";
import { ReactNode } from "react";

type AboutLayoutProps = {
  children: ReactNode;
};

export default function AboutLayout({ children }: AboutLayoutProps) {
  return (
    <div>
      <h1>About me</h1>

      <ul>
        <li>
          <Link href="/about/contacts">Contacts</Link>
        </li>
        <li>
          <Link href="/about/team">Team</Link>
        </li>
      </ul>

      {children}
    </div>
  );
}
