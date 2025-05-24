const API_URL = import.meta.env.VITE_BACK_API_URL || "http://localhost:3000";

export const login = async (username, password) => {
    try{
        const response = await fetch(`${API_URL}/auth/login`, {
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

export const register = async (formData) => {
  try {
    const response = await fetch(`${API_URL}/user`, {
      method: "POST",
      body: formData,
    });

    if (!response.ok) {
      const errorData = await response.text();
      console.error("Error del servidor:", errorData);
      throw new Error(`Network response was not ok: ${errorData}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching exercise connection:", error);
    throw error;
  }
};

export const getProfile = async () => {
    try{
        const response = await fetch(`${API_URL}/auth/profile`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
        });
        if (!response.ok) {
            const errorText = await response.text(); // Para debug
            throw new Error(`Network response was not ok: ${errorText}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error to access:", error);
        throw error;
    }

}