import React from "react";
import { useSelector } from "react-redux";
import { CardContent } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
const useStyles = makeStyles({
  cardContentlight: {
    color: "black",
    paddingTop: "0rem",
  },
  cardContentdark: {
    color: "white",
    paddingTop: "0rem",
  },
});
export const SinglePostContent = ({ post }) => {
  console.log("single psot content", { post });
  const theme = useSelector((state) => state.theme.theme);
  const classes = useStyles();
  const typographyColors = {
    light: {
      color: "black",
    },
    dark: {
      color: "white",
    },
  };
  return (
    <CardContent className={classes["cardContent" + theme]}>
      <Typography
        style={{ color: typographyColors[theme].color }}
        variant="body2"
      >
        {post.content}
      </Typography>
    </CardContent>
  );
};
