import useRenderHook from "../../hooks/render_hook";
import Cal from "../../assets/images/craneo.png";
import dentro from "../../assets/images/estoyDentro.png";
export default function Ransomware() {
  const { isClick, setIsClick } = useRenderHook({ type: "ransomware" });
  return (
    <>
      {isClick ? (
        <div className="bg-linear-to-t h-full w-full z-5 from-red-500 to-black  absolute bottom-0 left-0 right-0">
          <div className="flex flex-col items-center justify-center h-full">
            <img
              src={dentro}
              alt=""
              className=" w-50 h-50  drop-shadow-[0_0_2px_rgba(255,0,0,0.8)]"
            />
            <span className="text- font-bold text-white truncate w-full text-center">
              ⚠️ Tus archivos han sido encriptados ⚠️
              <br />
              <span className="w-full whitespace-normal">
                Todos tus documentos, fotos, videos y otros archivos importantes
                han sido cifrados con un algoritmo seguro. No puedes acceder a
                ellos por ahora.
              </span>
            </span>
          </div>
        </div>
      ) : (
        <div
          onClick={() => setIsClick(!isClick)}
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
