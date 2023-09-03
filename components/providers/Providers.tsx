"use client";

import { SessionProvider } from "next-auth/react";
import { FC, ReactNode } from "react";

type ProvidersProps = {
  children: ReactNode;
};

const Providers: FC<ProvidersProps> = ({ children }) => {
  return <SessionProvider>{children}</SessionProvider>;
};

export default Providers;
