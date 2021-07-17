import React from "react";
import { Card, Typography, useMediaQuery } from "@material-ui/core";
import { SinglePostTitle } from "./posts/SinglePostTitle";
import { makeStyles } from "@material-ui/styles";
import { useSelector } from "react-redux";
import { FollowOrEditProfileButton } from "./user/FollowOrEditProfileButton";
const useStyles = makeStyles({
  rootlight: {
    position: "fixed",
    top: "5rem",
    right: "7rem",
    width: "18rem",
    display: "flex",
    flexFlow: "column wrap",
    alignItems: "center",
    backgroundColor: "#F6F9F9",
    color: "black",
    paddingTop: "1rem",
    zIndex: "356336",
  },
  rootdark: {
    position: "fixed",
    top: "5rem",
    right: "7rem",
    width: "18rem",
    display: "flex",
    flexFlow: "column wrap",
    alignItems: "center",
    backgroundColor: "#15191D",
    color: "white",
    paddingTop: "1rem",
    zIndex: "356336",
  },
  rowcardlight: {
    display: "flex",
    backgroundColor: "#F6F9F9",
    color: "white",
    // borderBottom: "1px solid #383C3F",
  },
  rowcarddark: {
    display: "flex",
    backgroundColor: "#15191D",
    color: "white",
    borderBottom: "1px solid #383C3F",
  },
  title: {
    fontWeight: "bolder",
  },
  cardlight: {
    // borderBottom: "1px solid #383C3F",
    backgroundColor: "#F6F9F9",
  },
  carddark: {
    backgroundColor: "#15191D",
    borderBottom: "1px solid #383C3F",
  },
  followButton: {
    paddingTop: "0.8rem",
  },
  mainlight: {
    position: "fixed",
    right: "0rem",
    height: "100vh",
    width: "28rem",
    zIndex: "12333",
    borderLeft: "1px solid rgb(239, 243, 244)",
  },
  maindark: {
    position: "fixed",
    right: "0rem",
    height: "100vh",
    width: "28rem",
    zIndex: "12333",
    borderLeft: "1px solid #383C3F",
  },
});
export const RightBar = () => {
  const classes = useStyles();
  const theme = useSelector((state) => state.theme.theme);
  const tabletView = useMediaQuery("(max-width:1200px)");
  return (
    <div style={{ display: tabletView ? "none" : "block" }}>
      <section className={classes["main" + theme]}></section>
      <Card className={classes["root" + theme]}>
        <Typography className={classes.title} variant="h6">
          Who to Follow{" "}
        </Typography>
        <div style={{ alignSelf: "flex-start", width: "100%" }}>
          <Card className={classes["rowcard" + theme]}>
            <SinglePostTitle
              post={{
                username: "dogecoin",
                author: "Doge bhai",
              }}
            />
            <FollowOrEditProfileButton
              className={classes.followButton}
              username={"dogecoin"}
            />
          </Card>
          <Card className={classes["rowcard" + theme]}>
            <SinglePostTitle
              post={{
                username: "max",
                author: "Doge bhai",
              }}
            />
            <FollowOrEditProfileButton
              className={classes.followButton}
              username={"dogecoin"}
            />
          </Card>
        </div>
      </Card>
    </div>
  );
};
