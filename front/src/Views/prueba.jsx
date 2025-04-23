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

  const handleRegister = async () => {
    try{
      await register(name, lastname, username, email, password);
      console.log("Usuario registrado:", { name, lastname, username, email, password });
    } catch (error) {
      console.error("Error al registrar usuario:", error);
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
      <input type="text" value={email} onChange={(e) => setEmail(e.target.value)}  placeholder='Email'  />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Password'/>
      <button onClick={handleLogin}>login</button>
      <br/>
      <br/>
      <p>Register</p>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Nombre" />
      <input type="text" value={lastname} onChange={(e) => setLastname(e.target.value)} placeholder="Apellido" />
      <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Nombre de usuario" />
      <input type="text" value={email} onChange={(e) => setEmail(e.target.value)}  placeholder='Email'  />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Password'/>
      <br></br>
      <button onClick={handleRegister}>Register</button>
      <p>Respuesta: {email}</p>
    </div>
  );
}


