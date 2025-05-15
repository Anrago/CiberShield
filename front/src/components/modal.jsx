import React, { useState } from "react";
import { postExerciseResult } from "../api/exerciseConection";

export default function Modal({ description, onClose, onOptions }) {
  const [title, setTitle] = useState("Correcto");
  let isCorrect;
  const handleClose = () => {
    document.getElementById("my_modal_3").close();
    onClose();
  };

  const handleClick = (selection) => {
    document.getElementById("my_modal_3").showModal();
    isCorrect = onOptions(selection);
    if (isCorrect) {
      setTitle("Correcto");
    } else {
      setTitle("Incorrecto");
    }

    if (localStorage.getItem("token")) {
      postExerciseResult(isCorrect);
    }
    console.log("variable dentro de modal " + isCorrect);
  };
  return (
    <>
      <button
        onClick={() => handleClick(0)}
        className="btn btn-outline btn-error"
      >
        Falso
      </button>
      <button
        onClick={() => handleClick(1)}
        className="btn btn-outline btn-success"
      >
        Verdadero
      </button>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form method="dialog">
            <button
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              onClick={handleClose}
            >
              ✕
            </button>
          </form>
          <h3 className="font-bold text-lg">{title}</h3>
          <p className="py-4">{description}</p>
        </div>
      </dialog>
    </>
  );
}
