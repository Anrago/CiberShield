import useRenderHook from "../../hooks/render_hook";
import addwareImage from "../../assets/images/adware.png";
export default function Adware() {
  const { isClick, setContDown, setIsClick, activeMalware, contDown } =
    useRenderHook();
  return (
    <>
      {isClick ? (
        <div className="bg-white border-8 border-red-600 rounded-3xl mt-12 items-center flex flex-col text-center h-70 p-5   animate-bounce">
          <p className="text-5xl font-bold text-red-500">⚠️PELIGRO!!</p>
          <p className="text-3xl font-bold text-red-500">VIRUS DETECTADO</p>
          <div div className="flex flex-col items-start h-full">
            <p className="text-lg  ">
              Se han detectado 5 virus dentro de su dispositivo.
            </p>
            <p className="text-lg">Necesita removerlo con urgencia</p>
          </div>
          <button className="bg-yellow-300 mt-3 text-white rounded-lg font-bold max-w-[50%] animate-pulse cursor-pointer " > REMOVER VIRUS AHORA </button>
        </div>
      ) : (
        <div>
          <div
            onClick={() => {
              setIsClick(!isClick);
            }}
            className="bg-red-500 mt-2 p-1 rounded shadow hover:shadow-md transition-all w-16 h-20 flex flex-col justify-between cursor-pointer"
          >
            <div className="w-full h-3/4 bg-linear-to-t from-yellow-500 to-yellow-100 ">
              <img src={addwareImage} />
            </div>
            <div className="h-1/4 bg-linear-to-t from-red-500 to-yellow-500 flex items-center justify-center">
              <span className="text-[8px] font-bold text-white truncate w-full text-center">
                Adware
              </span>
            </div>
            <span className="text-xs font-medium mt-4 text-white drop-shadow-md text-center">
              ad.exe
            </span>
          </div>
        </div>
      )}
    </>
  );
}
