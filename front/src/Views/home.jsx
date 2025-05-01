import React from "react"
import NavBar from "../layouts/NavBar"
import PruebaConexion from "./prueba"
import InformativeCards from "../components/informativeCards"


export default function Home(){
    return (
        <>

            <div className="bg-[var(--colorBase)] min-h-screen">
                <NavBar/>
                <div className="grid grid-rows-4 grid-cols-2 justify-items-center gap-4 mt-10 h-[100vh]">
                    <div className="bg-amber-200">
                        <h1 className="text-7xl font-bold">
                            <span className="block">Bienvenido a </span>
                            <span className="text-primary">CiberShield</span>
                        </h1>
                    </div>
                    <div className=" card bg-[var(--colorHomeCard)] row-span-2 text-white w-[80%] h-[100%] shadow-xl">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime quo ullam doloremque totam nostrum iusto ab! Mollitia blanditiis dolores natus sapiente? Adipisci cupiditate voluptate tenetur quisquam odit, est nisi autem?
                    </div>

                    <div className="bg-amber-200 breack-words">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis similique iusto officiis voluptas! Illo, repudiandae porro. Cupiditate pariatur eveniet nemo aliquam fugit accusamus corporis dicta nulla enim fuga, facere magni?
                    </div>
                    <div className="card bg-[#9090AB] col-span-2 row-span-3  w-full  ">
                        <div className="flex flex-col items-center h-full">
                            <h2 className=" text-5xl font-bold">SERVICIOS</h2>
                            <div className="grid grid-cols-3 gap-4 mt-4 mb-4">
                                <InformativeCards title={"Malware"} desccription = {"lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, voluptatibus."} color={'#FF4848'} />
                                <InformativeCards title={"Ingenieria social"} desccription = {"lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, voluptatibus."} color={'#34B08A'}  />
                                <InformativeCards title={"Practicas"} desccription = {"lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, voluptatibus."} color={'#E0E757'} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}