import React from "react";
import NavExercise from "../../components/navExercise";
import { NavLink } from "react-router";
export default function CategorySelection() {
  return (
    <>
      <NavExercise />
      <div className="flex flex-col items-center justify-center h-screen ">
        <h1 className="text-2xl font-bold mb-4">Selecciona una categoria</h1>
        <div className="flex flex-row gap-5 items-center justify-center">
          <NavLink
            to={"/dificulty"}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-200"
          >
            Correo electronico
          </NavLink>
          <NavLink
            to={"/dificulty"}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-200"
          >
            Mensaje de texto
          </NavLink>
        </div>
      </div>
    </>
  );
}

// space-y-4 añade un espacio vertical entre los botones
// space-x-4 añade un espacio horizontal entre los botones
