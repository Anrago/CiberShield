import React from "react"
import NavBar from "./NavBar"
import PruebaConexion from "./prueba"
export default function Home(){
    return (
        <>
            <NavBar/>
            <div className="bg-gray-100">
                Hola
            </div>
            <PruebaConexion/>   
        </>
    )

}