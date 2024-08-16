import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const StyleModule = { listStyletype:"none", display: "flex", gap: "20px" };
  return (
    <div>
      <ul style={StyleModule}>
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <Link to={"/Blog"}>Blog</Link>
        </li>
        <li>
          <Link to={"/Contacts"}>Contacts</Link>
        </li>
        <li>
          <Link to={"/About"}>About</Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
