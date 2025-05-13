import React, { use, useEffect } from "react";
import NavExercise from "../../components/navExercise";
import { NavLink } from "react-router";

export default function ReferenceData() {
  const [data, setData] = React.useState({
    name: "",
    email: "",
    phone: "",
  });

  useEffect(() => {
    localStorage.setItem("referenceData", JSON.stringify(data));
  }, [data]);

  return (
    <>
      <NavExercise />
      <div className="flex flex-col items-center justify-center min-h-screen px-4">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
          Coloque los datos solicitados
        </h2>

        <div className="w-full max-w-md bg-[#f3f4f6] rounded-lg shadow-lg p-8 space-y-5">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Nombre
            </label>
            <div className="flex items-center border border-gray-300 rounded-md bg-white">
              <span className="px-3 text-gray-500">👤</span>
              <input
                id="name"
                type="text"
                placeholder="Nombre"
                value={data.name}
                onChange={(e) => setData({ ...data, name: e.target.value })}
                className="w-full py-2 pr-4 bg-transparent text-gray-800 focus:outline-none"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Email
            </label>
            <div className="flex items-center border border-gray-300 rounded-md bg-white">
              <span className="px-3 text-gray-500">✉️</span>
              <input
                id="email"
                type="email"
                placeholder="Correo electrónico"
                value={data.email}
                onChange={(e) => setData({ ...data, email: e.target.value })}
                className="w-full py-2 pr-4 bg-transparent text-gray-800 focus:outline-none"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Número telefónico
            </label>
            <div className="flex items-center border border-gray-300 rounded-md bg-white">
              <span className="px-3 text-gray-500">📞</span>
              <input
                id="phone"
                type="tel"
                placeholder="Número telefónico"
                value={data.phone}
                onChange={(e) => setData({ ...data, phone: e.target.value })}
                className="w-full py-2 pr-4 bg-transparent text-gray-800 focus:outline-none"
              />
            </div>
          </div>

          <NavLink
            to="/category"
            className="block w-full text-center bg-amber-400 text-white font-semibold py-2 rounded-md hover:bg-amber-500 transition duration-200"
          >
            Siguiente
          </NavLink>
        </div>
      </div>
    </>
  );
}
