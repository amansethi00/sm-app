import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { updateHeader } from "../header/headerSlice";
import { FAB } from "../posts/FAB";
import { UserInfo } from "./UserInfo";
import { userLists } from "../../userLists";
import { getUser } from "./services";
export const UserProfile = ({ viewUser }) => {
  const { username } = useParams();
  const [user, setUser] = useState(useSelector((state) => state.user));
  let dispatch = useDispatch();
  // if (user.username !== username) {
  //   user = userLists.find((user) => user.username === username);
  // }
  const updateUser = async () => {
    setUser(await getUser(username));
  };
  useEffect(() => {
    updateUser();
  }, []);
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
