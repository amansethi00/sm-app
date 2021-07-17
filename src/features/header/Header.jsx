import React, { useEffect } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import { fade, makeStyles } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import { useDispatch, useSelector } from "react-redux";
import Brightness3Icon from "@material-ui/icons/Brightness3";
import Brightness5Icon from "@material-ui/icons/Brightness5";
import { toggleTheme } from "../themes/themeSlice";
import { Link, useNavigate } from "react-router-dom";
import { Avatar, useMediaQuery } from "@material-ui/core";
import { NavigateBackButton } from "./NavigateBackButton";
const useStyles = makeStyles((theme) => ({
  rootdark: {
    flexGrow: 1,
    backgroundColor: "black",
    color: "white",
    paddingLeft: "17rem",
    borderBottom: "1px solid #383C3F",
  },
  rootlight: {
    flexGrow: 1,
    backgroundColor: "white",
    color: "black",
    paddingLeft: "17rem",
    borderBottom: "1px solid rgb(239, 243, 244)",

    // display: "flex",
    // justifyContent: "center",
    // alignItems: "center",
  },
  rootmobiledark: {
    flexGrow: 1,
    backgroundColor: "black",
    color: "white",
    borderBottom: "1px solid #383C3F",
  },
  rootmobilelight: {
    flexGrow: 1,
    backgroundColor: "white",
    color: "black",
    borderBottom: "1px solid rgb(239, 243, 244)",

    // display: "flex",
    // justifyContent: "center",
    // alignItems: "center",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    display: "block",
    marginLeft: "1.5rem",
    fontWeight: "bolder",
    // [theme.breakpoints.up("sm")]: {
    //   display: "block",
    // },
  },
  lightModeIcon: {
    color: "white",
  },
  darkModeIcon: {
    color: "black",
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: "1rem ",
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
  small: {
    width: theme.spacing(4),
    height: theme.spacing(4),
    backgroundColor: "#3f51b5",
  },
}));

export function Header() {
  const classes = useStyles();
  const { theme } = useSelector((state) => state.theme);
  const user = useSelector((state) => state.user);
  const header = useSelector((state) => state.header);
  const mobileView = useMediaQuery("(max-width:666px)");
  const tabletView = useMediaQuery("(max-width:1200px)");
  const dispatch = useDispatch();
  const changeTheme = () => {
    dispatch(toggleTheme());
  };
  console.log("theme from header", theme);
  console.log({ header });
  return (
    <AppBar
      position="fixed"
      className={
        mobileView ? classes["rootmobile" + theme] : classes["root" + theme]
      }
      style={{ paddingRight: tabletView ? "" : "28rem", boxShadow: "none" }}
    >
      {(header.title === "Signup" || header.title === "Login") && (
        <Toolbar>
          <>
            <svg
              aria-hidden="true"
              focusable="false"
              width="2em"
              height="3em"
              preserveAspectRatio="xMidYMid meet"
              viewBox="0 0 256 244"
            >
              <path
                d="M177.381 169.733c9.447-.978 16.614-9.122 16.288-18.896c-.325-9.773-8.47-17.592-18.243-17.592h-.651c-10.1.326-17.918 8.796-17.592 18.895c.326 4.887 2.28 9.122 5.212 12.054c-11.076 21.828-28.016 37.791-53.426 51.148c-17.266 9.122-35.183 12.38-53.1 10.1c-14.66-1.955-26.062-8.47-33.23-19.222c-10.424-15.963-11.401-33.23-2.605-50.496c6.19-12.38 15.962-21.502 22.152-26.063c-1.303-4.235-3.258-11.402-4.235-16.614c-47.237 34.207-42.35 80.468-28.016 102.295c10.75 16.29 32.577 26.389 56.684 26.389c6.515 0 13.03-.652 19.546-2.28c41.699-8.145 73.299-32.905 91.216-69.718zm57.336-40.397c-24.759-28.995-61.245-44.958-102.944-44.958h-5.212c-2.932-5.864-9.122-9.774-15.963-9.774h-.652C99.848 74.93 92.03 83.4 92.355 93.5c.326 9.773 8.47 17.592 18.243 17.592h.651c7.167-.326 13.357-4.887 15.963-11.077h5.864c24.759 0 48.214 7.167 69.39 21.176c16.288 10.751 28.016 24.76 34.531 41.7c5.538 13.683 5.212 27.04-.652 38.443c-9.121 17.266-24.432 26.714-44.63 26.714c-13.031 0-25.41-3.91-31.926-6.842c-3.583 3.258-10.099 8.47-14.66 11.729c14.009 6.515 28.343 10.099 42.025 10.099c31.274 0 54.404-17.267 63.2-34.533c9.447-18.896 8.795-51.474-15.637-79.165zM69.225 175.27c.326 9.774 8.47 17.592 18.243 17.592h.652c10.099-.325 17.917-8.796 17.591-18.895c-.325-9.774-8.47-17.592-18.243-17.592h-.651c-.652 0-1.63 0-2.28.325c-13.357-22.153-18.895-46.26-16.94-72.323c1.302-19.547 7.818-36.488 19.22-50.497c9.447-12.054 27.69-17.918 40.07-18.243c34.531-.652 49.19 42.351 50.168 59.618c4.235.977 11.402 3.258 16.289 4.887C189.434 27.366 156.857 0 125.584 0c-29.32 0-56.359 21.176-67.11 52.451c-14.985 41.7-5.212 81.771 13.031 113.372c-1.628 2.28-2.606 5.864-2.28 9.448z"
                fill="#764ABC"
              />
            </svg>
            <Typography style={{ marginLeft: "0.5rem" }} variant="h6">
              Social Presence App
            </Typography>
          </>
        </Toolbar>
      )}
      {header.title !== "Signup" && header.title !== "Login" && (
        <Toolbar>
          {header.title === "Home" ? (
            <Link to={`/${user.username}`}>
              <Avatar className={classes.small} aria-label="avatar">
                {user.username[0].toUpperCase()}
              </Avatar>
            </Link>
          ) : (
            <NavigateBackButton />
          )}

          <Typography className={classes.title} variant="h6" noWrap>
            {header.title}
          </Typography>
          {/* <div className={classes.search}>
  <div className={classes.searchIcon}>
    <SearchIcon />
  </div>
  <InputBase
    placeholder="Search…"
    classes={{
      root: classes.inputRoot,
      input: classes.inputInput,
    }}
    inputProps={{ "aria-label": "search" }}
  />
</div> */}
          {/* {header.title==="signup" || header.} */}
          {theme === "dark" ? (
            <IconButton
              aria-label="light-mode-icon"
              onClick={() => changeTheme()}
              className={classes.lightModeIcon}
            >
              <Brightness5Icon />
            </IconButton>
          ) : (
            <IconButton
              className={classes.darkModeIcon}
              aria-label="dark-mode-icon"
              onClick={() => changeTheme()}
            >
              <Brightness3Icon />
            </IconButton>
          )}
        </Toolbar>
      )}
    </AppBar>
  );
}
