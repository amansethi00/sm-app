import React, { useEffect, useRef, useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { useDispatch } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import { updateUser } from "./user/userSlice";
import axios from "axios";
import { useNavigate } from "react-router";
import { updateHeader } from "./header/headerSlice";
function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://socialpresence.netlify.app/">
        Social Presence
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    paddingTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
    color: "white",
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
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
}));
export const Login = () => {
  const classes = useStyles();
  const username = useRef(null);
  const password = useRef(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const loginWithGuestCred = () => {
    username.current.value = "guest123";
    password.current.value = "guestpassword";
    toast.info("Logging as guest");
    loginHandler();
    // setTimeout(loginHandler, 1000);
  }
  const loginHandler = async (e) => {
    e?.preventDefault();
    console.log({ password }, { username: username.current.value })
    try {
      const response = await axios.get(
        `https://SocialMedia.amansethi00.repl.co/login/${username.current.value}`, {
        headers: {
          'Authorization': password.current.value
        }
      }
      );
      console.log(response);
      if (response.data.success) {
        toast.success("logged in succesfully");
        const user = response.data.user;
        dispatch(updateUser({ user }));
        localStorage.setItem("username", user.username);
        navigate("/home");
      } else {
        toast.warn(response.data.message);
      }
    } catch (error) {
      toast.warn(error.response.data.message);
    }
  };
  useEffect(() => {
    dispatch(updateHeader({ title: "Login" }));
  }, []);
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Login
        </Typography>
        <form
          className={classes.form}
          noValidate
          onSubmit={(e) => loginHandler(e)}
        >
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="username"
            label="username"
            name="username"
            autoFocus
            inputRef={username}
          // ref={username}
          // onChange={(e) => setUserName(e.target.value)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="password"
            label="password"
            name="password"
            type="password"
            inputRef={password}
          // onChange={(e) => setPassword(e.target.value)}
          />
          {/* <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="name"
            label="name"
            name="name"
            onChange={(e) => setName(e.target.value)}
          /> */}
          {/* <TextField
        variant="outlined"
        margin="normal"
        required
        fullWidth
        name="password"
        label="Password"
        type="password"
        id="password"
        autoComplete="current-password"
      /> */}
          {/* <FormControlLabel
        control={<Checkbox value="remember" color="primary" />}
        label="Remember me"
      /> */}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Log In
          </Button>
          <Grid container>
            <Grid item>
              <Link href="/signup" variant="body2">
                {"Don't have an account yet? Sign In"}
              </Link>
              <Typography id="changecursor" variant="body2" color="primary" onClick={loginWithGuestCred} >
                Login as guest user
              </Typography>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
};
