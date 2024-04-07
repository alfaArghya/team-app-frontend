import { useRecoilValue } from "recoil";
import { API_URL } from "../../config";
import axios from "axios";
import {
  domainAtom,
  emailAtom,
  firstNameAtom,
  genderAtom,
  lastNameAtom,
  passwordAtom,
  signinEmailAtom,
  signinPasswordAtom,
} from "../../store/atoms";
import { useNavigate } from "react-router-dom";

interface signUpInputType {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  gender: string;
  domain: string;
}

export const SignUpSubmit = () => {
  const navigate = useNavigate();
  const signUpInput: signUpInputType = {
    first_name: useRecoilValue(firstNameAtom),
    last_name: useRecoilValue(lastNameAtom),
    email: useRecoilValue(emailAtom),
    password: useRecoilValue(passwordAtom),
    gender: useRecoilValue(genderAtom),
    domain: useRecoilValue(domainAtom),
  };
  const sendRequest = async () => {
    console.log(signUpInput);

    try {
      // send user data to server
      const response = await axios.post(
        `${API_URL}/api/users/signup`,
        signUpInput
      );
      const jwt = response.data.token;

      //store response into local storage
      localStorage.setItem("token", jwt);
      localStorage.setItem("email", signUpInput.email);

      //navigate to userList route
      navigate("/userList");
    } catch (err) {
      alert("Invalid inputs");
    }
  };
  return <SubmitButton sendRequest={sendRequest} text="Sign Up" />;
};

interface signInInputType {
  email: string;
  password: string;
}
export const SignInSubmit = () => {
  const navigate = useNavigate();
  const signInInput: signInInputType = {
    email: useRecoilValue(signinEmailAtom),
    password: useRecoilValue(signinPasswordAtom),
  };

  const sendRequest = async () => {
    try {
      // send user data to server
      const response = await axios.post(
        `${API_URL}/api/users/signin`,
        signInInput
      );
      const jwt = response.data.token;

      //store response into local storage
      localStorage.setItem("token", jwt);
      localStorage.setItem("email", signInInput.email);

      //navigate to blogs route
      navigate("/userList");
    } catch (err) {
      alert("Invalid username or password");
    }
  };

  return <SubmitButton sendRequest={sendRequest} text="Sign In" />;
};

const SubmitButton = ({
  sendRequest,
  text,
}: {
  sendRequest: () => void;
  text: string;
}) => {
  return (
    <div>
      <button
        onClick={sendRequest}
        type="button"
        className="w-full text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
      >
        {text}
      </button>
    </div>
  );
};
