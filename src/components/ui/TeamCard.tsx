import React from "react";
import { Link } from "react-router-dom";

interface TeamCardType {
  id: string;
  teamName: string;
  teamDescription: string;
  admin: string;
  teamMembers: string[];
}

export const TeamsCard = ({
  id,
  teamName,
  teamDescription,
  admin,
  teamMembers,
}: TeamCardType) => {
  return (
    <div className="w-2/5 h-2/6 my-2 mx-2 bg-white border border-gray-200 rounded-lg shadow ">
      <Link to={`/team/${id}`}>
        <div className="flex flex-col items-center pb-10">
          <h5 className="mb-1 text-2xl font-medium text-gray-900">
            {teamName}
          </h5>
          <span className="text-lg text-gray-500">{teamDescription}</span>
        </div>
      </Link>
    </div>
  );
};
