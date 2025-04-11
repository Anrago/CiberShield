const API_URL = import.meta.env.VITE_BACK_API_URL || "http://localhost:3000";

export const getExerciseConnection = async (exerciseDificult = "simple") => {
    try {
        const response = await fetch(
        `${API_URL}/getexercise/${exerciseDificult}`,
        );
        if (!response.ok) {
        throw new Error("Network response was not ok");
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching exercise connection:", error);
        throw error;
    }
}

