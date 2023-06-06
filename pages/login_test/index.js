import React, { useState } from "react";
import { Input, SubmitButton } from "../../styles/login_test"; //Import your styled-components

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Authentication logic goes here
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <Input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </label>
        <label>
          Password:
          <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        {error && <div style={{ color: "red" }}>{error}</div>}
        <SubmitButton type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default LoginPage;
