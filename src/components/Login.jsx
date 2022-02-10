import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";
import { getUser } from "../utils/utils";

const Login = () => {
  const { loggedInUser, setLoggedInUser } = useContext(UserContext);

  const loginHandler = (event) => {
    event.preventDefault();
    let username = event.target.username.value;
    getUser(username).then((res) => {
      setLoggedInUser(res);
    });
  };

  return (
    <div className="form-wrapper">
      <h2 id="welcome">WELCOME</h2>
      <form onSubmit={loginHandler}>
        <label>
          <input id="username" type="text" required />
        </label>
        <button>Login</button>
      </form>
      <Link to="/register">Don't have an account? Create one here</Link>
    </div>
  );
};

export default Login;
