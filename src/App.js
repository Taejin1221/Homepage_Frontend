import React, { useState } from "react";

import JoinForm from "./components/JoinForm";
import LoginForm from "./components/LoginForm";

const App = () => {
  const [activePage, setActivePage] = useState(null);
  const [isLogin, setIsLogin] = useState(false);
  const [member, setMember] = useState(null);

  const showLoginPage = () => {
    setActivePage("Login");
  };

  const showJoinPage = () => {
    setActivePage("Join");
  };

  return (
    <div className="App">
      {isLogin ? (
        <div>
          <h1>Hello {`${member.nickname}`}</h1>
        </div>
      ) : (
        <div>
          <button onClick={showLoginPage}>Login?</button>
          <button onClick={showJoinPage}>Join?</button>

          {activePage === "Login" && (
            <LoginForm setIsLogin={setIsLogin} setMember={setMember} />
          )}
          {activePage === "Join" && <JoinForm />}
        </div>
      )}
    </div>
  );
};

export default App;
