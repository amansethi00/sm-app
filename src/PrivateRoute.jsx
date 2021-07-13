import React from "react";
import { useSelector } from "react-redux";
import { Route, Navigate } from "react-router-dom";
import { Login } from "./features/Login";
export const PrivateRoute = ({ element, path }) => {
  let user = useSelector((state) => state.user);
  user = localStorage.getItem("username");
  console.log({ user });
  return user?.username === "golumolu" || user === null ? (
    <Navigate state={{ from: path }} to="/login" replace={true} />
  ) : (
    <Route path={path} element={element} />
  );
};
