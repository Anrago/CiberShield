import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import { AnimatePresence } from "framer-motion";
import "./index.css";
import App from "./App.jsx";
import Home from "./Views/home.jsx";
import Login from "./Views/login.jsx";
import Register from "./Views/register.jsx";
import Profile from "./Views/profile.jsx";
import ProtectedRoute from "./components/protectedRoutes.jsx";
import TypeSelection from "./Views/Exercises/typeSelection.jsx";
import DificultySelector from "./Views/Exercises/dificultySelector.jsx";
import SessionPreference from "./Views/Exercises/sessionPreference.jsx";
import ReferenceData from "./Views/Exercises/referenceData.jsx";
import ExercisePresentation from "./Views/Exercises/exercisePresentation.jsx";
import Footer from "./layouts/footer.jsx";
import NavBar from "./layouts/NavBar.jsx";

import Malware from "./Views/Informative/malware.jsx";
import Phishing from "./Views/Informative/phishing.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <NavBar />
      <AnimatePresence>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/home" element={<Home />} />
          <Route
            path="/login"
            element={
              <ProtectedRoute is={"auth"}>
                <Login />
              </ProtectedRoute>
            }
          />
          <Route
            path="/register"
            element={
              <ProtectedRoute is={"auth"}>
                <Register />
              </ProtectedRoute>
            }
          />

          <Route
            path="/profile"
            element={
              <ProtectedRoute is={"profile"}>
                <Profile />
              </ProtectedRoute>
            }
          />
          <Route path="/info/malware" element={<Malware />} />
          <Route path="/type" element={<TypeSelection />}></Route>
          <Route path="/dificulty" element={<DificultySelector />} />
          <Route path="/sessionExercise" element={<SessionPreference />} />
          <Route path="/reference" element={<ReferenceData />} />
          <Route path="/exercise" element={<ExercisePresentation />} />
          <Route path="/info/phishing" element={<Phishing />} />
        </Routes>
      </AnimatePresence>
    </BrowserRouter>
    <Footer />
  </StrictMode>
);
