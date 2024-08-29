import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function EditUser() {
  const navigate = useNavigate();
  const params = useParams();

  const [userInput, setUserInput] = useState({
    firstName: "",
    Tamil: "",
    English: "",
    Maths: "",
    Science: "",
    SocialScience:""
  });

  useEffect(() => {
    getUserData();
  }, []);

  const getUserData = async () => {
    const userData = await axios.get(
      `https://66cf33e4901aab248421589a.mockapi.io/Attendence/${params.id}`
    );

    setUserInput(userData.data);
  };

  const handleChange = ({ target: { value, name } }) => {
    setUserInput({ ...userInput, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { firstName, Tamil, English, Maths, Science, SocialScience } = userInput;

    await axios.put(
      `https://66cf33e4901aab248421589a.mockapi.io/Attendence/${params.id}`,
      {
        firstName,Tamil, English, Maths, Science, SocialScience
      }
    );

    navigate("/");
  };

  return (
    <div className="userRegisterForm">
      <form onSubmit={handleSubmit}>
        <h1 style={{ textAlign: "center" }} className="mb-5">
          Edit User
        </h1>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            firstName
          </label>
          <input
            type="text"
            class="form-control"
            name="firstName"
            value={userInput.firstName}
            onChange={handleChange}
          />
        </div>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            Tamil
          </label>
          <input
            type="number"
            class="form-control"
            name="Tamil"
            value={userInput.Tamil}
            onChange={handleChange}
          />
        </div>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            English
          </label>
          <input
            type="number"
            class="form-control"
            name="English"
            value={userInput.English}
            onChange={handleChange}
          />
        </div>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            Maths
          </label>
          <input
            type="number"
            class="form-control"
            name="Maths"
            value={userInput.Maths}
            onChange={handleChange}
          />
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">
            Science
          </label>
          <input
            type="number"
            class="form-control"
            name="Science"
            value={userInput.Science}
            onChange={handleChange}
          />
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">
            SocialScience
          </label>
          <input
            type="number"
            class="form-control"
            name="SocialScience"
            value={userInput.SocialScience}
            onChange={handleChange}
          />
        </div>

        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default EditUser;