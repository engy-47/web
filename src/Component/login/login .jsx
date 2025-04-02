import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { FaFacebookF, FaGoogle } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import "./login.css";


const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    const userData = { email, token: "fake-jwt-token" };
    localStorage.setItem("user", JSON.stringify(userData));
    alert("Login Successful!");
  };

  return (
    <div className="login">
      <div className="contact-header">
        <Container>
          <h2 className="contact-title">Login</h2>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="/">Home</a>
              </li>
              <li className="breadcrumb-item">
                <a href="/products">Products</a>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Login
              </li>
            </ol>
          </nav>
        </Container>
      </div>
      <div className="login-container">
        <div className="login-box">
          <h2 className="text-center fw-bold">Login</h2>

          <form onSubmit={handleLogin}>
            <div className="mb-3">
              <input
                type="email"
                className="form-control"
                placeholder="Your Email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <input
                type="password"
                className="form-control"
                placeholder="Password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="d-flex justify-content-between align-items-center mb-3">
              <div>
                <input type="checkbox" id="rememberMe" />
                <label htmlFor="rememberMe" className="ms-2">
                  Remember me
                </label>
              </div>
              <a href="#" className="forgot-password">
                Forgot password?
              </a>
            </div>
            <button type="submit" className="btn btn-danger w-100">
              Log In
            </button>
          </form>
          <div className="separator">OR</div>
          <div className="social-login">
            <button className="btn btn-primary w-100 mb-2">
              <FaFacebookF className="me-2" /> Login with Facebook
            </button>
            <button className="btn btn-danger w-100">
              <FaGoogle className="me-2" /> Login with Google
            </button>
          </div>

          <p className="text-center mt-3">
            Don't have an account? <a href="#">Sign up now</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;



