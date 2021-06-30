import React from "react";
import { CardActions } from "@material-ui/core";
import { SingleReactionComponent } from "./SingleReactionComponent";
import { SentimentVeryDissatisfied } from "@material-ui/icons";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";

export const SinglePostReactionComponent = ({ post }) => {
  return (
    <CardActions>
      <SingleReactionComponent
        Icon={FavoriteBorderIcon}
        label={"favourite icon"}
        count={post.reactions["❤"]}
      />
      <SingleReactionComponent
        Icon={SentimentVeryDissatisfied}
        label={"sad icon"}
        count={post.reactions["😭"]}
      />
    </CardActions>
  );
};
