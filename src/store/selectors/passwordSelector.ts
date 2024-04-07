import { selector } from "recoil";
import { passwordAtom, signinPasswordAtom } from "../atoms";

export const passwordState = selector({
  key: "passwordState",
  get: ({ get }) => {
    return get(passwordAtom);
  },
});
export const signinPasswordState = selector({
  key: "passwordState",
  get: ({ get }) => {
    return get(signinPasswordAtom);
  },
});
