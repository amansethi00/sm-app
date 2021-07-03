import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { updateHeader } from "../header/headerSlice";
import { UserInfo } from "./UserInfo";

export const UserProfile = () => {
  const { username } = useParams();
  const user = useSelector((state) => state.user);
  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(updateHeader({ title: username }));
  }, []);
  return (
    <div>
      <h1>Hello {username}</h1>
      <UserInfo user={user} />
    </div>
  );
};
