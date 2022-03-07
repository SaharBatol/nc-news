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
      if (res) {
        setLoggedInUser(res);
        localStorage.setItem("loggedInUser", JSON.stringify(res));
      } else {
        event.target.username.value = "";
      }
    });
  };

  return (
    <div className="form-wrapper">
      <h2 id="welcome">WELCOME</h2>
      <form onSubmit={loginHandler}>
        <label>
          <input id="username" type="text" required placeholder="Username" />
        </label>
        <button>Login</button>
      </form>
      <p>
        Don't have account? Click <Link to="/register">here</Link>
      </p>
    </div>
  );
};

export default Login;
