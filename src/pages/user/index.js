import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
//import Search from "../../component/form/Search";

const User = (props) => {
  const [user, setUser] = useState();
  const navigate = useNavigate();
  const [searchData, setSearchData] = useState("");

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const res = await axios.get(" http://localhost:3004/posts");
    // console.log(res.data, "=======");
    setUser(res.data);
  };
  const deleteUser = async (id) => {
    const res = await axios.delete("http://localhost:3004/posts/" + id);
    console.log(res);
    getData();
  };
  const handleSearch = (e) => {
    let value = e.target.value;
    if (searchData) {
      let filter = user.filter(
        (us) => us.name.includes(value) || us.email.includes(value)
      );
      setUser(filter);
    } else {
      getData();
    }
    setSearchData(value);
    // getData();
  };

  console.log(searchData, "");
  return (
    <div>
      <input
        type="text"
        placeholder="Search.."
        value={searchData}
        onChange={(event) => handleSearch(event)}
      />

      <h1> api fatch</h1>
      <div>
        <button type="button" onClick={() => navigate("/add")}>
          Add
        </button>
      </div>
      <th>id</th>
      <th>Name</th>
      <th>Email</th>
      <th>Actions</th>
      {user &&
        user.map((data, i) => (
          <tr key={i}>
            <td>{data.id}</td>
            <td>{data.name}</td>
            <td>{data.email}</td>
            <button
              type="button"
              onClick={() => navigate(`/update/${data.id}`)}
            >
              Update
            </button>
            <button type="button" onClick={() => deleteUser(data.id)}>
              Delete
            </button>
          </tr>
        ))}
    </div>
  );
};

export default User;
