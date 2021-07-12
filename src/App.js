import React from "react";
import logo from "./logo.svg";
import { Header } from "./features/header/Header";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { PostsList, SinglePost } from "./features/posts";
import { themes } from "./features/themes/getTheme";
import { useTheme } from "@material-ui/core";
import { useSelector } from "react-redux";
import { InputPost } from "./features/posts/InputPost";
import { Homepage } from "./Homepage";
import { UserProfile } from "./features/user/UserProfile";
function App() {
  const { theme } = useSelector((state) => state.theme);
  return (
    <div className="App" style={{ backgroundColor: themes[theme].secondary }}>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/:username" element={<UserProfile />} />
        <Route path="/posts/:postId" element={<SinglePost />} />
        <Route path="/compose/post" element={<InputPost />} />
      </Routes>
    </div>
  );
}

export default App;
