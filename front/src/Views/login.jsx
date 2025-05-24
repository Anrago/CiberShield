import React, { useState } from "react";
import { login, getProfile } from "../api/authConection";
import LetterGlitch from "../Backgrounds/LetterGlitch/LetterGlitch";
import { NavLink } from "react-router"; // Cambiado a react-router-dom
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
        localStorage.setItem("profile", JSON.stringify(profile)); // Guardar perfil en localStorage
        console.log("Profile:", profile);
      } else {
        console.log("No profile found.");
      }
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  return (
    <>
      <div className="fixed inset-0 z-0">
        <LetterGlitch
          glitchSpeed={100}
          centerVignette={false}
          outerVignette={true}
          smooth={true}
        />
      </div>
      <div className="flex items-center justify-center h-screen  relative z-10">
        <form
          onSubmit={handleLogin}
          className="w-full max-w-md bg-white  shadow-lg shadow-white rounded-lg  p-8 space-y-6"
          aria-label="Login form"
        >
          <h2 className="text-3xl font-bold text-center text-gray-800">
            Login
          </h2>

          <div>
            <label
              htmlFor="username"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Username or Email
            </label>
            <input
              id="username"
              name="username"
              type="text"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm bg-gray-50 text-gray-800 focus:outline-none focus:ring-2 "
              required
              placeholder="Enter your username or email"
              autoComplete="username"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm bg-gray-50 text-gray-800 focus:outline-none focus:ring-2 focus:ring-amber-500"
              required
              placeholder="Enter your password"
              autoComplete="current-password"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#34908A] text-white font-semibold py-2 rounded-md hover:s focus:outline-none focus:ring-2 focus:ring-amber-400 transition duration-200"
          >
            Login
          </button>
        </form>
      </div>
    </>
  );
}
