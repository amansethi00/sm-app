import React from "react";
import { IconButton, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useSelector } from "react-redux";

const useStyles = makeStyles((theme) => ({
  root: {
    light: {
      color: "black",
    },
    dark: {
      color: "white",
    },
  },
  icondark: {
    color: "white",
  },
  iconlight: {
    color: "black",
  },
}));
export const SingleReactionComponent = ({ Icon, count, label }) => {
  const theme = useSelector((state) => state.theme.theme);
  const classes = useStyles();

  return (
    <IconButton
      color="white"
      className={classes["icon" + theme]}
      aria-label={label ? label : "reaction"}
      size="small"
    >
      <Icon color="white" className={classes["icon" + theme]} />
      <Typography style={{ padding: "0.5rem" }} variant="body1">
        {count}
      </Typography>
    </IconButton>
  );
};
