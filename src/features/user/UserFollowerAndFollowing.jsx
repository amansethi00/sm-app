import React from "react";
import { makeStyles, Typography } from "@material-ui/core";
const useStyles = makeStyles({
  root: {
    display: "flex",
    alignItems: "center",
  },
  countTypography: {
    fontWeight: "600",
    fontSize: "19px",
    marginRight: "0.3rem",
  },
  titleTypography: {
    marginRight: "1rem",
    color: "rgb(110, 118, 125)",
  },
});
export const UserFollowerAndFollowing = ({ count, title }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography variant="h6" className={classes.countTypography}>
        {count}
      </Typography>
      <Typography variant="p" className={classes.titleTypography}>
        {title}
      </Typography>
    </div>
  );
};
