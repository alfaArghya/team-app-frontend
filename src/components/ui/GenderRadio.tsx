import { RecoilState, useSetRecoilState } from "recoil";

const GenderRadio = ({ atomName }: { atomName: RecoilState<string> }) => {
  const setValue = useSetRecoilState(atomName);
  return (
    <div className="mb-4">
      <h3 className="mb-1 text-sm font-medium text-gray-900">Gender</h3>
      <ul className="items-center w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex">
        <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r">
          <div className="flex items-center ps-3">
            <input
              id="gender-male"
              type="radio"
              name="list-radio"
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 "
              onChange={() => {
                setValue("Male");
              }}
            />
            <label
              htmlFor="gender-male"
              className="w-full py-3 ms-2 text-sm font-medium text-gray-900"
            >
              Male
            </label>
          </div>
        </li>
        <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r ">
          <div className="flex items-center ps-3">
            <input
              type="radio"
              id="gender-female"
              name="list-radio"
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 "
              onChange={() => {
                setValue("Female");
              }}
            />
            <label
              htmlFor="gender-female"
              className="w-full py-3 ms-2 text-sm font-medium text-gray-900 "
            >
              Female
            </label>
          </div>
        </li>
        <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r ">
          <div className="flex items-center ps-3">
            <input
              id="gender-others"
              type="radio"
              name="list-radio"
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 "
              onChange={() => {
                setValue("Others");
              }}
            />
            <label
              htmlFor="gender-others"
              className="w-full py-3 ms-2 text-sm font-medium text-gray-900"
            >
              Others
            </label>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default GenderRadio;
