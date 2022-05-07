import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
//import Search from "./Search";

function Add() {
  const [formData, setFormData] = useState({});
  //const navigate = useNavigate();
  console.log(formData);
  const hanldeChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios
      .post("http://localhost:3004/posts", formData)
      .then((response) => {
        console.log(response.data, "????????");
        //navigate("/");
      });
  };

  return (
    <>
      <>
        <form onSubmit={handleSubmit}>
          <div>
            <p>id</p>
            <input
              type="number"
              name="id"
              placeholder="id"
              onChange={hanldeChange}
              value={formData.id}
            ></input>
          </div>
          <div>
            <p> user name</p>
            <input
              type="text"
              name="name"
              placeholder="enter user name"
              onChange={hanldeChange}
              value={formData.name}
            ></input>

            <p> email</p>
            <input
              type="text"
              name="email"
              placeholder="email"
              onChange={hanldeChange}
              value={formData.email}
            ></input>
          </div>

          <button type="submit">submit</button>
        </form>
      </>
    </>
  );
}
export default Add;
