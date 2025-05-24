import { NavLink } from "react-router";
import NavExercise from "../../components/navExercise";
import PageWrapper from "../../components/pageWrapper";
import useExerciseData from "../../hooks/exerciseData_hook";
export default function CategorySelection() {
  const { setExerciseData, exerciseData } = useExerciseData();

  return (
    <>
      <PageWrapper>
        <NavExercise />
        <div className="flex flex-col items-center justify-center h-screen bg-[var(--colorBase)]">
          <h2 className="text-2xl font-bold mb-4">Selecciona una dificultad</h2>
          <div className="flex flex-row gap-5 items-center justify-center mb-4">
            <NavLink
              onClick={() =>
                setExerciseData({
                  ...exerciseData,
                  exerciseLevelId: 1,
                  exerciseLevel: "simple",
                })
              }
              to={"/exercise"}
              className="btn bg-green-300"
            >
              Simple
            </NavLink>
            <NavLink
              onClick={() =>
                setExerciseData({
                  ...exerciseData,
                  exerciseLevelId: 2,
                  exerciseLevel: "medium",
                })
              }
              to={"/exercise"}
              className="btn bg-yellow-300"
            >
              Medio
            </NavLink>
            <NavLink
              onClick={() =>
                setExerciseData({
                  ...exerciseData,
                  exerciseLevelId: 3,
                  exerciseLevel: "complex",
                })
              }
              to={"/exercise"}
              className="btn bg-red-300"
            >
              Complejo
            </NavLink>
          </div>
        </div>
      </PageWrapper>
    </>
  );
}
