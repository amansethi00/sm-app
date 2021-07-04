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
import { themes } from "../themes/getTheme";
import Brightness3Icon from "@material-ui/icons/Brightness3";
import Brightness5Icon from "@material-ui/icons/Brightness5";
import { toggleTheme } from "../themes/themeSlice";
import { Link, useNavigate } from "react-router-dom";
import { Avatar } from "@material-ui/core";
import { NavigateBackButton } from "./NavigateBackButton";
const useStyles = makeStyles((theme) => ({
  rootdark: {
    flexGrow: 1,
    backgroundColor: "black",
    color: "white",
  },
  rootlight: {
    flexGrow: 1,
    backgroundColor: "white",
    color: "black",
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
  const dispatch = useDispatch();
  const changeTheme = () => {
    dispatch(toggleTheme());
  };
  console.log("theme from header", theme);
  console.log({ header });
  return (
    <AppBar position="fixed" className={classes["root" + theme]}>
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
    </AppBar>
  );
}
