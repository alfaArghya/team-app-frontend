import { selector } from "recoil";
import { firstNameAtom, lastNameAtom, nameAtom } from "../atoms";

export const nameState = selector({
  key: "nameState",
  get: ({ get }) => {
    return get(nameAtom);
  },
});

export const firstNameState = selector({
  key: "firstNameState",
  get: ({ get }) => {
    return get(firstNameAtom);
  },
});
export const lastNameState = selector({
  key: "lastNameState",
  get: ({ get }) => {
    return get(lastNameAtom);
  },
});
