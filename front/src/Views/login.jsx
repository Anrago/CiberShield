import React from "react";

export default function Login() {
  return (
    <div className="flex items-center justify-center  h-screen">
      <div className="card">
        <div className="card-body items-center text-center bg-amber-200">
          <h2 className="card-title">Login</h2>
          <label className="floating-label">
            <input
              type="text"
              className="input input-md"
              required
              placeholder="username or email"
            />
            <span className="floating-label">user or email</span>
          </label>

          <label className="floating-label">
            <input
              type="password"
              className="input input-md"
              required
              placeholder="password"
            />
            <span className="floating-label">Password</span>
          </label>  

          <button className="btn btn-neutral btn-outline">Login</button>
        </div>
      </div>
    </div>
  );
}
