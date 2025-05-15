import NavExercise from "../../components/navExercise";
import { NavLink } from "react-router";
export default function CategorySelection() {
  const handleType = (type, id) => {
    const typeData = {
      type: type,
      id: id,
    };

    const typeDataString = JSON.stringify(typeData);

    localStorage.setItem("typeData", typeDataString);
  };
  return (
    <>
      <NavExercise />
      <div className="flex flex-col items-center justify-center min-h-screen px-4 bg-gray-50 ">
        <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-8">
          Selecciona una categoría
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {[
            { label: "SMS", icon: "💬" },
            { label: "email", icon: "📧" },
          ].map(({ label, icon }, index) => (
            <NavLink
              key={index}
              onClick={() => handleType(label, index + 1)}
              to="/dificulty"
              className="flex items-center justify-center gap-3 bg-white dark:bg-gray-800 text-gray-800 dark:text-white px-6 py-4 rounded-xl shadow-lg hover:shadow-xl hover:bg-blue-50 dark:hover:bg-gray-700 transition-transform transform hover:-translate-y-1 duration-200"
              aria-label={`Seleccionar categoría: ${label}`}
            >
              <span className="text-2xl">{icon}</span>
              <span className="text-lg font-medium">{label}</span>
            </NavLink>
          ))}
        </div>
      </div>
    </>
  );
}

// space-y-4 añade un espacio vertical entre los botones
// space-x-4 añade un espacio horizontal entre los botones
