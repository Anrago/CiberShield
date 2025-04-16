import React from "react";

export default function ExerciseCard({ message, setOptions }) {
  return (
    <div className="message-view">
      <h2>{message.Asunto}</h2>
      <p>{message.Remitente}</p>
      <p>{message.Cuerpo}</p>
      <button onClick={() => setOptions(false)}>Falso</button>
      <button onClick={() => setOptions(true)}>Verdadero</button>
    </div>
  );
}
