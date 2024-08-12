// LoginForm.js
import axios from "axios";
import React, { useState } from "react";

const LoginForm = ({ setIsLogin, setMember }) => {
  const API_URL = process.env.REACT_APP_HOMEPAGE_API_URL;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    axios
      .post(`${API_URL}/member/login`, {
        email,
        password,
      })
      .then((res) => {
        alert(res.data.message);
        if (res.data.data != null) {
          setIsLogin(true);
          setMember(res.data.data);
        } else {
          setIsLogin(false);
        }
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div className="login-container">
      <h1>Login Page!</h1>
      <form onSubmit={submitHandler}>
        <div>
          <label>Email: </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label>Password: </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">로그인</button>
      </form>
    </div>
  );
};

export default LoginForm;
