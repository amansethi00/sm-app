import React, { useEffect, useState } from "react";
import { InputTextField } from "./InputTextField";
import { makeStyles } from "@material-ui/core";
import { Box, Button } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { addPost, createNewPost } from "./postsSlice";
import { useNavigate } from "react-router-dom";
import { updateHeader } from "../header/headerSlice";
const useStyles = makeStyles({
  root: {
    padding: "1rem",
    paddingTop: "4rem",
    display: "flex",
    flexDirection: "column",
  },
  button: {
    marginTop: "0.5rem",
    borderRadius: "2rem ",
  },
});
export const InputPost = () => {
  const [inputText, setInputText] = useState("");
  const classes = useStyles();
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const inputPostHandler = async () => {
    let rule = /^\s*$/;
    if (rule.exec(inputText)) {
      return;
    }
    console.log("dsfhjsfbhj");
    const post = {
      content: inputText,
      author: user.name,
      username: user.username,
    };
    dispatch(createNewPost(post));

    // dispatch(
    //   addPost({
    //     post: {
    //       content: inputText,
    //       author: user.name,
    //       username: user.username,
    //     },
    //   })
    // );
    setInputText("");
    navigate("/");
  };
  useEffect(() => {
    dispatch(updateHeader({ title: "new post" }));
  }, []);
  return (
    <section className={classes.root} style={{ paddingLeft: "18rem" }}>
      <InputTextField inputText={inputText} setInputText={setInputText} />
      <Box justifyContent="flex-end" alignSelf="flex-end">
        <Button
          color="primary"
          variant="contained"
          className={classes.button}
          onClick={inputPostHandler}
        >
          Post
        </Button>
      </Box>
    </section>
  );
};
