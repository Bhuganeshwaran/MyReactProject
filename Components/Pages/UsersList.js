import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function UserApps() {
  const [users, setUser] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    let userData = await axios.get(
      "https://66cb774e4290b1c4f19a69fe.mockapi.io/Attendence"
    );
    setUser(userData.data);
  };

  // Create     read      update     delete
  // POST       GET        PUT       DELETE

  return (
    <div>
      <Link to={"/create"} className="btn btn-primary m-3">
        Create User
      </Link>
      <table class="table table-striped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Tamil</th>
            <th scope="col">English</th>
            <th scope="col">Maths</th>
            <th scope="col">Science</th>
            <th scope="col">SocialScience</th>
          </tr>
        </thead>
        <tbody>
          {users.map((item, index) => {
            return (
              <tr>
                <th scope="row">{index + 1}</th>
                <td>{item.name}</td>
                <td>{item.Tamil}</td>
                <td>{item.English}</td>
                <td>{item.Maths}</td>
                <td>{item.Science}</td>
                <td>{item.SocialScience}</td>
                <td><button>Edit</button></td>
                <td><button>Delete</button></td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default UserApps;
