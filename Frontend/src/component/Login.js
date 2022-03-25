import React, { useEffect, useState } from "react";
import "./Login.css";
import loginlogo from "./../imagess/logo2.png";
import { Link } from "react-router-dom";

import axios from "axios";

function Login() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(user);
  };

  const PostData = async (e) => {
    const { email, password } = user;

    axios.defaults.withCredentials = true;

    if (email && password) {
      axios
        .post("http://localhost:3001/login", {
          email: user.email,
          password: user.password,
        })
        .then((response) => {
          console.log("this is from login page", response.data);
          localStorage.setItem("user", JSON.stringify(response.data[0]));

          if (response.data[0]) {
            window.location = "/";
          } else if (response.data.messages) {
            alert(response.data.messages);
          }
        });
    } else {
      alert("please fill the details!!!");
    }
  };

  return (
    <div className="login">
      <Link to="/">
        <img src={loginlogo} className="login__logo" alt="no image found" />
      </Link>

      <div className="login__container">
        <h1>Sign in</h1>
        <form method="POST" action="" onSubmit={handleSubmit}>
          <h5>E-mail</h5>
          <input
            type="text"
            name="email"
            value={user.email}
            onChange={handleChange}
            autoComplete="none"
            autoSave="off"
          />

          <h5>password</h5>
          <input
            type="password"
            name="password"
            value={user.password}
            onChange={handleChange}
            autoComplete="none"
            autoSave="off"
          />

          <button className="login__signInButton" onClick={PostData}>
            Sign In
          </button>
        </form>
        <p>
          By signing-in you agree the terms and conditions of Use & sale .
          please Read the conditions carefully.
        </p>
        <Link to="/register">
          <button className="login__registrationButton">
            Create you Account
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Login;
