import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [captchaInput, setCaptchaInput] = useState("");
  const [captchaCode, setCaptchaCode] = useState("");

  const navigate = useNavigate();

  // Generate random Captcha Code
  const generateCaptcha = () => {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let randomCaptcha = "";
    for (let i = 0; i < 6; i++) {
      randomCaptcha += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    setCaptchaCode(randomCaptcha);
  };

  useEffect(() => {
    generateCaptcha();
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    if (captchaInput === captchaCode) {
      alert(`Welcome ${username}, proceed to the next screen!`);
      navigate("/login1");
    } else {
      alert("Captcha is incorrect. Please try again.");
      generateCaptcha();
      setCaptchaInput("");
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <img src="./logo.png" alt="Logo" className="logo" />
        <h2>Welcome Back!!</h2>
        <p className="subtitle">Sign in to access your CRM account</p>

        <form onSubmit={handleLogin}>
          <div className="input-group">
            <label>Username</label>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>

          <div className="input-group">
            <label>Password</label>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className="captcha-section">
            <div className="captcha-code">{captchaCode}</div>
            <input
              type="text"
              placeholder="Enter Captcha Code"
              value={captchaInput}
              onChange={(e) => setCaptchaInput(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="login-btn">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
