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
      <div className="flex flex-col items-center justify-center h-screen bg-[var(--colorBase)]">
        <h2 className="text-2xl font-bold mb-4">
          Coloque los datos solicitados
        </h2>
        <div className="card  bg-amber-200  mb-4">
          <div className="card-body">
            <label className="input">
              <span className="label">👤</span>
              <input
                type="text"
                placeholder="Nombre"
                onChange={(e) => setData({ ...data, name: e.target.value })}
                value={data.name}
              />
            </label>
            <label className="input">
              <span className="label">✉️</span>
              <input
                type="email"
                placeholder="email"
                onChange={(e) => setData({ ...data, email: e.target.value })}
                value={data.email}
              />
            </label>
            <label className="input">
              <span className="label">👤</span>
              <input
                type='tel'
                placeholder="numero telefonico"
                onChange={(e) => setData({ ...data, phone: e.target.value })}
                value={data.phone}
              />
            </label>
            <NavLink to={"/category"}  >Siguiente</NavLink>
          </div>
        </div>
      </div>
    </>
  );
}
