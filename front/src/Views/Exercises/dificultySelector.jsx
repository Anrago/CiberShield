import { NavLink } from "react-router";
import NavExercise from "../../components/navExercise";
export default function CategorySelection() {
  const handleDifficultyChange = (difficulty) => {
    localStorage.setItem("exerciseDificult", difficulty);
  };
  console.log(localStorage.getItem("profile"));
  return (
    <>
      <NavExercise />
      <div className="flex flex-col items-center justify-center h-screen bg-[var(--colorBase)]">
        <h2 className="text-2xl font-bold mb-4">Selecciona una dificultad</h2>
        <div className="flex flex-row gap-5 items-center justify-center mb-4">
          <NavLink
            onClick={()=>handleDifficultyChange("simple")}
            to={"/exercise"}
            className="btn bg-green-300"
          >
            Simple
          </NavLink>
          <NavLink
            onClick={()=>handleDifficultyChange("medium")}
            to={"/exercise"}
            className="btn bg-yellow-300"
          >
            Medio
          </NavLink>
          <NavLink
            onClick={()=>handleDifficultyChange("complex")}
            to={"/exercise"}
            className="btn bg-red-300"
          >
            Complejo
          </NavLink>
        </div>
      </div>
    </>
  );
}
