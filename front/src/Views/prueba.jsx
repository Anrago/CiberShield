import { useState } from 'react';
import { getExerciseConnection } from '../api/exerciseConection';
import  DificultySelector  from '../components/dificultySelector';
import ExerciseCard from '../components/exerciseCard';
import DescriptionCard from '../components/descriptionCard';
import { login,register } from '../api/authConection';

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
  }
 
  
  return (
    <div>
      <DificultySelector setExercise={fetchExercise} />
      {respuesta ? (
        options === null ? (
          <ExerciseCard message={respuesta} setOptions={setOptions} />
        ) : (
          <>
            <DescriptionCard option={options === Boolean(respuesta.Categoria)} description={respuesta.Descripcion} />
            <button  onClick={() => setOptions(null)}>Volver a jugar</button>
          </>
        )
      ) : (
        <p>Cargando datos del backend...</p>
      )}
      
    </div>
  );
}


