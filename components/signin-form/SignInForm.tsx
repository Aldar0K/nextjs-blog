"use client";

import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { FC, FormEventHandler } from "react";

const SignInForm: FC = () => {
  const router = useRouter();

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    const response = await signIn("credentials", {
      email: formData.get("email"),
      password: formData.get("password"),
      redirect: false,
    });

    if (response && !response.error) {
      router.push("/profile");
    } else {
      console.log(response);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-2">
      <input type="email" name="email" required />
      <input type="password" name="password" required />
      <button type="submit">Sign In</button>
    </form>
  );
};

export default SignInForm;
