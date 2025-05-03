import React, { useState } from "react";
import { register } from "../api/authConection";

export default function Register() {
  const [userName, setUserName] = useState("");
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [image, setImage] = useState(null);

  const handleRegister = async (e) => {
    e.preventDefault();
    console.log("Registering user...");
    const formData = new FormData();
    formData.append("name", name);
    formData.append("lastName", lastName);
    formData.append("userName", userName);
    formData.append("email", email);
    formData.append("password", password);
    formData.append("imagePerfil", image); // image es el archivo seleccionado

    try {
      await register(formData);
    } catch (error) {
      console.error("Registration failed:", error);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <form onSubmit={handleRegister} className="card">
        <div className="card-body items-center text-center bg-amber-200">
          <h2 className="card-title">Register</h2>

          <label className="floating-label">
            <input
              type="text"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              className="input input-md"
              required
              placeholder="username "
            />
            <span className="floating-label">username</span>
          </label>

          <label className="floating-label">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="input input-md"
              required
              placeholder="name"
            />
            <span className="floating-label">name</span>
          </label>

          <label className="floating-label">
            <input
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="input input-md"
              required
              placeholder="lastname"
            />
            <span className="floating-label">lastname</span>
          </label>

          <label className="floating-label">
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="input input-md"
              required
              placeholder="email"
            />
            <span className="floating-label">email</span>
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

          <input
            type="file"
            accept="image/*"
            onChange={(e) => setImage(e.target.files[0])}
          />

          <button type="submit" className="btn btn-neutral btn-outline">
            Register
          </button>
        </div>
      </form>
    </div>
  );
}
