import React from "react";
import { Link } from "react-router-dom";
import { Fab, makeStyles } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
const useStyles = makeStyles({
  button: {
    position: "fixed",
    bottom: "2rem",
    right: "2rem",
    zIndex: 1000,
  },
});
export const FAB = () => {
  const classes = useStyles();
  return (
    <Link to="/compose/post">
      <Fab className={classes.button} color="primary" aria-label="add">
        <AddIcon />
      </Fab>
    </Link>
  );
};
