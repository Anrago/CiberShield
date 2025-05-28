import { Navigate, NavLink } from "react-router";
import PageWrapper from "../../components/pageWrapper";
import ReturnLayout from "../../layouts/return";
export default function SessionPreference() {
  return (
    <>
      {localStorage.getItem("token") ? (
        <div className="flex flex-col items-center justify-center h-screen bg-[var(--colorBase)]">
          <h2 className="text-2xl font-bold mb-4">Ya has iniciado sesion</h2>
          <div className="flex flex-row gap-5 items-center justify-center mb-4">
              <Navigate to={"/type"} className="btn bg-green-300"/>
          </div>
        </div>
      ) : (
        <PageWrapper className="min-h-screen w-full">
          <ReturnLayout />
          <div className="flex flex-col items-center justify-center h-screen bg-[var(--colorBase)]">
            <h2 className="text-2xl font-bold mb-4">
              ¿Como deseas ingresar?
            </h2>
            <div className="flex flex-row gap-5 items-center justify-center mb-4">
              <NavLink to={"/login"} className="btn bg-green-300">
                Con cuenta
              </NavLink>
              <NavLink to={"/reference"} className="btn bg-yellow-300">
                Sin cuenta
              </NavLink>
            </div>
          </div>
        </PageWrapper>
      )}
    </>
  );
}
