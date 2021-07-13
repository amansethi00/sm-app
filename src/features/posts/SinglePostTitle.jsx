import React from "react";
import { CardHeader, Avatar, IconButton, makeStyles } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import { useSelector } from "react-redux";
import { red, green, blue } from "@material-ui/core/colors";
import { Link } from "react-router-dom";
const useStyles = makeStyles({
  linkStyle: {
    textDecoration: "none",
  },
  avatarRed: {
    backgroundColor: red[500],
  },
  avatarBlue: {
    backgroundColor: blue[500],
  },
  avatarGreen: {
    backgroundColor: green[500],
  },
  title: {
    light: { color: "black" },
    dark: { color: "white" },
  },
  titlelight: {
    color: "black",
    paddingBottom: "0rem",
  },
  titledark: {
    color: "white",
  },
  subHeader: {
    light: {
      color: "white",
    },
    dark: {
      color: "white",
    },
  },
});

export const SinglePostTitle = ({ post }) => {
  const theme = useSelector((state) => state.theme.theme);
  const classes = useStyles();
  let avatarBackgroundColors = ["Red", "Blue", "Green"];
  const typographyColors = {
    light: {
      color: "black",
    },
    dark: {
      color: "white",
    },
  };
  return (
    <CardHeader
      avatar={
        <Link className={classes.linkStyle} to={`/${post.username}`}>
          <Avatar
            aria-label="avatar"
            className={
              classes[
                "avatar" + avatarBackgroundColors[Math.floor(Math.random() * 3)]
              ]
            }
          >
            {post.username[0].toUpperCase()}
          </Avatar>
        </Link>
      }
      className={classes.title[theme]}
      action={<IconButton aria-label="settings"></IconButton>}
      title={
        <Link className={classes.linkStyle} to={`/${post.username}`}>
          <Typography style={{ color: typographyColors[theme].color }}>
            {post.author}
          </Typography>
        </Link>
      }
      subheader={
        <Typography
          style={{ color: typographyColors[theme].color }}
          className={classes.subHeader[theme]}
        >
          @{post.username}
        </Typography>
      }
    />
  );
};
