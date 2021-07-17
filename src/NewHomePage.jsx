import { makeStyles, useMediaQuery } from "@material-ui/core";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateHeader } from "./features/header/headerSlice";
import { fetchPosts } from "./features/posts/postsSlice";
import { PostsList } from "./features/posts";
import { FAB } from "./features/posts/FAB";
import { Header } from "./features/header/Header";
import { RightBar } from "./features/RightBar";
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
  const tabletView = useMediaQuery("(max-width:1200px)");

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
        style={{
          paddingLeft: mobileView ? "" : "18rem",
          paddingRight: tabletView ? "" : "28rem",
        }}
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
