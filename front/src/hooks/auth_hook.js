import { useState } from "react";
import { login,register,getProfile } from "../api/authConection";

export default function useAuth() {
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [image, setImage] = useState(null);

    const handleLogin = async (e)=>{
        try{
            e.preventDefault();
            console.log("Logging in with", userName, password);
            const response = await login(userName, password);
            if (response){
                localStorage.setItem("token", response);
                const profile = await getProfile();
                if (profile){
                    localStorage.setItem("profile", JSON.stringify(profile));
                    window.location.href = "/home";
                }
            }
        } catch (error) {
            console.error("Error during login:", error);
            alert("Login failed. Please check your credentials.");
        }
    }

    const handleRegister = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("name", name);
        formData.append("lastName", lastName);
        formData.append("userName", userName);
        formData.append("email", email);
        formData.append("password", password);
        formData.append("image", image);
        try {
            const response = await register(formData);
            if (response) {
                alert("Registration successful. Please log in.");
                window.location.href = "/login";    
            }
        } catch (error) {
            console.error("Error during registration:", error);
            alert("Registration failed. Please try again.");
        }
    };




    return {
        handleLogin,
        handleRegister,
        userName,
        password,
        setUserName,
        setPassword,
        setName,
        setLastName,
        setEmail,
        setImage
    };


}