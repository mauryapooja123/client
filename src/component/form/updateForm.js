import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

function Update() {
  const [userData, setUserData] = useState({});
  const navigate = useNavigate();
  const { id } = useParams();
  console.log(id);
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    await axios.get(`http://localhost:3004/posts/${id}`).then((res) => {
      console.log(res.data, "");
      setUserData(res.data);
    });
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    if (userData) {
      await axios.put(`http://localhost:3004/posts/${id}`, userData);
      navigate("/");
    }
  };

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
    console.log(userData, "data");
  };
  return (
    <form onSubmit={onSubmit}>
      <p>id</p>
      <input
        type="number"
        placeholder="id"
        name="id"
        value={userData.id}
        onChange={handleChange}
      ></input>
      <p> user name</p>
      <input
        type="text"
        placeholder="user name"
        name="name"
        value={userData.name}
        onChange={handleChange}
      ></input>
      <p>email </p>
      <input
        type="email"
        placeholder="enter email"
        name="email"
        value={userData.email}
        onChange={handleChange}
      ></input>
      <br />
      <br />

      <button type="submit"> submit</button>
    </form>
  );
}

export default Update;
