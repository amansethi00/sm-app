import React from "react";
import { IconButton, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useDispatch, useSelector } from "react-redux";
import { incrementReaction, postAreaction } from "./postsSlice";
import { useNavigate, useParams } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  root: {
    light: {
      color: "black",
    },
    dark: {
      color: "white",
    },
  },
  icondark: {
    color: "white",
  },
  iconlight: {
    color: "black",
  },
}));
export const SingleReactionComponent = ({
  Icon,
  count,
  label,
  post,
  reaction,
}) => {
  const theme = useSelector((state) => state.theme.theme);
  const classes = useStyles();
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const { postId } = useParams();
  const handleReactionCount = (reaction) => {
    console.log(reaction);
    switch (reaction) {
      case "comments":
        if (postId) {
          return;
        }
        return navigate(`/posts/${post.id}`);
      default:
        const postIdAndReaction = {
          postId: post.id,
          reaction: reaction,
        };
        dispatch(postAreaction(postIdAndReaction));
      // dispatch(incrementReaction({ id: post.id, reaction }));
    }
  };
  return (
    <IconButton
      className={classes["icon" + theme]}
      aria-label={label ? label : "reaction"}
      size="small"
      onClick={() => handleReactionCount(reaction)}
    >
      <Icon className={classes["icon" + theme]} />
      <Typography style={{ padding: "0.5rem" }} variant="body1">
        {count}
      </Typography>
    </IconButton>
  );
};
