import { getExerciseResults } from "../api/exerciseConection";
import { use, useEffect, useState, reduce } from "react";
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

export default function Profile() {
  const [userResults, setUserResults] = useState([]);
  const userProfile = JSON.parse(localStorage.getItem("profile"));

  const logOut = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("profile");
    location.reload();
  };

  //--------------------------------------------------

  useEffect(() => {
    const fetchExerciseResults = async () => {
      try {
        const results = await getExerciseResults();
        if (!results || results.length === 0) {
          console.error("No se recibió respuesta del backend");
          return;
        }
        setUserResults(results);
        console.log("Resultados de ejercicios:", results);
      } catch (error) {
        console.error("Error fetching exercise results:", error);
      }
    };

    fetchExerciseResults();
  }, []);

  //--------------------------------------------------
  const SMSResult = groupedData(userResults).filter(
    (item) => item.name === "SMS"
  );
  const EmailResult = groupedData(userResults).filter(
    (item) => item.name === "Email"
  );
  if (userResults.length != 0) {
    console.log("SMSResult:", SMSResult);
    console.log("EmailResult:", EmailResult);
  }
  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-[#FFFFFF]">
        <div className="bg-white shadow-lg rounded-2xl my-5 p-8 w-[80%]">
          <div className="flex flex-col items-center text-center">
            <img
              src={userProfile.imgPerfil}
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
            <section className="grid grid-cols-1 md:grid-cols-2 border-none rounded-2xl mt-5 shadow-xl m-1 gap-4 w-full p-4">
              <span>
                <h2 className="text-3xl font-bold text-center mb-4">Email</h2>
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
            </section>
          </div>
        </div>
      </div>
    </>
  );
}

function groupedData(results) {
  const safeResults = Array.isArray(results) ? results : [];

  let groupData = {
    SMS: {
      simple: {
        correct: 0,
        incorrect: 0,
      },
      medium: {
        correct: 0,
        incorrect: 0,
      },
      complex: {
        correct: 0,
        incorrect: 0,
      },
    },
    Email: {
      simple: {
        correct: 0,
        incorrect: 0,
      },
      medium: {
        correct: 0,
        incorrect: 0,
      },
      complex: {
        correct: 0,
        incorrect: 0,
      },
    },
  };

  safeResults.forEach((element) => {
    if (element.exerciseTypeId === 1) {
      if (element.exerciseLevelId === 1) {
        if (element.correct) {
          groupData.SMS.simple.correct++;
        } else {
          groupData.SMS.simple.incorrect++;
        }
      }
      if (element.exerciseLevelId === 2) {
        if (element.correct) {
          groupData.SMS.medium.correct++;
        } else {
          groupData.SMS.medium.incorrect++;
        }
      }
      if (element.exerciseLevelId === 3) {
        if (element.correct) {
          groupData.SMS.complex.correct++;
        } else {
          groupData.SMS.complex.incorrect++;
        }
      }
    }
    if (element.exerciseTypeId === 2) {
      if (element.exerciseLevelId === 1) {
        if (element.correct) {
          groupData.Email.simple.correct++;
        } else {
          groupData.Email.simple.incorrect++;
        }
      }
      if (element.exerciseLevelId === 2) {
        if (element.correct) {
          groupData.Email.medium.correct++;
        } else {
          groupData.Email.medium.incorrect++;
        }
      }
      if (element.exerciseLevelId === 3) {
        if (element.correct) {
          groupData.Email.complex.correct++;
        } else {
          groupData.Email.complex.incorrect++;
        }
      }
    }
  });

  const data = [
    {
      name: "SMS",
      level: "simple",
      correct: groupData.SMS.simple.correct,
      incorrect: groupData.SMS.simple.incorrect,
    },
    {
      name: "SMS",
      level: "medium",
      correct: groupData.SMS.medium.correct,
      incorrect: groupData.SMS.medium.incorrect,
    },
    {
      name: "SMS",
      level: "complex",
      correct: groupData.SMS.complex.correct,
      incorrect: groupData.SMS.complex.incorrect,
    },
    {
      name: "Email",
      level: "simple",
      correct: groupData.Email.simple.correct,
      incorrect: groupData.Email.simple.incorrect,
    },
    {
      name: "Email",
      level: "medium",
      correct: groupData.Email.medium.correct,
      incorrect: groupData.Email.medium.incorrect,
    },
    {
      name: "Email",
      level: "complex",
      correct: groupData.Email.complex.correct,
      incorrect: groupData.Email.complex.incorrect,
    },
  ];
  return data;
}
