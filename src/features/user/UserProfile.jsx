import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { updateHeader } from "../header/headerSlice";
import { FAB } from "../posts/FAB";
import { UserInfo } from "./UserInfo";
import { userLists } from "../../userLists";
import { getUser } from "./services";
import { makeStyles, useMediaQuery } from "@material-ui/core";
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
  const tabletView = useMediaQuery("(max-width:1200px)");
  const mobileView = useMediaQuery("(max-width:666px)");

  const updateUser = async () => {
    setUser(await getUser(username));
  };
  useEffect(() => {
    updateUser();
  }, [username]);
  useEffect(() => {
    dispatch(updateHeader({ title: username }));
  }, [username]);
  return (
    <div
      style={{
        paddingLeft: mobileView ? "" : "18rem",
        paddingRight: tabletView ? "" : "28rem",
      }}
    >
      <UserInfo user={user} />
      <FAB />
    </div>
  );
};
