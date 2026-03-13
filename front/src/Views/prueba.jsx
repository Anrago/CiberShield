import { useState } from "react";
import DificultySelector from "../components/dificultySelector";
import ExerciseCard from "../components/exerciseCard";
import DescriptionCard from "../components/descriptionCard";
import { login, register } from "../api/authConection";
import ExerciseSMSCard from "../components/exerciseSMSCard";
import TipsDisplay from "../components/tips";
export default function Prub() {

  const fetchExercise = async (dificulty) => {
    const data = await getExerciseConnection(dificulty);
    if (!data) {
      console.error("No se recibió respuesta del backend");
      return;
    }
    setRespuesta(data);
  };

  const emailExample = {
    Asunto: "Ejemplo de Asunto",
    Remitente: "Ejemplo Remitente",
    Cuerpo: "Hola, soy un mensaje de ejemplo 1 Hola, soy un mensaje de ejemplo 1 Hola, soy un mensaje de ejemplo 1Hola, soy un mensaje de ejemplo 1 Hola, soy un mensaje de ejemplo 1 Hola, soy un mensaje de ejemplo 1Hola, soy un mensaje de ejemplo 1 Hola, soy un mensaje de ejemplo 1 Hola, soy un mensaje de ejemplo 1Hola, soy un mensaje de ejemplo 1 Hola, soy un mensaje de ejemplo 1 Hola, soy un mensaje de ejemplo 1Hola, soy un mensaje de ejemplo 1 Hola, soy un mensaje de ejemplo 1 Hola, soy un mensaje de ejemplo 1Hola, soy un mensaje de ejemplo 1 Hola, soy un mensaje de ejemplo 1 Hola, soy un mensaje de ejemplo 1Hola, soy un mensaje de ejemplo 1 Hola, soy un mensaje de ejemplo 1 Hola, soy un mensaje de ejemplo 1Hola, soy un mensaje de ejemplo 1 Hola, soy un mensaje de ejemplo 1 Hola, soy un mensaje de ejemplo 1Hola, soy un mensaje de ejemplo 1 Hola, soy un mensaje de ejemplo 1 Hola, soy un mensaje de ejemplo 1Hola, soy un mensaje de ejemplo 1 Hola, soy un mensaje de ejemplo 1 Hola, soy un mensaje de ejemplo 1Hola, soy un mensaje de ejemplo 1 Hola, soy un mensaje de ejemplo 1 Hola, soy un mensaje de ejemplo 1Hola, soy un mensaje de ejemplo 1 Hola, soy un mensaje de ejemplo 1 Hola, soy un mensaje de ejemplo 1Hola, soy un mensaje de ejemplo 1 Hola, soy un mensaje de ejemplo 1 Hola, soy un mensaje de ejemplo 1Hola, soy un mensaje de ejemplo 1 Hola, soy un mensaje de ejemplo 1 Hola, soy un mensaje de ejemplo 1Hola, soy un mensaje de ejemplo 1 Hola, soy un mensaje de ejemplo 1 Hola, soy un mensaje de ejemplo 1Hola, soy un mensaje de ejemplo 1 Hola, soy un mensaje de ejemplo 1 Hola, soy un mensaje de ejemplo 1Hola, soy un mensaje de ejemplo 1 Hola, soy un mensaje de ejemplo 1 Hola, soy un mensaje de ejemplo 1Hola, soy un mensaje de ejemplo 1 Hola, soy un mensaje de ejemplo 1 Hola, soy un mensaje de ejemplo 1Hola, soy un mensaje de ejemplo 1 Hola, soy un mensaje de ejemplo 1 Hola, soy un mensaje de ejemplo 1Hola, soy un mensaje de ejemplo 1 Hola, soy un mensaje de ejemplo 1 Hola, soy un mensaje de ejemplo 1Hola, soy un mensaje de ejemplo 1 Hola, soy un mensaje de ejemplo 1 Hola, soy un mensaje de ejemplo 1Hola, soy un mensaje de ejemplo 1 Hola, soy un mensaje de ejemplo 1 Hola, soy un mensaje de ejemplo 1Hola, soy un mensaje de ejemplo 1 Hola, soy un mensaje de ejemplo 1 Hola, soy un mensaje de ejemplo 1Hola, soy un mensaje de ejemplo 1 Hola, soy un mensaje de ejemplo 1 Hola, soy un mensaje de ejemplo 1Hola, soy un mensaje de ejemplo 1 Hola, soy un mensaje de ejemplo 1 Hola, soy un mensaje de ejemplo 1Hola, soy un mensaje de ejemplo 1 Hola, soy un mensaje de ejemplo 1 Hola, soy un mensaje de ejemplo 1Hola, soy un mensaje de ejemplo 1 Hola, soy un mensaje de ejemplo 1 Hola, soy un mensaje de ejemplo 1Hola, soy un mensaje de ejemplo 1 Hola, soy un mensaje de ejemplo 1 Hola, soy un mensaje de ejemplo 1Hola, soy un mensaje de ejemplo 1 Hola, soy un mensaje de ejemplo 1 Hola, soy un mensaje de ejemplo 1Hola, soy un mensaje de ejemplo 1 Hola, soy un mensaje de ejemplo 1 Hola, soy un mensaje de ejemplo 1Hola, soy un mensaje de ejemplo 1 Hola, soy un mensaje de ejemplo 1 Hola, soy un mensaje de ejemplo 1Hola, soy un mensaje de ejemplo 1 Hola, soy un mensaje de ejemplo 1 Hola, soy un mensaje de ejemplo 1Hola, soy un mensaje de ejemplo 1 Hola, soy un mensaje de ejemplo 1 Hola, soy un mensaje de ejemplo 1Hola, soy un mensaje de ejemplo 1 Hola, soy un mensaje de ejemplo 1 Hola, soy un mensaje de ejemplo 1Hola, soy un mensaje de ejemplo 1 Hola, soy un mensaje de ejemplo 1 Hola, soy un mensaje de ejemplo 1Hola, soy un mensaje de ejemplo 1 Hola, soy un mensaje de ejemplo 1 Hola, soy un mensaje de ejemplo 1Hola, soy un mensaje de ejemplo 1 Hola, soy un mensaje de ejemplo 1 Hola, soy un mensaje de ejemplo 1Hola, soy un mensaje de ejemplo 1 Hola, soy un mensaje de ejemplo 1 Hola, soy un mensaje de ejemplo 1",
    Categoria: "Phishing",
    Descripcion: "Descripción del ejercicio",
    perfil: "https://mwyxcfbqgyoarrgxrevn.supabase.co/storage/v1/object/public/img-cibershield/users/GenericUSer.png"
  }
  return (
    <>
      <TipsDisplay />
    </>

  );
}
