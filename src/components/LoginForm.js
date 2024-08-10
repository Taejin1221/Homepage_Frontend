// LoginForm.js
import axios from "axios";
import React, { useState } from "react";
import DisplayMessage from "./DisplayMessage";

const LoginForm = ({ setIsLogin, setMember }) => {
  const API_URL = process.env.REACT_APP_HOMEPAGE_API_URL;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    axios
      .post(`${API_URL}/member/login`, {
        email,
        password,
      })
      .then((res) => {
        setMessage(res.data.message);
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
      <DisplayMessage message={message} setMessage={setMessage} />
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
        <button type="submit">회원가입</button>
      </form>
    </div>
  );
};

export default LoginForm;
