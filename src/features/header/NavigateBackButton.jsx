import React from "react";
import { IconButton, makeStyles } from "@material-ui/core";
import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";
import { useNavigate } from "react-router-dom";
const useStyles = makeStyles({
  button: {
    padding: "0.2rem",
  },
});
export const NavigateBackButton = () => {
  const classes = useStyles();
  let navigate = useNavigate();
  const backHandler = () => {
    navigate(-1);
  };
  return (
    <IconButton
      onClick={backHandler}
      aria-label="back button"
      className={classes.button}
    >
      <KeyboardBackspaceIcon style={{ color: "#3f51b5" }} />
    </IconButton>
  );
};
