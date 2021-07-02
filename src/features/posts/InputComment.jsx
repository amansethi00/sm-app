import React from "react";
import { Grid } from "@material-ui/core";
import { Avatar } from "@material-ui/core";
import { useSelector } from "react-redux";
import { TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { red, green, blue } from "@material-ui/core/colors";
import { Button } from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";
import { Box } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  root: {
    padding: "1rem",
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
  textFieldlight: {
    width: "100%",
    color: "black",
  },
  textFielddark: {
    width: "100%",
    color: "white",
  },
  buttonlight: {
    borderRadius: "2rem",
  },
  buttondark: {
    borderRadius: "2rem",
  },
}));
export const InputComment = () => {
  const theme = useSelector((state) => state.theme.theme);
  const user = useSelector((state) => {
    console.log(state);
    return state.user;
  });
  console.log({ user });
  let avatarBackgroundColors = ["Red", "Blue", "Green"];
  const classes = useStyles();
  return (
    <Box display="flex" className={classes.root}>
      <Grid container spacing={1} alignItems="flex-start">
        <Grid item>
          <Avatar
            aria-label="avatar"
            className={
              classes[
                "avatar" + avatarBackgroundColors[Math.floor(Math.random() * 3)]
              ]
            }
          >
            {user.username[0]}
          </Avatar>
        </Grid>
        <Grid item style={{ width: "75%" }}>
          <TextField
            spellCheck="false"
            className={classes["textField" + theme]}
            InputProps={{ className: classes["textField" + theme] }}
            multiline
            id="comment input"
            width="75%"
          />
        </Grid>
      </Grid>
      <Box justifyContent="flex-end" alignSelf="flex-end">
        <Button
          // style={{ backgroundColor: "rgb(29, 161, 242)" }}
          color="primary"
          // color="rgb(29, 161, 242)"
          variant="contained"
          className={classes["button" + theme]}
          endIcon={<SendIcon />}
        >
          Reply
        </Button>{" "}
      </Box>
    </Box>
  );
};
