import { useState, useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import User from "./components/User";
import Articles from "./components/Articles";
import EachArticle from "./components/EachArticle";
import Register from "./components/Register";
import Login from "./components/Login";
import { UserContext } from "./contexts/UserContext";
function App() {
  const { loggedInUser, SetLoggedInUser } = useContext(UserContext);
  const loginHandler = () => {
    return Object.keys(loggedInUser).length ? (
      <Routes>
        <Route path="/user" element={<User />} />
        <Route path="/" element={<Articles />} />
        <Route path="/articles/:article_id" element={<EachArticle />} />
      </Routes>
    ) : (
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    );
  };
  return (
    <BrowserRouter>
      <div className="App">
        <h1>NC News</h1>
        {loginHandler()}
      </div>
    </BrowserRouter>
  );
}

export default App;
