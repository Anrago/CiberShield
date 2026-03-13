import { useState } from "react";
import { login,register,getProfile } from "../api/authConection";

export default function useAuth() {
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [image, setImage] = useState(null);
    const [toast, setToast] = useState({show: false, message: "", type: "success" });
    const [isLogued, setIsLogued] = useState(false);

    const showToast = (message, type = "success") => {
        setToast({ show: true, message, type });
        setTimeout(() => {
            setToast({ show: false, message: "", type: "success" });
        }, 3000);
    }

    const handleLogin = async (e)=>{
        try{
            e.preventDefault();
            const response = await login(userName, password);
            if (response){
                localStorage.setItem("token", response);
                const profile = await getProfile();
                showToast("Inicio de sesion exitoso", "success");
                if (profile){
                    localStorage.setItem("profile", JSON.stringify(profile));
                    setIsLogued(true);
                    setTimeout(() => {
                        window.location.href = "/home";
                    }, 3000);
                }
            }
        } catch (error) {
            console.error("Error during login:", error);
            showToast("Inicio de sesion fallido. Favor de revisar sus credenciales", "error");
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
                showToast("Registro completado,favor de iniciar sesion", "success");
                setTimeout(() => {
                    window.location.href = "/login";
                }, 3000);
            }
        } catch (error) {
            console.error("Error during registration:", error);
            showToast("REl registro fallo, favor de intentar nuevamente", "error");
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
        setImage,
        toast,
        setToast,
        isLogued,

    };


}