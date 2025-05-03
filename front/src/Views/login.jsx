import React, { useState } from "react";
import { login, getProfile } from "../api/authConection";

export default function Login() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault(); // Este `e` debe estar en los argumentos
    try {
      const token = await login(userName, password);
      localStorage.setItem("token", token);
      
      const profile = await getProfile(); // Obtener perfil después del login
      if (profile) {
        console.log("Profile:", profile);
      } else {
        console.log("No profile found.");
      }
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <form onSubmit={handleLogin} className="card">
        <div className="card-body items-center text-center bg-amber-200">
          <h2 className="card-title">Login</h2>

          <label className="floating-label">
            <input
              type="text"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              className="input input-md"
              required
              placeholder="username or email"
            />
            <span className="floating-label">user or email</span>
          </label>

          <label className="floating-label">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="input input-md"
              required
              placeholder="password"
            />
            <span className="floating-label">Password</span>
          </label>

          <button type="submit" className="btn btn-neutral btn-outline">
            Login
          </button>
        </div>
      </form>
    </div>
  );
}
