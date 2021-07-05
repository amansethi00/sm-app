import React from "react";
import { useSelector } from "react-redux";
import { PostsList } from "../posts";
import { makeStyles, Typography } from "@material-ui/core";
const useStyles = makeStyles({
  rootlight: {
    padding: "3rem",
    color: "black",
  },
  rootdark: {
    padding: "3rem",
    color: "white",
  },
});
export const UserPosts = ({ user }) => {
  const classes = useStyles();
  const posts = useSelector((state) => state.posts.posts);
  const userPosts = posts.filter((post) => post.username === user.username);
  const loggedInUser = useSelector((state) => state.user);
  const theme = useSelector((state) => state.theme.theme);
  console.log({ userPosts });
  return (
    <>
      {userPosts.length > 0 && <PostsList postsToRender={userPosts} />}
      {userPosts < 0 && (
        <Typography className={classes["root" + theme]} variant="h5">
          {loggedInUser.username === user.username
            ? "You have"
            : `${user.name} has`}{" "}
          not posted anything yet..{" "}
        </Typography>
      )}
    </>
  );
};
