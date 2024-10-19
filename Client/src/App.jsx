import React, { useState, useEffect } from "react";
import SignUpPage from "./Components/SignUp";
import LoginForm from "./Components/Login";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  useSearchParams,
} from "react-router-dom";
import Home from "./Components/Home";
import UserProfile from "./Components/Profile";
import { useSelector } from "react-redux";
import AdminHome from "./Components/AdmHome";
import Users from "./Components/Users";
import ALoginForm from "./Components/AdmLogin";
import EditPage from "./Components/AdmEdit";

const App = () => {
  const user = useSelector((state) => state.user.user);
  const isAdmin = useSelector((state) => state.user.isAdmin);
  console.log("User", user);
  console.log("Admin", isAdmin);

  return (
    <Router>
      <Routes>
        <Route path="/signup" element={<SignUpPage />} />
        <Route
          path="/profile"
          element={user ? <UserProfile /> : <Navigate to={"/"} />}
        />
        <Route
          path="/"
          element={user ? <Navigate to={"/profile"} /> : <LoginForm />}
        />

        <Route
          path="/adminlogin"
          element={isAdmin ? <Navigate to={"/adminhome"} /> : <ALoginForm />}
        />
        <Route
          path="/adminhome"
          element={isAdmin ? <AdminHome /> : <Navigate to={"/adminlogin"} />}
        />
        <Route
          path="/users"
          element={isAdmin ? <Users /> : <Navigate to={"/adminlogin"} />}
        />
        <Route
          path="/edit"
          element={isAdmin ? <EditPage /> : <Navigate to={"/adminlogin"} />}
        />
      </Routes>
    </Router>
  );
};

export default App;
