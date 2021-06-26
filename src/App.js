import React from "react";
import logo from "./logo.svg";
import {Counter} from "./features/counter/Counter";
import "./App.css";
import {Routes, Route} from "react-router-dom";
import {PostsList} from "./features/posts/PostsList";
function App() {
  return (
    <div className="App">
      <header className="App-header">Social Med App</header>
      <Routes>
        <Route path="/" element={<PostsList />} />
      </Routes>
    </div>
  );
}

export default App;
