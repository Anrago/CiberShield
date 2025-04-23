const API_URL = import.meta.env.VITE_BACK_API_URL || "http://localhost:3000";

export const login = async (email, password) => {
    try{
        const response = await fetch(`${API_URL}/login`,{
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email,
                password,
            }),

        });

        if (!response.ok){
            throw new Error("Network response was not ok");
        }

        const data = await response.text();
        return data;
    } catch (error) {
        console.error("Error fetching exercise connection:", error);
        throw error;
    }
}

export const register = async (name,lastName,userName, email, password) =>{
    try{
        const respone = await fetch(`${API_URL}/user`,{
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name,
                lastName,
                userName,
                email,
                password
            }),
        });

        if(!respone.ok){
            throw new Error("Network response was not ok");
        }
        const data = await respone.json();
        return data;
    }catch (error) {
        console.error("Error fetching exercise connection:", error);
        throw error;
    }
}