import React from "react";
import { NavLink } from "react-router";
import Arrow from "../assets/arrow-right.png"

export default function InformativeCards({title,description,color,image,link}) {
    return (
        <>
            <div className="card bg-[var(--tempColor)] w-96 shadow-lg" style={{
                '--tempColor': color,
            }}>
                <h1 className="card-title text-3xl font-bold text-center mb-4">
                 {title}
                </h1>
                <figure className="px-10 pt-10">
                    <img src={image} ></img>
                </figure>
                <div className="card-body">
                    <p>{description}</p>
                    <div className="card-actions justify-center mt-4">
                        <NavLink to={link} className="btn bg-[var(--colorLight)] text-[var(--colorDark)] hover:bg-[var(--colorDark)] hover:text-[var(--colorLight)]">
                            <p>Saber mas</p>
                            <img src={Arrow} alt="Arrow" className="w-6 h-6" />
                        </NavLink>
                    </div>  
                </div>

            </div>
        </>
    )
}
