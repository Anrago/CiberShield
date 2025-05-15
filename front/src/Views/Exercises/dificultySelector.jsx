import { NavLink } from "react-router";
import NavExercise from "../../components/navExercise";
export default function CategorySelection() {
  const handleDifficultyChange = (dificulty, id) => {
    const dificultyData = {
      dificulty: dificulty,
      id: id,
    };

    const dificultyDataString = JSON.stringify(dificultyData);

    localStorage.setItem("dificultyData", dificultyDataString);
  };
  console.log(localStorage.getItem("profile"));
  return (
    <>
      <NavExercise />
      <div className="flex flex-col items-center justify-center h-screen bg-[var(--colorBase)]">
        <h2 className="text-2xl font-bold mb-4">Selecciona una dificultad</h2>
        <div className="flex flex-row gap-5 items-center justify-center mb-4">
          <NavLink
            onClick={() => handleDifficultyChange("simple", 1)}
            to={"/exercise"}
            className="btn bg-green-300"
          >
            Simple
          </NavLink>
          <NavLink
            onClick={() => handleDifficultyChange("medium", 2)}
            to={"/exercise"}
            className="btn bg-yellow-300"
          >
            Medio
          </NavLink>
          <NavLink
            onClick={() => handleDifficultyChange("complex", 3)}
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
