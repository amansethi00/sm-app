import React, { useEffect } from "react";
import { PostsList } from "./features/posts";
import { Fab, makeStyles } from "@material-ui/core";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { updateHeader } from "./features/header/headerSlice";
import { FAB } from "./features/posts/FAB";
const useStyles = makeStyles({
  root: {
    paddingTop: "3rem",
  },
});
export const Homepage = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(updateHeader({ title: "Home" }));
  }, []);
  return (
    <section className={classes.root}>
      <PostsList />
      <FAB />
    </section>
  );
};
