import React from "react";
import logo from "./logo.svg";
import {Counter} from "./features/counter/Counter";
import {Header} from "./features/header/Header";
import "./App.css";
import {Routes, Route} from "react-router-dom";
import {PostsList,SinglePost} from "./features/posts";
import {themes} from "./features/themes/getTheme";
import { useTheme } from "@material-ui/core";
import { useSelector } from "react-redux";
function App() {
  const {theme} = useSelector(state=>state.theme);
  return (
    <div className="App" style={{backgroundColor:themes[theme].secondary,}}>
      <Header />
      <Routes>
        <Route path="/" element={<PostsList />} />
        <Route path="/posts/:postId" element={<SinglePost />} />
      </Routes>
    </div>
  );
}

export default App;
