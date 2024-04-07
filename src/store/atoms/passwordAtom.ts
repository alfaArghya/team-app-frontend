import { atom } from "recoil";

export const passwordAtom = atom({
  key: "passwordAtom",
  default: "",
});

export const signinPasswordAtom = atom({
  key: "signinPasswordAtom",
  default: "",
});
