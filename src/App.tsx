import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import UserList from "./pages/UserList";
import ViewTeams from "./pages/ViewTeams";
import ViewTeam from "./pages/ViewTeam";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* all routes */}
          <Route path="/" element={<Signup />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/userList" element={<UserList />} />
          <Route path="/teams" element={<ViewTeams />} />
          <Route path="/team/:id" element={<ViewTeam />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
