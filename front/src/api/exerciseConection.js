const API_URL = import.meta.env.VITE_BACK_API_URL || "http://localhost:3000";

let dificultyData =JSON.parse( localStorage.getItem("dificultyData"));
let storedData = localStorage.getItem("token") ? localStorage.getItem("profile"):localStorage.getItem("referenceData");
let exerciseData = JSON.parse(localStorage.getItem("exerciseData"));
let dataUser = JSON.parse(storedData);

export const getexercise = async (data) => {
    try {
        console.log("Datos de peticion", data.exerciseType, data.exerciseLevel);
        const response = await fetch(
        `${API_URL}/getexercise/${data.exerciseType}/${data.exerciseLevel}`,{
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                'prompt': 'Datos de la persona a la que se le envia el correo' + dataUser.name + " " + dataUser.email + " " + dataUser.phone,
            }),
        }
        );

        if (!response.ok) {
            throw new Error("Network response was not ok");
        }

        const responseData = await response.json();
        return responseData;

    } catch (error) {
        console.error("Error fetching exercise connection:", error);
        throw error;
    }
}


export const postExerciseResult = async (isCorrect) =>{
    try {
        const currentExerciseData = JSON.parse(localStorage.getItem("exerciseData"));
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
                    "exerciseTypeId": currentExerciseData.exerciseTypeId,
                    "exerciseLevelId": currentExerciseData.exerciseLevelId,
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

export const getExerciseBD = async (data)=>{
     try {
        const response = await fetch(
            `${API_URL}/exercise/${data.exerciseTypeId}/${data.exerciseLevelId}`, 
            {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                },
            
            }
        );
        if (!response.ok) {
            console.error("Error in response:", response);
            throw new Error("Network response was not ok");
        }
        const responseData = response.json();
        return responseData;
    }
    catch (error) {
        console.error("Error fetching exercise connection:", error);
        throw error;
    }
}

export const decidedExercise = async (data) => {
 try{
    const response = await getexercise(data);
    return response;
 }catch (error) {
    return await getExerciseBD(data);
 }
}

export const storeExercise = async (exercise) => {
    try {
        const currentExerciseData = JSON.parse(localStorage.getItem("exerciseData"));
        const response = await fetch(
            `${API_URL}/exercise`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
                body: JSON.stringify({
                    "levelId": currentExerciseData.exerciseLevelId,
                    "typeId": currentExerciseData.exerciseTypeId,
                    "content": exercise,
                    "context": 'vacio',
                    "isPhishing": Boolean( exercise.Categoria),
                }),
            }
        )
        if (!response.ok) {
            console.error("Error in response:", response);
            throw new Error("Network response was not ok");
        }
        const data = await response.json();
        return data;
    } catch (error) {
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