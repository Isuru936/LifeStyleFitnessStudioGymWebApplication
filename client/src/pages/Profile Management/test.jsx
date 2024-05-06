import React, { useState } from "react";

const LoginPage = () => {
  const [showLoginForm, setShowLoginForm] = useState(true);

  const toggleForm = () => {
    setShowLoginForm(!showLoginForm);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-900 to-blue-500">
      <div className="w-96">
        <div className="bg-black bg-opacity-50 shadow-lg rounded-lg p-8">
          <div className="text-center">
            <h2 className="text-white text-2xl mb-8">
              {" "}
              {showLoginForm ? "Login" : "Register"}
            </h2>
          </div>
          <form className={showLoginForm ? "" : "hidden"}>
            <input
              type="text"
              placeholder="Username"
              className="input-field"
              required
            />
            <input
              type="password"
              placeholder="Password"
              className="input-field"
              required
            />
            <button className="btn" type="submit">
              Sign in
            </button>
            <p className="message">
              Not registered?{" "}
              <button
                className="text-blue-500 underline"
                type="button"
                onClick={toggleForm}
              >
                Create an account
              </button>
            </p>
          </form>
          <form className={showLoginForm ? "hidden" : ""}>
            <input
              type="text"
              placeholder="Full Name"
              className="input-field"
              required
            />
            <input
              type="text"
              placeholder="Username"
              className="input-field"
              required
            />
            <input
              type="email"
              placeholder="Email"
              className="input-field"
              required
            />
            <input
              type="password"
              placeholder="Password"
              className="input-field"
              required
            />
            <button className="btn" type="submit">
              Create
            </button>
            <p className="message">
              Already registered?{" "}
              <button
                className="text-blue-500 underline"
                type="button"
                onClick={toggleForm}
              >
                Sign In
              </button>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
