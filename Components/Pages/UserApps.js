import React from "react";
import UsersList from "./UsersList";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CreateUser from "./CreateUser";
import EditUser from "./EditUser";

function UserApps() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UsersList />} />
        <Route path="/create" element={<CreateUser />} />
        <Route path="/edit/:id" element={<EditUser/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default UserApps;