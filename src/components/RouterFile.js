import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Login";
import Dashboard from "./Dashboard";
import User from "./User";
import AddUser from "./AddUser";
import Home from "./Home";
import PageNotFound from "./PageNotFound";
import Edit from "./Edit";
import Details from "./Details";
const RouteFile = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/users" element={<Dashboard />}>
          <Route path="" element={<User />} />
          <Route path="add" element={<AddUser />} />
          <Route path="detail/:id" element={<Details />} />
          <Route path="edit/:id" element={<Edit />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Router>
  );
};

export default RouteFile;
