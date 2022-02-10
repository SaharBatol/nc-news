import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";

const Login = () => {
  const { loggedInUser, setLoggedInUser } = useContext(UserContext);

  const loginHandler = (event) => {
    event.preventDefault();
    setLoggedInUser(event.target.username.value);
  };
  return (
    <div className="form-wrapper">
      <form onSubmit={loginHandler}>
        <label>
          <input id="username" type="text" />
        </label>
        <button>Submit</button>
      </form>
      <Link to="/register">Dont have an account? Create one here</Link>
    </div>
  );
};

export default Login;
