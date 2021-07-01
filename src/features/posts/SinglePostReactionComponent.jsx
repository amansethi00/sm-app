import React from "react";
import { CardActions } from "@material-ui/core";
import { SingleReactionComponent } from "./SingleReactionComponent";
import { SentimentVeryDissatisfied } from "@material-ui/icons";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import { useDispatch, useSelector } from "react-redux";
import { incrementReaction } from "./postsSlice";
export const SinglePostReactionComponent = ({ post }) => {
  const dispatch = useDispatch();

  return (
    <CardActions
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
      }}
    >
      <SingleReactionComponent
        Icon={FavoriteBorderIcon}
        label={"favourite icon"}
        count={post.reactions["heart"]}
        post={post}
        reaction="heart"
      />
      <SingleReactionComponent
        Icon={SentimentVeryDissatisfied}
        label={"sad icon"}
        reaction="cry"
        post={post}
        count={post.reactions["cry"]}
      />
      <SingleReactionComponent
        Icon={ChatBubbleOutlineIcon}
        label={"comment icon"}
        reaction="comments"
        post={post}
        count={post.reactions.comments}
      />
    </CardActions>
  );
};
