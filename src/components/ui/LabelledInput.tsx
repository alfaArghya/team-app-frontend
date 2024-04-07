import { useRecoilState } from "recoil";
import { LabelledInputType } from "../../types";

const LabelledInput = ({
  atomName,
  type,
  label,
  placeholder,
}: // onChange,
LabelledInputType) => {
  const [value, setValue] = useRecoilState(atomName);
  return (
    <>
      <div className="mb-4">
        <label className="block mb-1 text-sm font-medium text-gray-900">
          {label}
        </label>
        <input
          onChange={(e) => {
            setValue(e.target.value);
            console.log(value);
          }}
          type={type || "test"}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
          placeholder={placeholder}
          required
        />
      </div>
    </>
  );
};

export default LabelledInput;
