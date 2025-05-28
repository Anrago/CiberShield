import ExerciseCard from "../../components/exerciseCard";
import ExerciseSMSCard from "../../components/exerciseSMSCard";
import PageWrapper from "../../components/pageWrapper";
import useExercise from "../../hooks/exercise_hook";
import TipsDisplay from "../../components/tips";
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
        <div className="flex flex-col items-center justify-center h-screen px-4">
          {loading ? (
            <>
            <h3 className="text-xl font-bold mb-4 z-1">Cargando ejercicios...</h3>
            <TipsDisplay/>
              <span className="loading loading-spinner mt-2 loading-xl"></span>
            </>
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
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center w-full h-full gap-6">
              <div className="stack stack-end gap-3 ">
                {exercises
                  .slice(currentIndex, currentIndex + 1)
                  .map((exercise, index) => (
                    <ExerciseSMSCard
                      key={currentIndex + index}
                      exercise={exercise}
                      handleClose={handleNext}
                      onCorrectAnswer={handleCorrectAnswer}
                    />
                  ))}
              </div>
            </div>
          )}

          {showCompletionModal && (
            <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
              <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
                <h2 className="text-2xl font-bold text-center mb-4">
                  ¡Ejercicios completados!
                </h2>
                <p className="text-center text-lg mb-6">
                  Has completado correctamente {correctExercises} de{" "}
                  {exercises.length} ejercicios.
                </p>
                <div className="flex justify-center gap-4">
                  <button onClick={reloadPage} className="btn bg-green-500 hover:bg-green-400">
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
