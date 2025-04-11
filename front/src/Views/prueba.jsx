import { useEffect, useState } from 'react';
import { getExerciseConnection } from '../api/exerciseConection';
function Prub() {
  const [respuesta, setRespuesta] = useState(null);

  useEffect(() => {
        const pruebaconexion = async () => {
            const data = await getExerciseConnection("simple");
            if (!data) {
                console.error("No se recibió respuesta del backend");
                return;
            }
            console.log("Respuesta del backend:", data);
            setRespuesta(data);
        }
        pruebaconexion();   
  }, []);
  console.log("Respuesta del backend:");
  console.log("Respuesta del backend:", respuesta);

  return (
    <div>
      <h1>Conexión al Backend</h1>
        <p>Respuesta del backend: {respuesta} </p>
    </div>    
  );
}

export default Prub;
