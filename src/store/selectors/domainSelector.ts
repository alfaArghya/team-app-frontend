import { selector } from "recoil";
import { domainAtom } from "../atoms";

export const domainState = selector({
  key: "domainState",
  get: ({ get }) => {
    return get(domainAtom);
  },
});
