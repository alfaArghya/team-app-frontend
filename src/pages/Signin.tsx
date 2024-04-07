import { RecoilRoot } from "recoil";
import { Auth } from "../components/signin/Auth";
import { Quote } from "../components/ui/Quote";

const Signin = () => {
  return (
    <div>
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

export default Signin;
