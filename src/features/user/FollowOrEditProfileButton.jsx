import React from "react";
import { Button, Box, makeStyles } from "@material-ui/core";
const useStyles = makeStyles({
  button: {
    borderRadius: "2rem",
    marginTop: "0.5rem",
    position: "absolute",
    right: "1rem",
  },
});
export const FollowOrEditProfileButton = ({
  currentUserName,
  username,
  className,
}) => {
  const classes = useStyles();
  return (
    <Box className={className}>
      {username === currentUserName ? (
        <Button variant="outlined" color="primary" className={classes.button}>
          Edit Profile
        </Button>
      ) : (
        <Button variant="outlined" color="primary" className={classes.button}>
          Follow
        </Button>
      )}
    </Box>
  );
};
