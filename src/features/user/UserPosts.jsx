import React from "react";
import { useSelector } from "react-redux";
import { PostsList } from "../posts";
import { Typography } from "@material-ui/core";
export const UserPosts = ({ user }) => {
  const posts = useSelector((state) => state.posts.posts);
  const userPosts = posts.filter((post) => post.username === user.username);
  const loggedInUser = useSelector((state) => state.user);
  console.log({ userPosts });
  return (
    <>
      {userPosts.length > 0 && <PostsList postsToRender={userPosts} />}
      <Typography variant="h5">
        {loggedInUser.username === user.username
          ? "You have"
          : `${user.name} has`}{" "}
        not posted anything yet..{" "}
      </Typography>
    </>
  );
};
