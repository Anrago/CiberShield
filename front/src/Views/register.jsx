import React, { useState } from "react";
import { register } from "../api/authConection";
import LetterGlitch from "../Backgrounds/LetterGlitch/LetterGlitch";
import { NavLink } from "react-router";
export default function Register() {
  const [userName, setUserName] = useState("");
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [image, setImage] = useState(null);

  const handleRegister = async (e) => {
    e.preventDefault();
    if (!image) {
      console.error("No se ha seleccionado ninguna imagen");
      // Maneja este caso - puedes mostrar un mensaje o continuar sin imagen
    }
    console.log("Registering user...");
    console.log("Image to upload:", image);
    const formData = new FormData();
    formData.append("name", name);
    formData.append("lastName", lastName);
    formData.append("userName", userName);
    formData.append("email", email);
    formData.append("password", password);
    formData.append("image", image); // Cambiado a "image"

    try {
      await register(formData);
    } catch (error) {
      console.error("Registration failed:", error);
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
      <div className="flex items-center justify-center min-h-screen px-4 relative ">
        <form
          onSubmit={handleRegister}
          className="w-full max-w-md bg-white rounded-lg shadow-lg p-8 space-y-6"
          aria-label="Register form"
        >
          <h2 className="text-3xl font-bold text-center text-gray-800">
            Register
          </h2>

          <div>
            <label
              htmlFor="username"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Username
            </label>
            <input
              id="username"
              type="text"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm bg-gray-50 text-gray-800 focus:outline-none focus:ring-2 focus:ring-amber-500"
              required
              placeholder="Enter a username"
              autoComplete="username"
            />
          </div>

          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              First Name
            </label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm bg-gray-50 text-gray-800 focus:outline-none focus:ring-2 focus:ring-amber-500"
              required
              placeholder="Enter your first name"
              autoComplete="given-name"
            />
          </div>

          <div>
            <label
              htmlFor="lastname"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Last Name
            </label>
            <input
              id="lastname"
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm bg-gray-50 text-gray-800 focus:outline-none focus:ring-2 focus:ring-amber-500"
              required
              placeholder="Enter your last name"
              autoComplete="family-name"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm bg-gray-50 text-gray-800 focus:outline-none focus:ring-2 focus:ring-amber-500"
              required
              placeholder="Enter your email"
              autoComplete="email"
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
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm bg-gray-50 text-gray-800 focus:outline-none focus:ring-2 focus:ring-amber-500"
              required
              placeholder="Create a password"
              autoComplete="new-password"
            />
          </div>

          <div>
            <label
              htmlFor="image"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Profile Image
            </label>
            <input
              id="image"
              type="file"
              accept="image/*"
              onChange={(e) => setImage(e.target.files[0])}
              className="w-full text-sm text-gray-600 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:bg-[#34B08A] file:text-white hover:file:bg-[#34908A]"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#34B08A] text-white font-semibold py-2 rounded-md hover:bg-[#34908A] focus:outline-none focus:ring-2 focus:ring-amber-400 transition duration-200"
          >
            Register
          </button>
        </form>
      </div>
    </>
  );
}
