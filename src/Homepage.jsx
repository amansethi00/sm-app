import React, { useEffect } from "react";
import { PostsList } from "./features/posts";
import { Fab, makeStyles } from "@material-ui/core";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updateHeader } from "./features/header/headerSlice";
import { setPosts } from "./features/posts/postsSlice";
import { FAB } from "./features/posts/FAB";
import { fetchAllPosts } from "./services";
import { fetchPosts } from "./features/posts/postsSlice";
const useStyles = makeStyles({
  root: {
    paddingTop: "3rem",
  },
});

export const Homepage = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const postStatus = useSelector((state) => state.posts.status);
  console.log({ postStatus });
  useEffect(() => {
    if (postStatus === "idle") {
      dispatch(fetchPosts());
    }
  }, [postStatus, dispatch]);
  useEffect(() => {
    dispatch(updateHeader({ title: "Home" }));
    // const loadPosts = async () => {
    //   const posts = await fetchAllPosts();
    //   console.log({ posts });
    //   dispatch(setPosts({ posts }));
    // };
    // loadPosts();
  }, []);
  return (
    <section className={classes.root}>
      {postStatus === "loading" ? (
        <h2>Loading...</h2>
      ) : (
        <>
          <PostsList />
          <FAB />
        </>
      )}
    </section>
  );
};
