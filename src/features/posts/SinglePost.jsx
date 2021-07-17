import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { SinglePostTitle } from "./SinglePostTitle";
import { SinglePostContent } from "./SinglePostContent";
import { SinglePostReactionComponent } from "./SinglePostReactionComponent";
import { Card, useMediaQuery } from "@material-ui/core";
import { InputComment } from "./InputComment";
import { updateHeader } from "../header/headerSlice";
import { FAB } from "./FAB";
const useStyles = makeStyles((theme) => ({
  rootlight: {
    maxWidth: "100%",
    backgroundColor: "var(--primary)",
  },
  rootdark: {
    maxWidth: "100%",
    backgroundColor: "var(--primary)",
    borderBottom: "1px solid #383C3F",
    borderRight: "1px solid #383C3F",
  },
  cardlight: {
    backgroundColor: "var(--primary)",
  },
  carddark: {
    backgroundColor: "var(--primary)",
  },
}));
export const SinglePost = ({
  postToRender,
  areCommentsAndReactionsDisabled,
}) => {
  const { postId } = useParams();
  const classes = useStyles();
  const theme = useSelector((state) => state.theme.theme);
  const tabletView = useMediaQuery("(max-width:1200px)");
  const mobileView = useMediaQuery("(max-width:666px)");

  let dispatch = useDispatch();
  console.log({ theme });
  console.log({ postId });
  let post = useSelector((state) =>
    state.posts.posts.find((post) => post.id === postId)
  );
  post = postToRender ?? post;

  console.log({ post });
  const comments = post?.comments?.map((postedComment) => {
    return (
      <SinglePost
        postToRender={postedComment}
        areCommentsAndReactionsDisabled
      />
    );
  });
  useEffect(() => {
    dispatch(updateHeader({ title: "Post" }));
  });

  return (
    <section
      style={{
        paddingTop: postToRender === undefined ? "4rem" : "",
        paddingLeft: postToRender === undefined && !mobileView ? "18rem" : "",
        marginRight: postToRender === undefined && !tabletView ? "28rem" : "",
      }}
      backgroundColor={theme === "light" ? "white" : "black"}
      className={classes["root" + theme]}
    >
      <Card
        backgroundColor={theme === "light" ? "white" : "black"}
        className={classes["card" + theme]}
      >
        <SinglePostTitle post={post} />
        <SinglePostContent post={post} />
      </Card>
      {!areCommentsAndReactionsDisabled && (
        <>
          <Card className={classes["card" + theme]}>
            <SinglePostReactionComponent post={post} />
          </Card>
          <InputComment post={post} />
        </>
      )}

      {comments}
      <FAB />
    </section>
  );
};
