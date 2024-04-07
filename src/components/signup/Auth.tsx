import { Link } from "react-router-dom";
import {
  domainAtom,
  emailAtom,
  firstNameAtom,
  genderAtom,
  lastNameAtom,
  passwordAtom,
} from "../../store/atoms";
import GenderRadio from "../ui/GenderRadio";
import LabelledInput from "../ui/LabelledInput";
import { SignUpSubmit } from "../ui/SubmitButton";

export const Auth = () => {
  return (
    <div className="h-screen flex flex-col justify-center">
      <div className="flex justify-center ">
        <div className="">
          <div className="text-3xl font-bold pb-5 text-center">
            Create an Account
          </div>
          <div className="flex justify-between w-96">
            <LabelledInput
              label="First Name"
              placeholder="Arghya"
              atomName={firstNameAtom}
            />
            <LabelledInput
              label="Last Name"
              placeholder="Das"
              atomName={lastNameAtom}
            />
          </div>
          <LabelledInput
            label="Domain"
            placeholder="Fullstack Engineer"
            atomName={domainAtom}
          />
          <LabelledInput
            label="Email"
            placeholder="teamapp.dev@team.com"
            atomName={emailAtom}
          />
          <LabelledInput
            type="password"
            label="Password"
            placeholder="Axbcy!Z@2134"
            atomName={passwordAtom}
          />
          <GenderRadio atomName={genderAtom} />

          <SignUpSubmit />

          <div className="text-state-200 pt-1 text-center">
            Already have an Account?
            <Link to={"/signin"} className="pl-2 underline">
              Sign in
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
