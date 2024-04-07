import React, { useEffect, useState } from "react";
import Navbar from "../components/ui/Navbar";
import axios from "axios";
import { API_URL } from "../config";
import { useParams } from "react-router-dom";

interface TeamType {
  teamName: string;
  teamDescription: string;
  admin: {
    first_name: string;
    last_name: string;
  }[];
  teamMembers: {
    first_name: string;
    last_name: string;
    domain: string;
  }[];
}

const ViewTeam = () => {
  const { id } = useParams();
  const [team, setTeam] = useState<TeamType>({
    teamName: "",
    teamDescription: "",
    admin: [],
    teamMembers: [],
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      await axios
        .get(`${API_URL}/api/team/${id}`, {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        })
        .then((response) => {
          setTeam(response.data.data);
          setLoading(false);
        })
        .catch((error) => {});
    }
    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <Navbar />
      <div className="flex justify-center mt-4">
        <div className="w-3/5 h-2/6 my-2 mx-2 py-4 bg-white border border-gray-200 rounded-lg shadow ">
          <div className="flex flex-col items-center mb-2">
            <h5 className="mb-1 text-2xl font-medium text-gray-900">
              {team.teamName}
            </h5>
            <span className="text-lg text-gray-500">
              {team.teamDescription}
            </span>
            <h6 className="text-base font-medium">
              @{team.admin[0].first_name} {team.admin[0].last_name}
            </h6>
          </div>
          <div className="flex flex-col items-center text-lg">
            {team.teamMembers.map((member) => (
              <div className=" flex justify-between text-base">
                <span className="mr-5 font-medium">
                  @{member.first_name} {member.last_name}
                </span>
                <span>{member.domain}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewTeam;
