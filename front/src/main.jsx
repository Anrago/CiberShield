import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import "./index.css";
import App from "./App.jsx";
import Ransomware from "./Views/Ransomware.jsx";
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

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ransomware" element={<InformativePage />} />
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
        <Route path="/sessionExercise" element={<SessionPreference />}/>
        <Route path="/reference" element={<ReferenceData />} />
        <Route path="/exercise" element={<ExercisePresentation />}/>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
