import { selector } from "recoil";
import { genderAtom } from "../atoms";

export const genderState = selector({
  key: "genderState",
  get: ({ get }) => {
    return get(genderAtom);
  },
});
