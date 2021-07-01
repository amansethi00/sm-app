import React from "react";
import { Grid } from "@material-ui/core";
import { Avatar } from "@material-ui/core";
import { useSelector } from "react-redux";
import { TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { red, green, blue } from "@material-ui/core/colors";
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
    <div className={classes.root}>
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
            className={classes["textField" + theme]}
            multiline
            id="input-with-icon-grid"
            width="75%"
          />
        </Grid>
      </Grid>
    </div>
  );
};
