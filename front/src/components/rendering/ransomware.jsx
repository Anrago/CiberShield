import useRenderHook from "../../hooks/render_hook";
import Cal from "../../assets/images/craneo.png";
import dentro from "../../assets/images/estoyDentro.png";
export default function Ransomware() {
  const { isClick, setContDown, setIsClick, activeMalware, contDown } =
    useRenderHook();
  return (
    <>
      {isClick ? (
        <div className="absolute inset-0 z-50 bg-gradient-to-t from-red-800 to-black flex items-center justify-center">
          <div className="flex flex-col items-center justify-center h-full px-4 text-center">
            <img
              src={dentro}
              alt="Archivo Encriptado"
              className="w-32 h-32 mb-6 drop-shadow-[0_0_6px_rgba(255,0,0,0.6)]"
            />
            <h1 className="text-2xl md:text-3xl font-bold text-red-100 mb-4">
              ⚠️ Tus archivos han sido encriptados ⚠️
            </h1>


            <p className="text-white text-base md:text-lg max-w-md mb-4">
              Todos tus documentos, fotos, videos y otros archivos importantes
              han sido cifrados con un algoritmo fuerte.
            </p>

            <p className="text-red-300 text-sm md:text-base font-semibold mb-6">
              Para recuperar el acceso, paga 15 btc.
            </p>

            <button className="bg-red-700 hover:bg-red-800 text-white font-semibold py-2 px-5 rounded shadow-md transition">
              Pagar rescate
            </button>
          </div>
        </div>
      ) : (
        <div
          onClick={() => {
            setIsClick(!isClick);
            console.log("Ransomware clicked! Timer activated.");
          }}
          className="bg-black border border-red-400 p-1 rounded shadow hover:shadow-md transition-all w-16 h-20 flex flex-col justify-between cursor-pointer"
        >
          <div className="w-full h-3/4 bg-linear-to-t from-red-500 to-black ">
            <img
              src={Cal}
              alt=""
              className="drop-shadow-[0_0_2px_rgba(255,0,0,0.8)]"
            />
          </div>
          <div className="h-1/4 bg-linear-to-t from-red-black to-red-500 flex items-center justify-center">
            <span className="text-[8px] font-bold text-white truncate w-full text-center">
              Ransomware
            </span>
          </div>
        </div>
      )}
    </>
  );
}
