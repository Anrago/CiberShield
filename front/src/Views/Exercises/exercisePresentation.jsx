import React from "react";
import { NavLink } from "react-router";
import NavExercise from "../../components/navExercise";
import ExerciseCard from "../../components/exerciseCard";
import { getExerciseConnection } from "../../api/exerciseConection";
export default function ExercisePresentation() {
  const [exercise, setExercises] = React.useState([null]);
  const [loading, setLoading] = React.useState(true);

  const fetchExercise = async () => {
    try {
      //const data = await getExerciseConnection("simple"); DESSELECCIONAR
      if (!data) {
        console.error("No se recibió respuesta del backend");
        return;
      }
      setExercises(data);
    } catch (error) {
      console.error("Error al obtener el ejercicio:", error);
    } finally {
      setLoading(false);
    }
  };
  React.useEffect(() => {
    fetchExercise();
  }, []);

  return (
    <>
      <NavExercise />
      <div className="flex flex-col items-center justify-center h-screen bg-[var(--colorBase)]">
        <h2 className="text-2xl font-bold mb-4">Cargando ejercicios</h2>
        <div className="flex flex-row gap-5 items-center justify-center mb-4">
          <div className="stack stack-end gap-3">
            {loading ? (
              <span className="loading loading-spinner loading-xl"></span>
            ) : (
              Array(4)
                .fill(0)
                .map((_, index) => (
                  <ExerciseCard //Agregar la descripocion, y hacer validacion dentro del componente.Agregando el Modal
                    key={index}
                    message={exercise}
                    setOptions={true}
                  />
                ))
            )}
          </div>
        </div>
      </div>
    </>
  );
}
