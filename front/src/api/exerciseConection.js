const API_URL = import.meta.env.VITE_BACK_API_URL || "http://localhost:3000";

let exerciseDificult = localStorage.getItem("exerciseDificult");
let storedData = localStorage.getItem("token") ? localStorage.getItem("profile"):localStorage.getItem("referenceData");
let dataUser = storedData ? JSON.parse(storedData) : {};
console.log("dataUser", dataUser.name);

export const getExerciseConnection = async (exerciseDificult) => {
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

export const getexercise = async () => {
    try {
        const response = await fetch(
        `${API_URL}/getexercise/${exerciseDificult}`,{
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                'prompt': dataUser.name + " " + dataUser.email + " " + dataUser.phone,
            }),
        }
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

//${exerciseDificult}