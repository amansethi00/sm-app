import React from "react";
import AppBar from "@material-ui/core/AppBar";
import { makeStyles, useMediaQuery } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import HomeIcon from "@material-ui/icons/Home";
import PersonIcon from "@material-ui/icons/Person";
import { Toolbar } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import { Card } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import ExitToAppOutlinedIcon from "@material-ui/icons/ExitToAppOutlined";
import { NavLink } from "react-router-dom";
import { logOutUser } from "./user/userSlice";

const useStyles = makeStyles({
    appBar: {
        position: "fixed !important",
        bottom: "0rem !important",
        zIndex: "100000000",
        height: "3rem",
        width: "100%"
    },
    icon: {
        color: "white"
    },
    toolBar: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
    }
});
export const BottomNavbar = () => {
    const classes = useStyles();
    const user = useSelector((state) => state.user);
    const dispatch = useDispatch();
    const { theme } = useSelector((state) => state.theme);
    console.log("bottom bar", theme);
    const desktopView = useMediaQuery("(min-width:666px)");
    const logOutHandler = () => {
        localStorage.removeItem("username");
        dispatch(logOutUser());
    };
    return (
        <Card position="fixed" className={classes.appBar} style={{ backgroundColor: theme === "light" ? "white" : "black", display: desktopView ? "none" : "" }}>
            <Toolbar className={classes.toolBar} >
                <NavLink activeStyle={{ color: "#303F9E !important", backgroundColor: "" }} to="/home"
                >
                    <IconButton className={classes.icon} style={{ color: theme === "light" ? "black" : "white" }} aria-label="home button"  >
                        <HomeIcon fontSize="large" />
                    </IconButton>
                </NavLink>
                <NavLink activeStyle={{ color: "#303F9E !important", backgroundColor: "" }} to="/search">
                    <IconButton className={classes.icon} style={{ color: theme === "light" ? "black" : "white" }} aria-label="profile">
                        <SearchIcon fontSize="large" />
                    </IconButton>
                </NavLink>
                <NavLink activeStyle={{ color: "#303F9E !important", backgroundColor: "" }} to={`/${user.username}`}>
                    <IconButton className={classes.icon} style={{ color: theme === "light" ? "black" : "white" }} aria-label="profile">
                        <PersonIcon fontSize="large" />
                    </IconButton>
                </NavLink>

                <NavLink activeStyle={{ color: "#303F9E !important", backgroundColor: "" }} to="/login">
                    <IconButton className={classes.icon} style={{ color: theme === "light" ? "black" : "white" }} aria-label="profile" onClick={logOutHandler} >
                        <ExitToAppOutlinedIcon fontSize="large" />
                    </IconButton>
                </NavLink>


            </Toolbar>
        </Card>
    );
};
