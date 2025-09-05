import React, { useState } from "react";
import "./LoginPopup.css";
import { RxCross2 } from "react-icons/rx";

const LoginPopup = ({ setShowLogin }) => {
  const [currState, setCurrState] = useState("Login");

  return (
    <div className="login-popup">
      <form className="login-popup-container">
        {/* Popup Header with Title and Close Icon */}
        <div className="login-popup-title">
          <h2>{currState}</h2>
          <RxCross2 className="cross" onClick={() => setShowLogin(false)} />
        </div>

        {/* Input Fields */}
        <div className="login-popup-inputs">
          {currState === "Sign Up" && (
            <input type="text" placeholder="Your name" required />
          )}
          <input type="email" placeholder="Your email" required />
          <input type="password" placeholder="Password" required />hy
        </div>

        {/* Button Text Based on State */}``
        <button type="submit">
          {currState === "Sign Up" ? "Create Account" : "Login"}
        </button>

        {/* Terms and Conditions Checkbox */}
        <div className="login-popup-condition">
          <input type="checkbox" required />
          <p>
            By continuing, I agree to the <a href="#">terms of use</a> & <a href="#">privacy policy</a>.
          </p>
        </div>

        {/* Switch Between Login and Sign Up */}
        <div className="login-popup-switch">
          {currState === "Login" ? (
            <p>
              Don’t have an account?{" "}
              <span onClick={() => setCurrState("Sign Up")}>Sign Up</span>
            </p>
          ) : (
            <p>
              Already have an account?{" "}
              <span onClick={() => setCurrState("Login")}>Login</span>
            </p>
          )}
        </div>
      </form>
    </div>
  );
};

export default LoginPopup;
