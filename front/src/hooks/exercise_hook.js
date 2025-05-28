import React from "react";
import { getexercise, storeExercise, decidedExercise } from "../api/exerciseConection";

export default function useExercise() {
    const [currentIndex, setCurrentIndex] = React.useState(0);
    const [exercises, setExercises] = React.useState([]);
    const [loading, setLoading] = React.useState(true);
    const [correctExercises, setCorrectExercises] = React.useState(0);
    const [showCompletionModal, setShowCompletionModal] = React.useState(false);

    const fetchExercise = async () => {
        try {
            const exerciseData = JSON.parse(localStorage.getItem("exerciseData"));
            console.log("Datos del ejercicio:", exerciseData);
            const data = await decidedExercise(exerciseData);
            if (!data || data.length === 0) {
                console.error("No se recibió respuesta del backend");
                return;
            }
            setExercises(data);
            data.forEach((exercise) => {
                storeExercise(exercise);
            });

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
    
    const handleCorrectAnswer = () => {
        setCorrectExercises((prev) => prev + 1);
    };
    
    const handleNext = () => {
        if (currentIndex < exercises.length - 1) {
            setCurrentIndex((prev) => prev + 1);
        } else {
            setShowCompletionModal(true);
        }
    };

    const handlePrev = () => {
        if (currentIndex > 0) {
            setCurrentIndex((prev) => prev - 1);
        }
    };

    const reloadPage = () => {
        window.location.href = "/type";
    };

    const goToHome = () => {
        window.location.href = "/";
    };

    return {
        exercises,
        loading,
        currentIndex,
        correctExercises,
        showCompletionModal,
        handleCorrectAnswer,
        handleNext,
        handlePrev,
        reloadPage,
        goToHome
    };
}