import { selector } from "recoil";
import { emailAtom, signinEmailAtom } from "../atoms";

export const emailState = selector({
  key: "emailState",
  get: ({ get }) => {
    return get(emailAtom);
  },
});

export const signinEmailState = selector({
  key: "signinEmailState",
  get: ({ get }) => {
    return get(signinEmailAtom);
  },
});
