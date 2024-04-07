// import { ChangeEvent } from "react";
import { RecoilState } from "recoil";

export interface LabelledInputType {
  atomName: RecoilState<string>;
  type?: string;
  label: string;
  placeholder: string;
  // onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}
