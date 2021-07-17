import React from "react";
import { Link } from "react-router-dom";
import { Fab, makeStyles, useMediaQuery, Button } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
const useStyles = makeStyles({
  button: {
    position: "fixed",
    bottom: "2rem",
    right: "2rem",
    zIndex: 1000,
  },
  buttonDesktop: {
    position: "fixed",
    top: "18rem",
    left: "4.5rem",
    zIndex: 1000000,
    backgroundColor: "#3C4BA2",
    borderRadius: "2rem",
    color: "white",
    "&hover": {
      backgroundColor: "#3C4BA2",
    },
  },
});
export const FAB = () => {
  const classes = useStyles();
  const mobileView = useMediaQuery("(max-width:666px");
  return (
    <Link to="/compose/post">
      {mobileView && (
        <Fab className={classes.button} color="primary" aria-label="add">
          <AddIcon />
        </Fab>
      )}
      {!mobileView && (
        <Button
          variant="outlined "
          // color="primary"
          className={classes.buttonDesktop}
        >
          Post someting
        </Button>
      )}
    </Link>
  );
};
