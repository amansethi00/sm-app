import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { updateHeader } from "../header/headerSlice";
import { FAB } from "../posts/FAB";
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
      <UserInfo user={user} />
      <FAB />
    </div>
  );
};
