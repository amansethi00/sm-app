import React, { useEffect, useState } from "react";
import { InputTextField } from "./InputTextField";
import { makeStyles, useMediaQuery } from "@material-ui/core";
import { Box, Button } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { createNewPost } from "./postsSlice";
import { useNavigate } from "react-router-dom";
import { updateHeader } from "../header/headerSlice";
const useStyles = makeStyles({
  root: {
    padding: "1rem",
    paddingTop: "5rem",
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
  const tabletView = useMediaQuery("(max-width:1200px)");
  const mobileView = useMediaQuery("(max-width:666px)");
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
    setInputText("");
    navigate("/home");
  };
  useEffect(() => {
    dispatch(updateHeader({ title: "new post" }));
  }, []);
  return (
    <section
      className={classes.root}
      style={{
        paddingLeft: mobileView ? "" : "19rem",
        paddingRight: tabletView ? "" : "29rem",
      }}
    >
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
