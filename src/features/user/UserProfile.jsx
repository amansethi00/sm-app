import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { updateHeader } from "../header/headerSlice";
import { FAB } from "../posts/FAB";
import { UserInfo } from "./UserInfo";
import { userLists } from "../../userLists";
import { getUser } from "./services";
import { makeStyles } from "@material-ui/core";
const useStyles = makeStyles({
  root: {
    paddingLeft: "18rem",
  },
});
export const UserProfile = ({ viewUser }) => {
  const { username } = useParams();
  const [user, setUser] = useState(useSelector((state) => state.user));
  let dispatch = useDispatch();
  const classes = useStyles();

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
    <div className={classes.root}>
      <UserInfo user={user} />
      <FAB />
    </div>
  );
};
