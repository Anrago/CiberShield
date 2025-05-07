import React from "react";
import Modal from "./modal";
export default function ExerciseCard({ message, setOptions }) {
  return (
    <div className="card shadow-2xl bg-[#E0F2E9] border border-gray-300 rounded-md max-w-2xl mx-auto my-4">
      <div className="card-body p-6">
        <div className="mb-4 border-b pb-2">
          <h2 className="text-xl font-semibold text-gray-800">
            {message.Asunto}
          </h2>
          <p className="text-sm text-gray-500">De: {message.Remitente}</p>
        </div>
        <div className="mb-6 text-gray-700 whitespace-pre-line">
          {message.Cuerpo}
        </div>
        <div className="flex justify-center gap-4">
          <button
            onClick={() => document.getElementById("my_modal_3").showModal()}
            className="btn btn-outline btn-error"
          >
            Falso
          </button>
          <button
            onClick={() => document.getElementById("my_modal_3").showModal()}
            className="btn btn-outline btn-success"
          >
            Verdadero
          </button>
        </div>
      </div>

      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h3 className="font-bold text-lg">Hello!</h3>
          <p className="py-4">{message.Descripcion}</p>
        </div>
      </dialog>
    </div>
  );
}
