import arrow from "../assets/arrow-right.png";
import { motion } from "framer-motion";

export default function PhishingInf({ title, description, image }) {
  return (
    <div className="card w-120 shadow-xl  hover:shadow-2xl transition-shadow duration-300">
      <div className="bg-teal-500 p-4 rounded-t-lg">
        <h2 className="text-2xl font-bold text-white">{title}</h2>
      </div>
      <div className="card-body bg-gray-800 p-6 rounded-b-lg">
        <p className="text-gray-200 text-lg mb-4 leading-relaxed">
          {description}
        </p>
        <div className="mb-4 rounded-lg h-48  md:h-56">
          <img
            src={image}
            alt={title}
            className=" w-full h-full object-cover transform hover:scale-200 transition-transform duration-300"
          />
        </div>
        <div className="card-actions justify-end mt-2">
          <motion.button
            className="btn bg-teal-600 hover:bg-teal-700 text-white border-none rounded-full p-3"
            whileHover={{ scale: 1.1, rotate: 15 }}
            whileTap={{ scale: 0.9 }}


          >
            <img src={arrow} alt="Ver más" className="w-6 h-6" />
          </motion.button>
        </div>
      </div>
    </div>
  );
}
