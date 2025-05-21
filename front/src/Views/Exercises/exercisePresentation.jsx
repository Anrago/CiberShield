import React from "react";
import NavExercise from "../../components/navExercise";
import ExerciseCard from "../../components/exerciseCard";
import { getexercise } from "../../api/exerciseConection";
import ExerciseSMSCard from "../../components/exerciseSMSCard";
import PageWrapper from "../../components/pageWrapper";
export default function ExercisePresentation() {
  const [exercises, setExercises] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const fetchExercise = async () => {
    try {
      const data = await getexercise();
      if (!data || data.length === 0) {
        console.error("No se recibió respuesta del backend");
        return;
      }
      setExercises(data);
      console.log("Ejercicios obtenidos:", data);
    } catch (error) {
      console.error("Error al obtener el ejercicio:", error);
    } finally {
      setLoading(false);
    }
  };

  React.useEffect(() => {
    fetchExercise();
  }, []);

  const handleNext = () => {
    if (currentIndex < exercises.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  const type = JSON.parse(localStorage.getItem("typeData")).type;

  return (
    <>
      <PageWrapper>
        <NavExercise />
        <div className="flex flex-col items-center justify-center h-screen bg-[var(--colorBase)] px-4">
          <h2 className="text-2xl font-bold mb-4">Ejercicios</h2>
          {loading ? (
            <span className="loading loading-spinner loading-xl"></span>
          ) : type === "email" ? (
            <div className="flex flex-col items-center gap-6">
              <div className="stack stack-end gap-3">
                {exercises
                  .slice(currentIndex, currentIndex + 3)
                  .map((exercise, index) => (
                    <ExerciseCard
                      key={currentIndex + index}
                      message={exercise}
                      setOptions={true}
                      handleClose={handleNext}
                    />
                  ))}
              </div>
              <div className="flex gap-4 mt-4">
                <button
                  onClick={handlePrev}
                  disabled={currentIndex === 0}
                  className="btn btn-outline"
                >
                  Anterior
                </button>
              </div>
            </div>
          ) : (
            <div className="flex flex-col items-center h-[80%] gap-6">
              <div className="stack stack-end gap-3">
                {exercises
                  .slice(currentIndex, currentIndex + 2)
                  .map((exercise, index) => (
                    <ExerciseSMSCard
                      key={currentIndex + index}
                      exercise={exercise}
                      handleClose={handleNext}
                    />
                  ))}
              </div>
              <div className="flex gap-4 mt-4">
                <button
                  onClick={handleNext}
                  disabled={currentIndex >= exercises.length - 1}
                  className="btn btn-outline"
                >
                  Siguiente
                </button>
              </div>
              <div className="flex gap-4 mt-4">
                <button
                  onClick={handlePrev}
                  disabled={currentIndex === 0}
                  className="btn btn-outline"
                >
                  Anterior
                </button>
              </div>
            </div>
          )}
        </div>
      </PageWrapper>
    </>
  );
}
