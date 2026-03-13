import { useEffect } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import useProfile from "../hooks/perfil_hook";

export default function Profile() {
  const userProfile = JSON.parse(localStorage.getItem("profile"));
  const { logOut, SMSResult, EmailResult } = useProfile();

  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-[#FFFFFF]">
        <div className="bg-white shadow-lg rounded-2xl my-5 p-8 w-[80%]">
          <div className="flex flex-col items-center text-center">
            <img
              src={"http://localhost:3000/" + userProfile.imgPerfil}
              alt="Avatar"
              className="w-24 h-24 rounded-full shadow-md mb-4 border-4 border-[#3F88C5] object-cover"
            />
            <h2 className="text-2xl font-bold text-black mb-1">
              {userProfile.name}
            </h2>
            <p className="text-gray-600 text-sm">{userProfile.email}</p>
            <hr className="w-full my-6 border-[#3F88C5]" />
            <button
              onClick={logOut}
              className=" w-full max-w-65 hover:bg-red-500 border-2 border-red-500  text-red-500  hover:text-black font-semibold py-1 px-6 rounded transition duration-200"
            >
              Cerrar sesión
            </button>
            <section className="grid grid-cols-1 md:grid-cols-2 bg-gray-200 border-none rounded-2xl mt-5 shadow-xl m-1 gap-4 w-full p-4">
              {SMSResult.length === 0 && EmailResult.length === 0 ? (
                <div className="col-span-2 text-center text-gray-500">
                  No hay resultados disponibles.
                </div>
              ) : (
                <>
                  <span>
                    <h2 className="text-3xl font-bold text-center mb-4">
                      Email
                    </h2>
                    <ResponsiveContainer width="100%" height={300}>
                      <BarChart width={500} height={300} data={EmailResult}>
                        <CartesianGrid strokeDasharray={"3 3"} />
                        <XAxis dataKey="level" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="correct" stackId="a" fill="#82ca9d" />
                        <Bar dataKey="incorrect" stackId="a" fill="#ff0000" />
                      </BarChart>
                    </ResponsiveContainer>
                  </span>

                  <span>
                    <h2 className="text-3xl font-bold text-center mb-4">SMS</h2>
                    <ResponsiveContainer width="100%" height={300}>
                      <BarChart width={500} height={300} data={SMSResult}>
                        <CartesianGrid strokeDasharray={"3 3"} />
                        <XAxis dataKey="level" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="correct" stackId="a" fill="#82ca9d" />
                        <Bar dataKey="incorrect" stackId="a" fill="#ff0000" />
                      </BarChart>
                    </ResponsiveContainer>
                  </span>
                </>
              )}
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
