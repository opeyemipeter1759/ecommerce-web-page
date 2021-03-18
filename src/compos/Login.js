import React from "react";
import "./Login.css";
import loginlogo from "../compos/images/login-logo.png";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="login">
      <Link to="/">
        <img src={loginlogo} className="login__logo" alt="" />
      </Link>
      <div className="login_container">
        <h1>Sign-in</h1>
        <form>
          <h5>E-mail</h5>
          <input type="email" />
          <h5>Password</h5>
          <input type="password" />

          <button>Sign In </button>
        </form>
        <p>
          By continuing, you agree to
          <Link>Amazon's Conditions</Link>
          of Use and
          <Link> Privacy Notice.</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
