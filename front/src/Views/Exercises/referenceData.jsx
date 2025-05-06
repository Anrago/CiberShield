import React from "react";
import NavExercise from "../../components/navExercise";
import { NavLink } from "react-router";

export default function ReferenceData() {
    return (
        <>
            <NavExercise />
            <div className="flex flex-col items-center justify-center h-screen bg-[var(--colorBase)]">
                <h2 className="text-2xl font-bold mb-4">Coloque los datos solicitados</h2>
                <div className="card  bg-amber-200  mb-4">
                    <div className="card-body">
                        <label className="input">
                            <span className="label">👤</span>
                            <input type="text" placeholder="Nombre" />
                        </label>
                        <label className="input">
                            <span className="label">✉️</span>
                            <input type="text" placeholder="Nombre" />
                        </label>
                        <label className="input">
                            <span className="label">👤</span>
                            <input type="text" placeholder="Nombre" />
                        </label>
                        <NavLink to={"/category"}>Siguiente</NavLink>
                    </div>
                </div>
            </div>
        </>
    )
}