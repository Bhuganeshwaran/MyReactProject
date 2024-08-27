import React, { useState } from "react";
import "./CreateUser.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CreateUser = () => {
  const navigate = useNavigate();

  const [userInput, setUserInput] = useState({
    firstName: "",
    Tamil: "",
    English: "",
    Maths: "",
    Science: "",
    SocialScience:""
  });

  const handleChange = ({ target: { value, name } }) => {
    setUserInput({ ...userInput, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const postData = await axios.post(
      "https://66cb774e4290b1c4f19a69fe.mockapi.io/Attendence",
      userInput
    );

    // alert("User Registered Successfully");

    navigate("/");
  };

  return (
    <div className="userRegisterForm">
      <form onSubmit={handleSubmit}>
        <h1 style={{ textAlign: "center" }} className="mb-5">
          User Register
        </h1>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            First Name
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
};

export default CreateUser;