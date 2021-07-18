import React, { useState } from "react";
import { Button, Box, makeStyles } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import { followUser, unfollowUser } from "./userSlice";
import { EditProfileModal } from "./EditProfileModal";
const useStyles = makeStyles({
  followButton: {
    borderRadius: "2rem",
    marginTop: "0.5rem",
    position: "absolute",
    right: "1rem",
  },
  followingButton: {
    borderRadius: "2rem",
    marginTop: "0.5rem",
    position: "absolute",
    right: "1rem",
    backgroundColor: "#3C4BA2",
    color: "white",
    "&hover": {
      backgroundColor: "#3C4BA2",
    },
  },
});
export const FollowOrEditProfileButton = ({
  currentUserName,
  username,
  className,
}) => {
  const [open, setOpen] = useState(false);
  const classes = useStyles();
  const user = useSelector((state) => state.user);
  console.log({ user });
  console.log({ currentUserName });
  console.log({ username });
  const dispatch = useDispatch();
  const followButtonClicked = async () => {
    console.log("username cc", user.username);
    const currentUserNameAndUserToBeFollowed = {
      currentUsername: user.username,
      userToBeFollowed: username,
    };
    console.log({ currentUserNameAndUserToBeFollowed });
    dispatch(followUser(currentUserNameAndUserToBeFollowed));
  };
  const followingButtonClicked = async () => {
    const currentUserNameAndUserToBeUnfollowed = {
      currentUsername: user.username,
      userToBeUnfollowed: username,
    };
    dispatch(unfollowUser(currentUserNameAndUserToBeUnfollowed));
  };
  return (
    <Box className={className}>
      {username === currentUserName ? (
        <>
          <Button
            variant="outlined"
            color="primary"
            className={classes.followButton}
            onClick={() => setOpen(true)}
          >
            Edit Profile
          </Button>
          <EditProfileModal bio={user.bio} open={open} setOpen={setOpen} />
        </>
      ) : user.followingList.find(
          (followingusers) => followingusers === username
        ) ? (
        <Button
          variant="outlined"
          color="primary"
          className={classes.followingButton}
          onClick={followingButtonClicked}
        >
          Following
        </Button>
      ) : (
        <Button
          variant="outlined"
          color="primary"
          className={classes.followButton}
          onClick={followButtonClicked}
        >
          Follow
        </Button>
      )}
    </Box>
  );
};
