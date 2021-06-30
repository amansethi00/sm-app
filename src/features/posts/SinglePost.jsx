import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { SinglePostTitle } from "./SinglePostTitle";
import { SinglePostContent } from "./SinglePostContent";
import { SinglePostReactionComponent } from "./SinglePostReactionComponent";
import { Card } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  rootlight: {
    color: "black",
    backgroundColor: "white",
  },
  rootdark: {
    color: "white",
    backgroundColor: "black",
  },
}));
export const SinglePost = () => {
  const { postId } = useParams();
  const classes = useStyles();
  const theme = useSelector((state) => state.theme.theme);
  console.log({ postId });
  const post = useSelector((state) =>
    state.posts.posts.find((post) => post.id === postId)
  );
  return (
    <div>
      <Card>
        <SinglePostTitle post={post} />
        <SinglePostContent post={post} />
      </Card>
      <Card>
        <SinglePostReactionComponent post={post} />
      </Card>
    </div>
  );
};
