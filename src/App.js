import React from "react";
import logo from "./logo.svg";
import {Counter} from "./features/counter/Counter";
import {Header} from "./features/header/Header";
import "./App.css";
import {Routes, Route} from "react-router-dom";
import {PostsList} from "./features/posts/PostsList";
function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<PostsList />} />
      </Routes>
    </div>
  );
}

export default App;
