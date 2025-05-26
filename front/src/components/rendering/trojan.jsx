import useRenderHook from "../../hooks/render_hook";
export default function TOJAN() {
  const { isClick, setContDown, setIsClick, activeMalware, contDown } =
    useRenderHook();
  return (
    <>
      {isClick ? (
        <div className=" flex items-center justify-center bg-gray-900 h-full w-full  z-5 absolute bottom-0 left-0 right-0">
          <div className="border-t-1 rounded-b-lg text-green-100 bg-green-950 border-t-green-950 flex flex-col  justify-center">
            [backdoor_poitn_access.exe]
            <div className="flex flex-col bg-black rounded-b-lg">
                <p className="text-green-300">$Transfer files</p>
                <p className="text-green-300"> {"> conection established"}</p>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center">
          <div
            onClick={() => {
              setIsClick(!isClick);
              console.log("Ransomware clicked! Timer activated.");
            }}
            className="p-1 rounded transition-all w-16 h-20 flex flex-col justify-between cursor-pointer"
          >
            <div className="w-full h-3/4">
              <div className="text-white font-bold absolute shadow-lg bg-[#2266ca] rounded-lg w-8 text-center">
                w
              </div>
              <div className="bg-[#41a5ee] rounded-t-sm w-full h-5"></div>
              <div className="bg-[#3380d6] w-full h-5"></div>
              <div className="bg-[#205fc0] w-full h-5"></div>
              <div className="bg-[#174594] rounded-b-sm w-full h-5"></div>
            </div>
            <div className="h-1/4 flex items-center justify-center"></div>
          </div>
          <span className="text-xs font-medium mt-1 text-white drop-shadow-md text-center">
            Word.tj
          </span>
        </div>
      )}
    </>
  );
}
