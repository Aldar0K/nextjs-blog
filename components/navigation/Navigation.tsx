"use client";

import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FC } from "react";

import { NavItem } from "models";

type NavigationProps = {
  navItems: NavItem[];
};

const Navigation: FC<NavigationProps> = ({ navItems }) => {
  const pathname = usePathname();
  const session = useSession();

  const handleSignOut = () => {
    signOut({ callbackUrl: "/" });
  };

  return (
    <nav className="flex gap-[8px]">
      {navItems.map((navItem, index) => {
        const isActive =
          pathname === navItem.href ||
          (pathname.includes(navItem.href) && navItem.href !== "/");

        return (
          <Link
            key={index}
            href={navItem.href}
            className={isActive ? "text-blue-600 !no-underline" : ""}
          >
            {navItem.label}
          </Link>
        );
      })}

      {session.data && <Link href="/profile">Profile</Link>}

      {session.data ? (
        <Link href="#" onClick={handleSignOut}>
          Sign Out
        </Link>
      ) : (
        <Link href="/api/auth/signin">Sign In</Link>
      )}
    </nav>
  );
};

export default Navigation;
