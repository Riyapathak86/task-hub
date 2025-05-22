import React from "react";
import { useState } from "react";
const Login = ({ handleClick }) => {
  const [email, setemail] = useState(" ");
  const [password, setpassword] = useState("");
  const handleEmail = (e) => {
    setemail(e.target.value);
  };
  const handlePassword = (e) => {
    console.log("Typing password:", e.target.value);
    setpassword(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setemail("");
    setpassword("");
    handleClick(email, password);

    console.log("email:", email, "password:", password);
  };

  return (
    <>
      <div
        style={{
          minHeight: "15vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background: "#36393e",
        }}
      >
        <h1
          style={{
            fontFamily: "'Great Vibes', cursive",
            fontSize: "3rem",
            color: "blue",
            textShadow: " 6px 6px 6px rgba(24, 121, 73, 0.7)",
          }}
        >
          Task Management System
        </h1>
      </div>
      <div className="d-flex justify-content-center align-items-center vh-100 bg-dark">
        <div className="p-4 rounded" style={{ width: "300px" }}>
          <form onSubmit={submitHandler} autoComplete="off">
            <div className="mb-3">
              <input
                type="email"
                className="form-control text-center border-success rounded-pill bg-transparent text-white"
                placeholder="Enter your email"
                value={email}
                onChange={handleEmail}
                autoComplete="off"
              />
            </div>
            <div className="mb-3">
              <input
                type="password"
                className="form-control text-center border-success rounded-pill bg-transparent text-white"
                placeholder="Enter password"
                value={password}
                onChange={handlePassword}
              />
            </div>
            <div className="d-grid">
              <button
                type="submit"
                className="btn btn-success rounded-pill fw-bold"
              >
                Log in
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
