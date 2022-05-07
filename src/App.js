import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Update from "./component/form/updateForm";
import User from "./pages/user";
import Layout from "./component/layout/layout";
import Home from "./pages/home";
import Add from "./component/form/addForm";
import Login from "./component/form/login ";
//import From from "./component/form/from";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          {/* <Route element={<Layout />}> */}
          <Route path="/add" element={<Add />} />
          <Route path="/" exact element={<Home />} />
          <Route path="/user" element={<User />} />
          <Route path="/update/:id" element={<Update />} />
          {/* </Route> */}
        </Routes>
      </BrowserRouter>
    </>
  );
};
export default App;
