// JoinForm.js
import axios from "axios";
import React, { useState } from "react";

const JoinForm = () => {
  const API_URL = process.env.REACT_APP_HOMEPAGE_API_URL;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nickname, setNickname] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    axios
      .post(`${API_URL}/member/join`, {
        email,
        password,
        nickname,
      })
      .then((res) => {
        alert(res.data.message);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div className="join-container">
      <h1>Join Page!</h1>
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
          <label>Nickname: </label>
          <input
            type="text"
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
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

export default JoinForm;
