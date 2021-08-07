import React, { useEffect } from "react";
import logo from "./logo.svg";
import { Header } from "./features/header/Header";
import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import { PostsList, SinglePost } from "./features/posts";
import { themes } from "./features/themes/getTheme";
import { useTheme } from "@material-ui/core";
import { useSelector } from "react-redux";
import { InputPost } from "./features/posts/InputPost";
import { Homepage } from "./Homepage";
import { UserProfile } from "./features/user/UserProfile";
import { SignIn } from "./features/Singup";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Login } from "./features/Login";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { updateHeader } from "./features/header/headerSlice";
import { PrivateRoute } from "./PrivateRoute";
import { getUserByUsername } from "./features/user/userSlice";
import { BottomNavbar } from "./features/BottomNavbar";
import { NewHomePage } from "./NewHomePage";
import { LeftBar } from "./features/LeftBar";
import NotFoundPage from "./NotFoundPage";
import { SearchPage } from "./SearchPage";
import { RightBar } from "./features/RightBar";
function App() {
  const { theme } = useSelector((state) => state.theme);
  const dispatch = useDispatch();
  const header = useSelector((state) => state.header);
  useEffect(() => {
    const username = localStorage.getItem("username");
    if (username) {
      console.log(username);
      dispatch(getUserByUsername(username));
    }
  }, []);
  return (
    <>
      <Header />
      {header.title !== "Login" && header.title !== "Signup" && (
        <>
          <LeftBar />
          <RightBar />
        </>
      )}

      <div className="App" style={{ backgroundColor: themes[theme].secondary }}>
        <Routes>
          <Route path="/signup" element={<SignIn />} />
          <Route path="/login" element={<Login />} />
          <PrivateRoute path="/search" element={<SearchPage />} />
          <PrivateRoute path="/home" element={<NewHomePage />} />
          <PrivateRoute path="/" element={<NewHomePage />} />
          <PrivateRoute path="/:username" element={<UserProfile />} />
          <PrivateRoute path="/posts/:postId" element={<SinglePost />} />
          <PrivateRoute path="/compose/post" element={<InputPost />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        <BottomNavbar />
        <ToastContainer
          position="bottom-right"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </div>
    </>
  );
}

export default App;
