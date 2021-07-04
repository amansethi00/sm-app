import React, { useEffect, useState } from "react";
import { InputTextField } from "./InputTextField";
import { makeStyles } from "@material-ui/core";
import { Box, Button } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { addPost } from "./postsSlice";
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
  const inputPostHandler = () => {
    let rule = /^\s*$/;
    if (rule.exec(inputText)) {
      return;
    }
    dispatch(
      addPost({
        post: {
          content: inputText,
          author: user.name,
          username: user.username,
        },
      })
    );
    setInputText("");
    navigate("/");
  };
  useEffect(() => {
    dispatch(updateHeader({ title: "" }));
  }, []);
  return (
    <section className={classes.root}>
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
