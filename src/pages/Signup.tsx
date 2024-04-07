import { Auth } from "../components/signup/Auth";
import { Quote } from "../components/ui/Quote";
import { RecoilRoot } from "recoil";

const Signup = () => {
  return (
    <div className="w-screen h-screen">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div>
          <RecoilRoot>
            <Auth />
          </RecoilRoot>
        </div>
        <div className="hidden lg:block">
          <Quote />
        </div>
      </div>
    </div>
  );
};

export default Signup;
