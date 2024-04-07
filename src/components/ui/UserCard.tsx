import React from "react";
import { CardAvatar } from "./Avatar";
import { Link } from "react-router-dom";

interface UserCardType {
  id?: string;
  firstName: string;
  lastName: string;
  email: string;
  avatar?: string;
  gender?: string;
  domain: string;
  available: boolean;
}

const UserCard = ({
  id,
  firstName,
  lastName,
  email,
  avatar,
  gender,
  domain,
  available,
}: UserCardType) => {
  return (
    <>
      <div className="w-full max-w-sm my-2 mx-2 bg-white border border-gray-200 rounded-lg shadow ">
        <div className="flex flex-col items-center pb-10">
          <CardAvatar email={email} />
          <h5 className="mb-1 text-xl font-medium text-gray-900">
            {firstName} {lastName}
          </h5>
          <span className="text-sm text-gray-500">{domain}</span>
          <div className="flex mt-4 md:mt-6">
            {available ? (
              <div className="cursor-pointer inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300">
                Add In Team
              </div>
            ) : (
              <></>
            )}

            <div className="cursor-pointer py-2 px-4 ms-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100">
              Message
            </div>
          </div>
          <div className="mt-2 ">
            {available ? (
              <span>Available</span>
            ) : (
              <span className="text-gray-400">Not Available</span>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default UserCard;

const Hii = () => {
  return <></>;
};

{
  /* <div className="w-4/6 bg-white border border-gray-200 rounded-lg shadow px-4 py-3 mb-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Avatar email={email} />
            <div className="font-extralight cursor-pointer">@{email}</div>
          </div>
          {username === localStorage.getItem("username") ? (
            <div className="flex ">
              <Update id={id} title={title} content={content} />
              <Delete id={id} />
            </div>
          ) : (
            <></>
          )}
        </div>
        <div className="p-5 cursor-pointer">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
            {firstName} {lastName}
          </h5>
          <p className="mb-3 font-normal text-gray-700 ">{domain}</p>
        </div>
        <p className="text-gray-400 text-sm">{gender}</p>
      </div> */
}
