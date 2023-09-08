import { GoogleButton, SignInForm } from "components";

const Signin = async () => {
  return (
    <div className="flex flex-col gap-4">
      <h1>Sign In</h1>
      <GoogleButton />
      <div>or</div>
      <SignInForm />
    </div>
  );
};

export default Signin;
