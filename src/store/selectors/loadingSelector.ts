import { selector } from "recoil";
import { loadingAtom } from "../atoms";

export const loadingState = selector({
  key: "loadingState",
  get: ({ get }) => {
    return get(loadingAtom);
  },
});
