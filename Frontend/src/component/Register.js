import React, { useState } from "react";
import { Link } from "react-router-dom";
import loginlogo from "./../imagess/logo2.png";
import "./Register.css";

import Axios from "axios";

function Register() {
  const [user, setUser] = useState({
    username: "",
    phone: "",
    email: "",
    confirmEmail: "",
    password: "",
  });

  const handleInputs = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(user);
  };

  const PostData = async (e) => {
    e.preventDefault();

    const { username, phone, email, confirmEmail, password } = user;
    if (username && phone && email === confirmEmail && password) {
      await Axios.post("http://localhost:3001/register", {
        username: user.username,
        phone: user.phone,
        email: user.email,
        confirmEmail: user.confirmEmail,
        password: user.password,
      }).then((response) => {
        console.log("done", response);

        if (response.data.err) {
          alert(response.data.err.sqlMessage);
        }
        if (!response.data.err) {
          setUser({
            username: "",
            phone: "",
            email: "",
            confirmEmail: "",
            password: "",
          });

          window.location = "/login";
        }
      });
    } else if (email != confirmEmail) {
      alert("Email id does not match!!");
    } else {
      alert("plase fill the details!!");
    }
  };

  return (
    <div className="register">
      <Link to="/">
        <img src={loginlogo} className="login__logo" alt="no image found" />
      </Link>

      <div className="register__container">
        <h1>Sign up</h1>
        <form action="" onSubmit={handleSubmit} method="POST">
          <h5>Username</h5>
          <input
            type="text"
            name="username"
            id=""
            autoComplete="off"
            value={user.username}
            onChange={handleInputs}
          />

          <h5>phone number</h5>
          <input
            type="number"
            pattern="[0-9]{10}"
            autoComplete="off"
            value={user.phone}
            name="phone"
            onChange={handleInputs}
          />

          <h5>E-mail</h5>
          <input
            type="text"
            autoComplete="off"
            name="email"
            value={user.email}
            onChange={handleInputs}
          />

          <h5>confirm E-mail</h5>
          <input
            type="text"
            autoComplete="off"
            name="confirmEmail"
            value={user.confirmEmail}
            onChange={handleInputs}
          />

          <h5>password</h5>
          <input
            type="password"
            name="password"
            autoComplete="off"
            value={user.password}
            onChange={handleInputs}
          />

          <button
            type="submit"
            onClick={PostData}
            className="register__signUpButton"
          >
            Sign Up
          </button>
        </form>

        <div className="goTo_login_page_from_register">
          <p>Already have a acount ?</p>
          <Link to="/login" className="link">
            <strong>sign in</strong>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Register;
