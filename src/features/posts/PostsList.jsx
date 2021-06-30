import React from "react";
import Card from "@material-ui/core/Card";
import { useSelector } from "react-redux";
import { themes } from "../themes/getTheme";
import { makeStyles } from "@material-ui/core/styles";
import { red } from "@material-ui/core/colors";
import { Link } from "react-router-dom";
import { SinglePostTitle } from "./SinglePostTitle";
import { SinglePostReactionComponent } from "./SinglePostReactionComponent";
import { SinglePostContent } from "./SinglePostContent";
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
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  avatar: {
    backgroundColor: red[500],
  },
}));
const linkStyle = {
  light: {
    color: "black",
  },
  dark: {
    color: "white",
  },
};

export const PostsList = () => {
  const posts = useSelector((state) => state.posts.posts);
  const theme = useSelector((state) => state.theme.theme);
  const classes = useStyles();

  console.log("theme fomposts", theme);

  const postsRender = posts.map((post) => {
    return (
      <Card className={classes["root" + theme]}>
        <SinglePostTitle post={post} />
        <Link
          to={`/posts/${post.id}`}
          style={{ textDecoration: "none", color: linkStyle[theme].color }}
        >
          <SinglePostContent post={post} />
        </Link>
        <SinglePostReactionComponent post={post} />
      </Card>
    );
  });
  return (
    <section backgroundColor={themes[theme].secondary}>{postsRender}</section>
  );
};
