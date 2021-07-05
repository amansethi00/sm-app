import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { updateHeader } from "../header/headerSlice";
import { FAB } from "../posts/FAB";
import { UserInfo } from "./UserInfo";
import { userLists } from "../../userLists";
export const UserProfile = ({ viewUser }) => {
  const { username } = useParams();
  let user = useSelector((state) => state.user);
  let dispatch = useDispatch();
  if (user.username !== username) {
    user = userLists.find((user) => user.username === username);
  }
  useEffect(() => {
    dispatch(updateHeader({ title: username }));
  }, []);
  return (
    <div>
      <UserInfo user={user} />
      <FAB />
    </div>
  );
};
