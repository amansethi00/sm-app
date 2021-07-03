import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { SinglePostTitle } from "./SinglePostTitle";
import { SinglePostContent } from "./SinglePostContent";
import { SinglePostReactionComponent } from "./SinglePostReactionComponent";
import { Card } from "@material-ui/core";
import { themes } from "../themes/getTheme";
import { InputComment } from "./InputComment";
import { updateHeader } from "../header/headerSlice";
const useStyles = makeStyles((theme) => ({
  rootlight: {
    maxWidth: "100%",
    backgroundColor: "var(--primary)",
  },
  rootdark: {
    maxWidth: "100%",
    backgroundColor: "var(--primary)",
    borderBottom: "1px solid #383C3F",
  },
}));
export const SinglePost = ({
  postToRender,
  areCommentsAndReactionsDisabled,
}) => {
  const { postId } = useParams();
  const classes = useStyles();
  const theme = useSelector((state) => state.theme.theme);
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
      backgroundColor={theme === "light" ? "white" : "black"}
      className={classes["root" + theme]}
    >
      <Card
        backgroundColor={theme === "light" ? "white" : "black"}
        className={classes["root" + theme]}
      >
        <SinglePostTitle post={post} />
        <SinglePostContent post={post} />
      </Card>
      {!areCommentsAndReactionsDisabled && (
        <>
          <Card className={classes["root" + theme]}>
            <SinglePostReactionComponent post={post} />
          </Card>
          <InputComment post={post} />
        </>
      )}

      {comments}
    </section>
  );
};
