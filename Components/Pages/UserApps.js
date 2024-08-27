import React from "react";
import UsersList from "./UsersList";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CreateUser from "./CreateUser";

function UserApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UsersList />} />
        <Route path="/create" element={<CreateUser />} />
      </Routes>
    </BrowserRouter>
  );
}

export default UserApp;