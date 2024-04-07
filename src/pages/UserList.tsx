import React, { useEffect, useState } from "react";
import Navbar from "../components/ui/Navbar";
import UserCard from "../components/ui/UserCard";
import axios from "axios";
import { API_URL } from "../config";

interface UserType {
  _id: string;
  first_name: string;
  last_name: string;
  email: string;
  avatar?: string;
  domain: string;
  gender: string;
  available: boolean;
}

const UserList = () => {
  const [skipCount, setSkipCount] = useState<number>(0);
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState<UserType[]>([]);
  const [name, setName] = useState("");

  useEffect(() => {
    async function fetchData() {
      await axios
        .get(`${API_URL}/api/users?skipCount=${skipCount}`, {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        })
        .then((response) => {
          setUsers(response.data.users);
          setLoading(false);
        })
        .catch((error) => {});
    }

    fetchData();
  }, [skipCount]);

  const sendRequest = async () => {
    const words: string[] = name.split(" ");
    try {
      // send user data to server
      await axios
        .get(`${API_URL}/api/users/name`, {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
          data: JSON.stringify({
            first_name: words[0],
            last_name: words[1],
          }),
        })
        .then((response) => {
          console.log(response.data.users);
          setUsers(response.data.users);
        });
    } catch (err) {
      alert("Invalid Input");
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <Navbar />
      <div className="max-w-md mx-auto mt-3">
        <label
          htmlFor="default-search"
          className="mb-2 text-sm font-medium text-gray-900 sr-only"
        >
          Search
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-500"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            onChange={(e) => {
              setName(e.target.value);
            }}
            type="search"
            id="default-search"
            className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500  "
            placeholder="Search Mockups, Logos..."
            required
          />
          <button
            type="submit"
            onClick={sendRequest}
            className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 "
          >
            Search
          </button>
        </div>
      </div>
      <div className="flex flex-wrap justify-center items-center mt-10">
        {users.map((user) => (
          <UserCard
            id={user._id}
            firstName={user.first_name}
            lastName={user.last_name}
            email={user.email}
            domain={user.domain}
            gender={user.gender}
            available={user.available}
          />
        ))}
      </div>
      <div className="flex justify-center items-center my-5">
        {skipCount === 0 ? (
          <></>
        ) : (
          <div
            onClick={() => {
              setSkipCount(skipCount - 1);
            }}
            className="cursor-pointer flex items-center justify-center px-4 h-10 me-3 text-base font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700"
          >
            <svg
              className="w-3.5 h-3.5 me-2 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M13 5H1m0 0 4 4M1 5l4-4"
              />
            </svg>
            Previous
          </div>
        )}

        <div
          onClick={() => {
            setSkipCount(skipCount + 1);
          }}
          className=" cursor-pointer flex items-center justify-center px-4 h-10 text-base font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700"
        >
          Next
          <svg
            className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </div>
      </div>
    </>
  );
};

export default UserList;
