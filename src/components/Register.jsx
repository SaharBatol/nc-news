import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="form-wrapper">
      <h2 id="register">SIGN UP</h2>
      <form>
        <label>
          <input id="name" type="text" required placeholder="Name" />
          <input id="username" type="text" required placeholder="Username" />
          <input id="avatar" type="text" required placeholder="Avatar URL" />
        </label>
        <Link to="/" className="button">
          Register
        </Link>
      </form>
    </div>
  );
};

export default Register;
