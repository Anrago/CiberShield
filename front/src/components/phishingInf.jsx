import arrow from "../assets/arrow-right.png";
import { motion } from "framer-motion";

export default function PhishingInf({ title, description, image }) {
  return (
    <div className="card shadow-xl hover:shadow-2xl transition-shadow duration-300">
      <div className="bg-teal-500 p-4 rounded-t-lg">
        <h2 className="text-2xl font-bold text-white">{title}</h2>
      </div>
      <div className="card-body bg-gray-800 rounded-b-lg">
        <p className="text-gray-200 text-lg ">
          {description}
        </p>
        <div className="mb-4 rounded-lg h-48 md:h-56 ">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-contain duration-500 hover:scale-200"
          />
        </div>
      </div>
    </div>
  );
}
