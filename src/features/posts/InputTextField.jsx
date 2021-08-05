import React, { useRef, useEffect } from "react";
import { Grid, Avatar, makeStyles } from "@material-ui/core";
import { TextField } from "@material-ui/core";
import { red, blue, green } from "@material-ui/core/colors";
import { useSelector } from "react-redux";
const useStyles = makeStyles({
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
  inputPropslight: {
    width: "100%",
    color: "black",
    textAlign: "left",
    paddingTop: "1rem",
  },
  inputPropsdark: {
    width: "100%",
    color: "white",
    paddingTop: "1rem",
  },
});
export const InputTextField = ({ setInputText, inputText }) => {
  const inputE1 = useRef(null);
  let avatarBackgroundColors = ["Red", "Blue", "Green"];
  const classes = useStyles();
  const user = useSelector((state) => {
    console.log(state);
    return state.user;
  });
  const theme = useSelector((state) => state.theme.theme);
  useEffect(() => {
    inputE1.current.focus();
  }, []);
  return (
    <Grid container spacing={1} alignItems="flex-start">
      <Grid item>
        <Avatar
          aria-label="avatar"
          className={
            classes.avatarRed
          }
        >
          {user.username[0]}
        </Avatar>
      </Grid>
      <Grid item style={{ width: "75%" }}>
        <TextField
          onChange={(e) => setInputText(e.target.value)}
          spellCheck="false"
          className={classes["textField" + theme]}
          InputProps={{ className: classes["inputProps" + theme] }}
          multiline
          inputRef={inputE1}
          id="comment input"
          width="75%"
          //   style={{ minHeight: "5rem" }}
          value={inputText}
        />
      </Grid>
    </Grid>
  );
};
