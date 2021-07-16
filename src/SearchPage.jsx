import React, { useEffect, useState } from "react";
import { updateHeader } from "./features/header/headerSlice";
import { useDispatch, useSelector } from "react-redux";
import {
  TextField,
  InputAdornment,
  makeStyles,
  Typography,
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import { PostsList } from "./features/posts";
import { setPosts } from "./features/posts/postsSlice";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexFlow: "column wrap",
  },
  margin: {
    margin: theme.spacing(1),
    width: "50%",
  },
  center: {
    display: "flex",
    flexFlow: "column wrap",
    alignItems: "center",
  },
  inputPropslight: {
    color: "black",
  },
  inputPropsdark: {
    color: "white",
  },
}));
export const SearchPage = () => {
  const dispatch = useDispatch();
  const [postsToRender, setPostsToRender] = useState("");
  const classes = useStyles();
  const posts = useSelector((state) => state.posts.posts);
  const theme = useSelector((state) => state.theme.theme);
  useEffect(() => {
    dispatch(updateHeader({ title: "Search" }));
  }, []);
  const handleSearch = (e) => {
    if (e.target.value === "") {
      setPostsToRender("");
      return;
    }
    const regex = new RegExp(e.target.value, "i");
    console.log({ posts });
    const matchedPostsWithUsername = posts.filter(
      (post) => post.username.match(regex) || post.content.match(regex)
    );
    setPostsToRender(matchedPostsWithUsername);
  };
  return (
    <section
      className={classes.root}
      style={{ paddingLeft: "18rem", paddingTop: "4rem" }}
    >
      <article className={classes.center}>
        <TextField
          autoFocus
          placeholder="Search in posts"
          className={classes.margin}
          id="input-with-icon-textfield"
          // label="TextField"
          variant="outlined"
          onChange={(e) => handleSearch(e)}
          InputProps={{
            className: classes["inputProps" + theme],
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
        {postsToRender.length === 0 && postsToRender !== "" && (
          <Typography variant="h5">Sorry No users found!!</Typography>
        )}
      </article>

      {postsToRender.length > 0 && <PostsList postsToRender={postsToRender} />}
    </section>
  );
};
