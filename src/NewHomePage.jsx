import { makeStyles, useMediaQuery } from "@material-ui/core";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateHeader } from "./features/header/headerSlice";
import { fetchPosts } from "./features/posts/postsSlice";
import { PostsList } from "./features/posts";
import { FAB } from "./features/posts/FAB";
import { Header } from "./features/header/Header";
const useStyles = makeStyles({
  root: {
    paddingTop: "4rem",
  },
});

export const NewHomePage = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const postStatus = useSelector((state) => state.posts.status);
  const mobileView = useMediaQuery("(max-width:666px)");
  console.log({ postStatus });
  useEffect(() => {
    if (postStatus === "idle") {
      dispatch(fetchPosts());
    }
  }, [postStatus, dispatch]);
  useEffect(() => {
    dispatch(updateHeader({ title: "Home" }));
  }, []);
  return (
    <>
      <section
        className={classes.root}
        style={{ paddingLeft: mobileView ? "" : "18rem" }}
      >
        {postStatus === "loading" ? (
          <h2>Loading...</h2>
        ) : (
          <>
            <PostsList />
            <FAB />
          </>
        )}
      </section>
    </>
  );
};
