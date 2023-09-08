"use client";

import { signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";
import { FC } from "react";

const GoogleButton: FC = () => {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "/profile";

  return (
    <button type="button" onClick={() => signIn("google", { callbackUrl })}>
      Sign In with Google
    </button>
  );
};

export default GoogleButton;
