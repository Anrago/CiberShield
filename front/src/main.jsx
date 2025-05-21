import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import { AnimatePresence } from "framer-motion";
import "./index.css";
import App from "./App.jsx";
import Home from "./Views/home.jsx";
import InformativePage from "./Views/informativePage.jsx";
import Login from "./Views/login.jsx";
import Register from "./Views/register.jsx";
import Profile from "./Views/profile.jsx";
import ProtectedRoute from "./components/protectedRoutes.jsx";
import CategorySelection from "./Views/Exercises/categorySelection.jsx";
import DificultySelector from "./Views/Exercises/dificultySelector.jsx";
import SessionPreference from "./Views/Exercises/sessionPreference.jsx";
import ReferenceData from "./Views/Exercises/referenceData.jsx";
import ExercisePresentation from "./Views/Exercises/exercisePresentation.jsx";
import Footer from "./layouts/footer.jsx";
import Prueba from "./Views/prueba.jsx";

import Ransomware from "./Views/Informative/ransomware.jsx";
import Spyware from "./Views/Informative/spyware.jsx";
import Virus from "./Views/Informative/virus.jsx";
import Worm from "./Views/Informative/Worm.jsx";
import Phishing from "./Views/Informative/phishing.jsx";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <AnimatePresence>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/home" element={<Home />} />
          <Route path="/info/malware" element={<InformativePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }
          />
          <Route path="/category" element={<CategorySelection />}></Route>
          <Route path="/dificulty" element={<DificultySelector />} />
          <Route path="/sessionExercise" element={<SessionPreference />} />
          <Route path="/reference" element={<ReferenceData />} />
          <Route path="/exercise" element={<ExercisePresentation />} />
          <Route path="/prueba" element={<Prueba></Prueba>} />
          <Route path="/info/malware/ransomware" element={<Ransomware />} />
          <Route path="/info/malware/spyware" element={<Spyware />} />
          <Route path="/info/malware/virus" element={<Virus />} />
          <Route path="/info/malware/worm" element={<Worm />} />
          <Route path="/info/ingenieria-social/phishing" element={<Phishing />} />
        </Routes>
      </AnimatePresence>
    </BrowserRouter>
    <Footer />
  </StrictMode>
);
