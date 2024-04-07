import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Avatar } from "./Avatar";

const Navbar = () => {
  const navigate = useNavigate();
  const email = localStorage.getItem("email");

  return (
    <div className="border-b border-gray-200 flex justify-between px-10 py-4">
      <Link to={"/userList"}>
        <h1 className="font-black text-4xl">team-app</h1>
      </Link>
      <div className="w-72 flex justify-between items-center">
        <Link to={"/teams"}>
          <button
            type="button"
            className=" text-white bg-[#2ec27d] hover:bg-[#2ec27d]/60 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2 text-center me-2"
          >
            View Team
          </button>
        </Link>
        <div className="flex items-center">
          <Avatar email={email || "anonymous"} />
          <button
            type="button"
            className=" text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2 text-center me-2"
            onClick={() => {
              localStorage.removeItem("token");
              navigate("/signin");
            }}
          >
            Sign out
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
