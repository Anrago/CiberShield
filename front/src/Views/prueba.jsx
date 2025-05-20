import { useState } from "react";
import DificultySelector from "../components/dificultySelector";
import ExerciseCard from "../components/exerciseCard";
import DescriptionCard from "../components/descriptionCard";
import { login, register } from "../api/authConection";
import ExerciseSMSCard from "../components/exerciseSMSCard";
export default function Prub() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [username, setUsername] = useState("");
  const [token, setToken] = useState(null);
  const [respuesta, setRespuesta] = useState(null);
  const [options, setOptions] = useState(null);

  const fetchExercise = async (dificulty) => {
    const data = await getExerciseConnection(dificulty);
    if (!data) {
      console.error("No se recibió respuesta del backend");
      return;
    }
    setRespuesta(data);
  };
  const ExerciseCard = {
    Numero: "123456789",
    Remitente: "Ejemplo Remitente",
    Message: {
      message1: "Hola, soy un mensaje de ejemplo 1 Hola, soy un mensaje de ejemplo 1 Hola, soy un mensaje de ejemplo 1", 
      message2: "¿Cómo estás?",
      message3: "¿Necesitas ayuda?",
      message4: "Hola, soy un mensaje de ejemplo 2 Hola, soy un mensaje de ejemplo 2 Hola, soy un mensaje de ejemplo 2",
      message5: "Hola, soy un mensaje de ejemplo 3 Hola, soy un mensaje de ejemplo 3 Hola, soy un mensaje de ejemplo 3",
      message6: "Hola, soy un mensaje de ejemplo 4 Hola, soy un mensaje de ejemplo 4 Hola, soy un mensaje de ejemplo 4",
      message7: "Hola, soy un mensaje de ejemplo 5 Hola, soy un mensaje de ejemplo 5 Hola, soy un mensaje de ejemplo 5",
      message8: "Hola, soy un mensaje de ejemplo 6 Hola, soy un mensaje de ejemplo 6 Hola, soy un mensaje de ejemplo 6",
      message9: "Hola, soy un mensaje de ejemplo 7 Hola, soy un mensaje de ejemplo 7 Hola, soy un mensaje de ejemplo 7",
      message10: "Hola, soy un mensaje de ejemplo 8 Hola, soy un mensaje de ejemplo 8 Hola, soy un mensaje de ejemplo 8",
      message11: "Hola, soy un mensaje de ejemplo 9 Hola, soy un mensaje de ejemplo 9 Hola, soy un mensaje de ejemplo 9",
    },
  };
  return (
    <>
      hola
      <ExerciseSMSCard exercise={ExerciseCard} />
    </>
    // <div>
    //   <DificultySelector setExercise={fetchExercise} />
    //   {respuesta ? (
    //     options === null ? (
    //       <ExerciseCard message={respuesta} setOptions={setOptions} />
    //     ) : (
    //       <>
    //         <DescriptionCard option={options === Boolean(respuesta.Categoria)} description={respuesta.Descripcion} />
    //         <button  onClick={() => setOptions(null)}>Volver a jugar</button>
    //       </>
    //     )
    //   ) : (
    //     <p>Cargando datos del backend...</p>
    //   )}

    // </div>
  );
}
