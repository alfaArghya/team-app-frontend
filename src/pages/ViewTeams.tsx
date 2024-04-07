import React, { useEffect, useState } from "react";
import Navbar from "../components/ui/Navbar";
import axios from "axios";
import { API_URL } from "../config";
import { TeamsCard } from "../components/ui/TeamCard";

interface TeamsType {
  _id: string;
  teamName: string;
  teamDescription: string;
  admin: string;
  teamMembers: string[];
}

const ViewTeams = () => {
  const [teams, setTeams] = useState<TeamsType[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      await axios
        .get(`${API_URL}/api/team/`, {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        })
        .then((response) => {
          setTeams(response.data.findTeams);
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
        {teams.map((team) => {
          return (
            <TeamsCard
              id={team._id}
              teamName={team.teamName}
              teamDescription={team.teamDescription}
              admin={team.admin}
              teamMembers={team.teamMembers}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ViewTeams;
