import React from "react";
import { Avatar, CardHeader } from "@material-ui/core";
import {
  Card,
  CardMedia,
  Typography,
  Button,
  Box,
  CardContent,
  CardActions,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import { useSelector } from "react-redux";
import { UserFollowerAndFollowing } from "./UserFollowerAndFollowing";
import { UserPosts } from "./UserPosts";
const useStyles = makeStyles((theme) => ({
  rootlight: {
    backgroundColor: "var(--primary)",
  },
  rootdark: {
    backgroundColor: "var(--primary)",
  },
  media: {
    height: 140,
  },
  large: {
    width: theme.spacing(9),
    height: theme.spacing(9),
    position: "absolute",
    top: "6.5rem",
    left: "0.8rem",
    backgroundColor: "#3f51b5",
  },
  header: {
    paddingTop: "2rem",
  },
  headerTypographylight: {
    color: "black",
    fontWeight: "800",
    fontSize: "19px",
    paddingTop: "0.2rem",
    paddingBottom: "0rem",
  },
  headerTypographydark: {
    color: "white",
    fontWeight: "800",
    fontSize: "19px",
    paddingTop: "0.2rem",
    paddingBottom: "0rem",
  },
  subheaderTypographylight: {
    paddingTop: "0rem",
    marginTop: "-0.2rem",
    fontSize: "14px",
    fontWeight: "400",
  },
  subheaderTypographydark: {
    color: "white",
    paddingTop: "0rem",
    marginTop: "-0.2rem",
    fontSize: "14px",
    fontWeight: "400",
  },
  button: {
    borderRadius: "2rem",
    marginTop: "0.5rem",
    marginRight: "0.5rem",
  },
  cardContentlight: {
    paddingTop: "0rem",
    color: "black",
  },
  cardContentdark: {
    paddingTop: "0rem",
    color: "white",
  },
  cardAction: {
    paddingBottom: "0rem",
  },
  cardActionButton: {
    color: "#3f51b5",
    borderBottom: "0.5rem solid #3f51b5",
  },
}));
export const UserInfo = ({ user }) => {
  const theme = useSelector((state) => state.theme.theme);
  const classes = useStyles();
  return (
    <div>
      <Card
        className={classes["root" + theme]}
        style={{ position: "relative" }}
      >
        <CardMedia
          className={classes.media}
          image="https://res.cloudinary.com/devcl4ue8/image/upload/v1625392625/7986cb_ozapxu.png"
          title="Contemplative Reptile"
        />
        <Avatar className={classes.large}>{user.username[0]}</Avatar>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <CardHeader
            className={classes.header}
            title={
              <Typography className={classes["headerTypography" + theme]}>
                {user.name}
              </Typography>
            }
            subheader={
              <Typography
                className={classes["subheaderTypography" + theme]}
              >{`@${user.username}`}</Typography>
            }
          />
          <Box>
            <Button
              variant="outlined"
              color="primary"
              className={classes.button}
            >
              Edit Profile
            </Button>
          </Box>
        </div>
        <CardContent className={classes["cardContent" + theme]}>
          <Typography
            className={classes["cardContent" + theme]}
            variant="body2"
            color="textSecondary"
            component="p"
          >
            This impressive paella is a perfect party dish and a fun meal to
            cook together with your guests. Add 1 cup of frozen peas along with
            the mussels, if you like.
          </Typography>
          <div
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <UserFollowerAndFollowing
              count={user.following}
              title="following"
            />
            <UserFollowerAndFollowing
              count={user.followers}
              title="followers"
            />
          </div>
        </CardContent>
        <CardActions className={classes.cardAction}>
          <Button className={classes.cardActionButton}>user's posts</Button>
        </CardActions>
      </Card>
      <UserPosts user={user} />
    </div>
  );
};
