import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const UsersList =() => {
  const [users, setUser] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    let userData = await axios.get(
      "https://66cf33e4901aab248421589a.mockapi.io/Attendence"
    );
    setUser(userData.data);
  };
  const handleDelete = async (id) => {
    await axios.delete(
      `https://66cf33e4901aab248421589a.mockapi.io/Attendence/${id}`
    );
    getData();
    alert("user Deleted");
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
            <th scope="col">firstName</th>
            <th scope="col">Tamil</th>
            <th scope="col">English</th>
            <th scope="col">Maths</th>
            <th scope="col">Science</th>
            <th scope="col">SocialScience</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((item, index) => {
            return (
              <tr>
                <th scope="row">{index + 1}</th>
                <td>{item.firstName}</td>
                <td>{item.Tamil}</td>
                <td>{item.English}</td>
                <td>{item.Maths}</td>
                <td>{item.Science}</td>
                <td>{item.SocialScience}</td>
                <td>
                  <Link to={`/edit/${item.id}`}
                  className="btn btn-success btn-sm">
                    Edit
                  </Link>
                
                <button
                className="btn btn-danger btn-sm" onClick={()=>{
                  handleDelete(item.id);
                }}
                >Delete
                </button></td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default UsersList;
