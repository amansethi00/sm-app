import React from "react";
import { PostsList } from "./features/posts";
import { Fab, makeStyles } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import { Link } from "react-router-dom";
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
