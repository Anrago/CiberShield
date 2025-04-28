const API_URL = import.meta.env.VITE_BACK_API_URL || "http://localhost:3000";

export const login = async (username, password) => {
    try{
        const response = await fetch(`${API_URL}/login`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
                username,
                password    ,
            }),
          });
          
          if (!response.ok) {
            const errorText = await response.text(); // Para debug
            throw new Error(`Network response was not ok: ${errorText}`);
          }
          
          const data = await response.json();
          
          if (!data.access_token) {
            throw new Error("Token not received");
          }
          
          return data.access_token;
          
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