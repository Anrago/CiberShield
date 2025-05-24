const API_URL = import.meta.env.VITE_BACK_API_URL || "http://localhost:3000";

let dificultyData =JSON.parse( localStorage.getItem("dificultyData"));
let storedData = localStorage.getItem("token") ? localStorage.getItem("profile"):localStorage.getItem("referenceData");
let dataUser = storedData ? JSON.parse(storedData) : {};
let typeData = JSON.parse(  localStorage.getItem("typeData"));


export const getexercise = async () => {
    try {
        const response = await fetch(
        `${API_URL}/getexercise/${typeData.type}/${dificultyData.dificulty}`,{
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


export const postExerciseResult = async (isCorrect) =>{
    try {
        const response = await fetch(
            `${API_URL}/exercise-result `,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    "userId": dataUser.user,
                    "correct": isCorrect ,
                    "exerciseTypeId": typeData.id ,
                    "exerciseLevelId": dificultyData.id,
                    "feedback": "feedback",
                    
                }),
            }
        );
        if (!response.ok) {
            console.error("Error in response:", response);
            throw new Error("Network response was not ok");
        }
        const data = response.json();
        return data;
    }
    catch (error) {
        console.error("Error fetching exercise connection:", error);
        throw error;
    }
}

export const getExerciseResults = async () => {
    try {
        const response = await fetch(
            `${API_URL}/exercise-result/${dataUser.user}`,
            {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                },   
            }
        );
        
        if (!response.ok) {
            console.error("Error in response:", response);
            throw new Error("Network response was not ok");
        }

        const data = await response.json();
        return data;
    }catch (error) {
        console.error("Error fetching exercise connection:", error);
        throw error;
    }
}
// ${exerciseDificult}