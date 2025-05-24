import { useEffect, useState } from "react";

export default function useExerciseData() {
  const [referenceData, setReferenceData] = useState({ 
    name: "",
    email: "",
    phone: "",
  });

  const [exerciseData, setExerciseData] = useState({
    exerciseTypeId: 0,
    exerciseType: "",
    exerciseLevelId: 0,
    exerciseLevel: "",
  });

  const [initialized, setInitialized] = useState(false);

  // Cargar datos del localStorage una sola vez
  useEffect(() => {
    const storedReferenceData = localStorage.getItem("referenceData");
    if (storedReferenceData) {
      setReferenceData(JSON.parse(storedReferenceData));
    }

    const storedExerciseData = localStorage.getItem("exerciseData");
    if (storedExerciseData) {
      setExerciseData(JSON.parse(storedExerciseData));
    }

    setInitialized(true); // Ya se cargó
  }, []);

  // Guardar en localStorage sólo después de cargar datos
  useEffect(() => {
    if (initialized) {
      localStorage.setItem("referenceData", JSON.stringify(referenceData));
      localStorage.setItem("exerciseData", JSON.stringify(exerciseData));
    }
  }, [referenceData, exerciseData, initialized]);

  return {
    setReferenceData,
    setExerciseData,
    referenceData,
    exerciseData,
  };
}
