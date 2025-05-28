import { useNavigate } from "react-router";
import PageWrapper from "../../components/pageWrapper";
import useExerciseData from "../../hooks/exerciseData_hook";
import ButtonExercis from "../../components/buttonExercis";
import ReturnLayout from "../../layouts/return";

export default function TypeSelection() {
  const { setExerciseData, exerciseData } = useExerciseData();
  const navigate = useNavigate();

  return (
    <>
      <PageWrapper>
        <ReturnLayout />
        <div className="flex flex-col items-center justify-center min-h-screen px-4 bg-gray-50 ">
          <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-8">
            Selecciona una categoría
          </h1>
          <div className="flex flex-row gap-5 items-center justify-center mb-4">
            <ButtonExercis
              title={"Mensaje de texto"}
              description={
                "Presentara mensajes de texto que podran ser reales o falsos, tu tarea sera identificarlos"
              }
              icon={"💬"}
              textColor={"#ffffff"}
              color={"#1e2939"}
              onClick={() => {
                setExerciseData({
                  ...exerciseData,
                  exerciseTypeId: 1,
                  exerciseType: "sms",
                });
                navigate("/dificulty");
              }}
            />

            <ButtonExercis
              title={"Correo electrónico"}
              description={
                "Presentara correos electronicos los cuales tendras que identificar sin son falsos o verdaderos "
              }
              icon={"📧"}
              textColor={"#ffffff"}
              color={"#1e2939"}
              onClick={() => {
                setExerciseData({
                  ...exerciseData,
                  exerciseTypeId: 2,
                  exerciseType: "email",
                });
                navigate("/dificulty");
              }}
            />
          </div>
        </div>
      </PageWrapper>
    </>
  );
}

// space-y-4 añade un espacio vertical entre los botones
// space-x-4 añade un espacio horizontal entre los botones
