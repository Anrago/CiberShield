import { useState, useEffect } from "react";
import { getExerciseResults } from "../api/exerciseConection";

export default function useProfile() {
    const [SMSResult, setSMSResult] = useState([]);
    const [EmailResult, setEmailResult] = useState([]);

    useEffect(() => {
        fetchExerciseResults();
    }, []);

    const fetchExerciseResults = async () => {
        try {
            const result = await getExerciseResults();
            if (!result || result.length === 0) {
                console.error("No se recibió respuesta del backend");
                return;
            }
            setEmailResult( groupedData(result).filter((item) => item.name === "Email"));
            setSMSResult(groupedData(result).filter((item) => item.name === "SMS"));
        }
        catch (error) {
            console.error("Error fetching exercise results:", error);
        }
    }

    const logOut= () =>{
        localStorage.removeItem("token");
        localStorage.removeItem("profile");
        window.location.href = "/home";
    }

    const groupedData = (results) => {
        const safeResults = Array.isArray(results) ? results : [];

        let groupData = {
            SMS: {
                simple: { correct: 0, incorrect: 0 },
                medium: { correct: 0, incorrect: 0 },
                complex: { correct: 0, incorrect: 0 },
            },
            Email: {
                simple: { correct: 0, incorrect: 0 },
                medium: { correct: 0, incorrect: 0 },
                complex: { correct: 0, incorrect: 0 },
            },
        };

        safeResults.forEach((element) => {
            if (element.exerciseTypeId === 1) {
                if (element.exerciseLevelId === 1) {
                    if (element.correct) {
                        groupData.SMS.simple.correct++;
                    } else {
                        groupData.SMS.simple.incorrect++;
                    }
                }
                if (element.exerciseLevelId === 2) {
                    if (element.correct) {
                        groupData.SMS.medium.correct++;
                    } else {
                        groupData.SMS.medium.incorrect++;
                    }
                }
                if (element.exerciseLevelId === 3) {
                    if (element.correct) {
                        groupData.SMS.complex.correct++;
                    } else {
                        groupData.SMS.complex.incorrect++;
                    }
                }
            }
            if (element.exerciseTypeId === 2) {
                if (element.exerciseLevelId === 1) {
                    if (element.correct) {
                        groupData.Email.simple.correct++;
                    } else {
                        groupData.Email.simple.incorrect++;
                    }
                }
                if (element.exerciseLevelId === 2) {
                    if (element.correct) {
                        groupData.Email.medium.correct++;
                    } else {
                        groupData.Email.medium.incorrect++;
                    }
                }
                if (element.exerciseLevelId === 3) {
                    if (element.correct) {
                        groupData.Email.complex.correct++;
                    } else {
                        groupData.Email.complex.incorrect++;
                    }
                }
            }
        });

        const data = [
            {
                name: "SMS",
                level: "simple",
                correct: groupData.SMS.simple.correct,
                incorrect: groupData.SMS.simple.incorrect,
            },
            {
                name: "SMS",
                level: "medium",
                correct: groupData.SMS.medium.correct,
                incorrect: groupData.SMS.medium.incorrect,
            },
            {
                name: "SMS",
                level: "complex",
                correct: groupData.SMS.complex.correct,
                incorrect: groupData.SMS.complex.incorrect,
            },
            {
                name: "Email",
                level: "simple",
                correct: groupData.Email.simple.correct,
                incorrect: groupData.Email.simple.incorrect,
            },
            {
                name: "Email",
                level: "medium",
                correct: groupData.Email.medium.correct,
                incorrect: groupData.Email.medium.incorrect,
            },
            {
                name: "Email",
                level: "complex",
                correct: groupData.Email.complex.correct,
                incorrect: groupData.Email.complex.incorrect,
            },
        ];
        return data;
    }

    return { groupedData,logOut, fetchExerciseResults, SMSResult, EmailResult };
}