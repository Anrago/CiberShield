import React from "react";
import NavExercise from "../../components/navExercise";
import ExerciseCard from "../../components/exerciseCard";
import ExerciseSMSCard from "../../components/exerciseSMSCard";
import PageWrapper from "../../components/pageWrapper";
import useExercise from "../../hooks/exercise_hook";

export default function ExercisePresentation() {
  const {
    exercises,
    loading,
    currentIndex,
    correctExercises,
    showCompletionModal,
    handleCorrectAnswer,
    handleNext,
    handlePrev,
    reloadPage,
    goToHome,
  } = useExercise();

  const type = JSON.parse(localStorage.getItem("exerciseData")).exerciseType;

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
                      onCorrectAnswer={handleCorrectAnswer}
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
                <button onClick={handleNext} className="btn btn-primary">
                  Siguiente
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
                      onCorrectAnswer={handleCorrectAnswer}
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
                <button onClick={handleNext} className="btn btn-primary">
                  Siguiente
                </button>
              </div>
            </div>
          )}

          {showCompletionModal && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
              <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
                <h2 className="text-2xl font-bold text-center mb-4">
                  ¡Ejercicios completados!
                </h2>
                <p className="text-center text-lg mb-6">
                  Has completado correctamente {correctExercises} de{" "}
                  {exercises.length} ejercicios.
                </p>
                <div className="flex justify-center gap-4">
                  <button onClick={reloadPage} className="btn btn-primary">
                    Intentar de nuevo
                  </button>
                  <button onClick={goToHome} className="btn btn-outline">
                    Volver al inicio
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </PageWrapper>
    </>
  );
}
