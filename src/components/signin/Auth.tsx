import LabelledInput from "../ui/LabelledInput";
import { signinEmailAtom, signinPasswordAtom } from "../../store/atoms";
import { Link } from "react-router-dom";
import { SignInSubmit } from "../ui/SubmitButton";

export const Auth = () => {
  return (
    <div className="h-screen flex flex-col justify-center">
      <div className="flex justify-center ">
        <div>
          <div className="text-3xl font-bold pb-5 text-center">
            Sign In to Your Account
          </div>
          <LabelledInput
            label="Email"
            placeholder="teamapp.dev@team.com"
            atomName={signinEmailAtom}
          />
          <LabelledInput
            type="password"
            label="Password"
            placeholder="Axbcy!Z@2134"
            atomName={signinPasswordAtom}
          />
          <SignInSubmit />

          <div className="text-state-200 text-center">
            Don't have an Account?
            <Link to={"/signup"} className="pl-2 underline">
              Sign up
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
