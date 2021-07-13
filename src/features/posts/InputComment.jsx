import React, { useState } from "react";
import { Grid } from "@material-ui/core";
import { Avatar } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { red, green, blue } from "@material-ui/core/colors";
import { Button } from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";
import { Box } from "@material-ui/core";
import { addComment, createNewComment } from "./postsSlice";
import { InputTextField } from "./InputTextField";
const useStyles = makeStyles((theme) => ({
  root: {
    padding: "1rem",
  },

  buttonlight: {
    borderRadius: "2rem",
    marginTop: "0.5rem",
  },
  buttondark: {
    borderRadius: "2rem",
    marginTop: "0.5rem",
  },
}));
export const InputComment = ({ post }) => {
  const theme = useSelector((state) => state.theme.theme);
  const dispatch = useDispatch();
  const classes = useStyles();
  const [inputComment, setInputComment] = useState("");
  const user = useSelector((state) => {
    console.log(state);
    return state.user;
  });
  console.log({ user });

  const commentHandler = () => {
    if (inputComment !== "") {
      const comment = {
        postId: post.id,
        content: inputComment,
        username: user.username,
        author: user.name,
      };
      dispatch(createNewComment(comment));
      // dispatch(addComment({ id: post.id, comment }));
      setInputComment("");
    }
  };
  return (
    <Box display="flex" flexDirection="row" className={classes.root}>
      <InputTextField setInputText={setInputComment} inputText={inputComment} />
      <Box justifyContent="center" alignSelf="flex-start">
        <Button
          color="primary"
          onClick={commentHandler}
          variant="contained"
          className={classes["button" + theme]}
          endIcon={<SendIcon />}
        >
          Reply
        </Button>
      </Box>
    </Box>
  );
};
