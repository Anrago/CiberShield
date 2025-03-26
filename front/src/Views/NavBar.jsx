import React from "react"

export default function NavBar(){
    return (
        <>
            <div className="flex flex-row bg-gray-300 border-none rounded-b-2xl">
                <p className="text-4xl ">LOGO</p>
                <div className="flex flex-row">
                    <p>Inicio</p>
                    <p>Servicios</p>
                    <p>Informativo</p>
                </div>
            </div>
        </>
    )

}