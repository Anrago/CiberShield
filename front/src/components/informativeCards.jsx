import React from "react";
import { NavLink } from "react-router";
import Arrow from "../assets/arrow-right.png";

export default function InformativeCards({
  title,
  description,
  color,
  image,
  link,
}) {
  return (
    <>
      <div
        className="card w-96 shadow-xl rounded-lg overflow-hidden transform transition duration-300 hover:scale-105"
        style={{ "--tempColor": color }}
      >
        <div className="bg-[var(--tempColor)] p-6 text-center">
          <h1 className="text-3xl font-bold text-white mb-4">{title}</h1>
          <figure className="flex justify-center">
            <img
              src={image}
              alt={`${title} image`}
              className="max-h-40 object-contain"
            />
          </figure>
        </div>

        <div className="card-body p-6 bg-white">
          <p className="text-gray-700">{description}</p>
          <div className="card-actions justify-center mt-6">
            <NavLink
              to={link}
              className="flex items-center gap-2 btn px-4 py-2 rounded-md bg-[var(--colorLight)] text-[var(--colorDark)] hover:bg-[var(--colorDark)] hover:text-[var(--colorLight)] transition"
            >
              <span>Saber más</span>
              <img src={Arrow} alt="Arrow icon" className="w-5 h-5" />
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
}
