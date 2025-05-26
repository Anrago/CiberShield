import { NavLink, useNavigate } from "react-router";
import PageWrapper from "../../components/pageWrapper";
import useExerciseData from "../../hooks/exerciseData_hook";
import ButtonExercis from "../../components/buttonExercis";
import ReturnLayout from "../../layouts/return";
export default function CategorySelection() {
  const { setExerciseData, exerciseData } = useExerciseData();
  const navigate = useNavigate();
  return (
    <>
      <PageWrapper>
        <ReturnLayout />
        <div className="flex flex-col items-center justify-center h-screen bg-[var(--colorBase)]">
          <h2 className="text-2xl font-bold mb-4">Selecciona una dificultad</h2>
          <div className="flex flex-row gap-5 items-center justify-center mb-4">
            <ButtonExercis
              title={"Simple"}
              description={
                "Ejercicios de nivel simple, ideales para principiantes."
              }
              color={"#7bf1a8"}
              textColor={"#000000"}
              onClick={() => {
                setExerciseData({
                  ...exerciseData,
                  exerciseLevelId: 1,
                  exerciseLevel: "simple",
                });
                navigate("/exercise");
              }}
            />
            <ButtonExercis
              title={"Medio"}
              description={
                "Ejercicios de nivel medio, adecuados para quienes tienen algo de experiencia."
              }
              color={"#ffdf20"}
              textColor={"#000000"}
              onClick={() => {
                setExerciseData({
                  ...exerciseData,
                  exerciseLevelId: 2,
                  exerciseLevel: "medium",
                });
                navigate("/exercise");
              }}
            />
            <ButtonExercis
              title={"Complejo"}
              description={
                "Ejercicios de nivel complejo, diseñados para usuarios avanzados."
              }
              color={"#ffa2a2"}
              textColor={"#000000"}
              onClick={() => {
                setExerciseData({
                  ...exerciseData,
                  exerciseLevelId: 3,
                  exerciseLevel: "3",
                });
                navigate("/exercise");
              }}
            />
          </div>
        </div>
      </PageWrapper>
    </>
  );
}
