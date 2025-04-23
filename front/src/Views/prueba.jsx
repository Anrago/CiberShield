import { useState } from 'react';
import { getExerciseConnection } from '../api/exerciseConection';
import  DificultySelector  from '../components/dificultySelector';
import ExerciseCard from '../components/exerciseCard';
import DescriptionCard from '../components/descriptionCard';
import { login } from '../api/authConection';
export default function Prub() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
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

  const handleLogin = async () => {
    try{
      const reciveToken = await login(email, password);
      setToken(reciveToken);
      console.log("Token recibido:", reciveToken);
    }
    catch (error) {
      console.error("Error al iniciar sesión:", error);
    }
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


      <p>Login</p>
      <input type="text" value={email} onChange={(e) => setEmail(e.target.value)}   />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <br></br>
      <button onClick={handleLogin}>Iniciar sesión</button>
      <p>Token: {token}</p>
      <p>Respuesta: {email}</p>
    </div>
  );
}


