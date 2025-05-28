import { NavLink } from "react-router";
import PageWrapper from "../../components/pageWrapper";
import useExerciseData from "../../hooks/exerciseData_hook";
import ReturnLayout from "../../layouts/return";
export default function ReferenceData() {
  const { setReferenceData, referenceData } = useExerciseData();

  return (
    <>
      <PageWrapper>
        <ReturnLayout />
        <div className="flex flex-col items-center justify-center min-h-screen px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Coloque los datos solicitados
          </h2>

          <div className="w-full max-w-md bg-[#f3f4f6] rounded-lg shadow-lg p-8 space-y-5">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Nombre
              </label>
              <div className="flex items-center border px-2 border-gray-300 rounded-md bg-white">
                <input
                  id="name"
                  type="text"
                  placeholder="Ingresa tu nombre"
                  pattern="[A-Za-z][A-Za-z0-9\-]*"
                   minlength="3" maxlength="30"
                   title="Solo ingresa letras y numeros, minimo 3 caracteres  "
                  onChange={(e) =>
                    setReferenceData({ ...referenceData, name: e.target.value })
                  }
                  className="w-full  py-2 pr-4 bg-transparent text-gray-800 focus:outline-none"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Email
              </label>
              <div className="flex items-center px-2 border border-gray-300 rounded-md bg-white">
                <input
                  id="email"
                  type="email"
                  placeholder="Ingresa tu correo electrónico"
                  onChange={(e) =>
                    setReferenceData({
                      ...referenceData,
                      email: e.target.value,
                    })
                  }
                  className="w-full py-2 pr-4 bg-transparent text-gray-800 focus:outline-none"
                />
              </div>
            </div>

            <NavLink
              onClick={() => {}}
              to="/type"
              className="block w-full text-center bg-[#34908A] text-white font-semibold py-2 rounded-md hover:bg-[#2b746f] transition duration-200"
            >
              Siguiente
            </NavLink>
          </div>
        </div>
      </PageWrapper>
    </>
  );
}
