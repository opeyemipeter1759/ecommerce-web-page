import React, { useState } from "react";
import "./Login.css";
import loginlogo from "../compos/images/login-logo.png";
import { Link } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const signIn = (e) => {
    e.preventDefault();
  };
  const register = (e) => {
    e.preventDefault();
  };
  return (
    <div className="login">
      <Link to="/">
        <img src={loginlogo} className="login__logo" alt="" />
      </Link>
      <div className="login__container">
        <h1>Sign-in</h1>
        <form>
          <h5>E-mail</h5>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            className="login__signInButton"
            type="submit"
            onClick={signIn}
          >
            Sign In{" "}
          </button>
        </form>
        <p>
          By continuing, you agree to
          <Link>AMAZON's MOCK Conditions</Link>
          of Use and
          <Link> Privacy Notice.</Link>
        </p>
        <button className="login__registerButton" onClick={register}>
          Create your Amazon account
        </button>
      </div>
    </div>
  );
}

export default Login;
