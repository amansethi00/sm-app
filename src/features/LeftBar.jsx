import {
  Typography,
  makeStyles,
  Button,
  Card,
  useMediaQuery,
} from "@material-ui/core";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import { NavLink } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
import { useDispatch, useSelector } from "react-redux";
import ExitToAppOutlinedIcon from "@material-ui/icons/ExitToAppOutlined";
import { logOutUser } from "./user/userSlice";
const useStyles = makeStyles({
  rootlight: {
    position: "fixed",
    left: "0rem",
    top: "0rem",
    height: "100vh",
    width: "18rem",
    zIndex: "1999",
    display: "flex",
    flexFlow: "column wrap",
    alignItems: "center",
  },
  rootdark: {
    position: "fixed",
    left: "0rem",
    top: "0rem",
    height: "100vh",
    width: "18rem",
    zIndex: "1999",
    display: "flex",
    flexFlow: "column wrap",
    alignItems: "center",
    backgroundColor: "black",
    borderRight: "1px solid #383C3F",
    color: "white",
  },
  button: {
    width: "10rem",
    borderRadius: "2rem",
    padding: "0.4rem 1rem",
    display: 'flex',
    alignItems: "center"
  },
  title: {
    fontWeight: "800",
    autoCapitalize: "false",
    fontSize: "1.6rem",
  },
  icondark: {
    color: "white",
  },
  navlink: {
    color: "#303F9E",
  },
});
export const LeftBar = () => {
  const classes = useStyles();
  const theme = useSelector((state) => state.theme.theme);
  const mobileView = useMediaQuery("(max-width:666px)");
  const user = useSelector((state) => state.user);
  const header = useSelector((state) => state.header);
  const dispatch = useDispatch();
  console.log({ header: header.title });
  const obj = [
    {
      to: "/home",
      title: "Home",
      icon: <HomeOutlinedIcon fontSize="large" />,
    },
    {
      to: "/search",
      title: "Search",
      icon: <SearchIcon fontSize="large" />,
    },
    {
      to: `/${user.username}`,
      title: "Profile",
      icon: <PersonOutlineIcon fontSize="large" />,
    },
  ];
  const logOutHandler = () => {
    localStorage.removeItem("username");
    dispatch(logOutUser());
  };
  const renderContent = obj.map((row, index) => (
    <NavLink
      style={{
        textDecoration: "none",
        color: theme === "light" ? "black" : "white",
        display: "flex",
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
      }}
      activeStyle={{ color: "#303F9E !important" }}
      to={row.to}
    >
      <Button style={{
        color: theme === "light" ? "black" : "white",
      }} className={classes.button} key={index}>

        <div>{row.icon}</div>

        <Typography variant="h6">{row.title}</Typography>
      </Button>
    </NavLink>
  ));
  return (
    <Card
      className={classes["root" + theme]}
      style={{
        display: mobileView ? "none" : "",
      }}
    >
      <br />
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
          fill="#303F9E"
        />
      </svg>
      <br />

      <div style={{ display: "flex", alignItems: "center", flexFlow: "column wrap", justifyContent: "space-around", height: "15rem" }} >
        {renderContent}

        <NavLink
          style={{
            textDecoration: "none",
            color: theme === "light" ? "black" : "white",
            display: "flex",
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
          }}
          activeStyle={{ color: "#303F9E" }}
          to="/login"
        >
          <Button style={{
            color: theme === "light" ? "black" : "white",
          }} className={classes.button} onClick={logOutHandler}>

            <ExitToAppOutlinedIcon fontSize="large" />
            <Typography variant="h6">Log Out</Typography>
          </Button>
        </NavLink>
      </div>

    </Card >
  );
};
