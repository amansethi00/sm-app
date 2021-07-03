import React, { useEffect } from "react";
import { PostsList } from "./features/posts";
import { Fab, makeStyles } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { updateHeader } from "./features/header/headerSlice";
const useStyles = makeStyles({
  button: {
    position: "fixed",
    bottom: "2rem",
    right: "2rem",
    zIndex: 1000,
  },
});
export const Homepage = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(updateHeader({ title: "Home" }));
  }, []);
  return (
    <section>
      <Link to="/compose/post">
        <Fab className={classes.button} color="primary" aria-label="add">
          <AddIcon />
        </Fab>
      </Link>
      <PostsList />
    </section>
  );
};
