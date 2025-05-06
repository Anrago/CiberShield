import React from "react";
import { NavLink } from "react-router";

export default function NavExercise({}) {
  return (
    <div className="navbar">
      <NavLink to={"/"} className="btn text-2xl font-bold mb-8">
        CiberShield{" "}
      </NavLink>
    </div>
  );
}
