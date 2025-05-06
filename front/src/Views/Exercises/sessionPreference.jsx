import React from "react";
import { NavLink } from "react-router";
import NavExercise from "../../components/navExercise";
export default function SessionPreference() {
  return (
    <>
      <NavExercise />
      <div className="flex flex-col items-center justify-center h-screen bg-[var(--colorBase)]">
        <h2 className="text-2xl font-bold mb-4">Iniciar sesion para practicar?</h2>
        <div className="flex flex-row gap-5 items-center justify-center mb-4">
          <NavLink to={"/login"} className="btn bg-green-300">Si</NavLink>
          <NavLink to={"/reference"} className="btn bg-yellow-300">No</NavLink>
        </div>
      </div>
    </>
  );
}
