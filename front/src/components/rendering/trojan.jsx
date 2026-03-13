import useRenderHook from "../../hooks/render_hook";
export default function TOJAN() {
  const { isClick, setContDown, setIsClick, activeMalware, contDown } =
    useRenderHook();
  return (
    <>
      {isClick ? (
        <div className="absolute inset-0 z-50 bg-gray-900 flex items-center justify-center">
          <div className="bg-green-950 text-green-100 rounded-lg border-t border-green-800 shadow-lg px-6 py-4">
            <span className="block font-mono text-sm mb-2">
              [backdoor_point_access.exe]
            </span>

            <div className="bg-black rounded-lg px-4 py-3 space-y-1 font-mono text-sm">
              <p className="text-green-300">&gt; connection established</p>
              <p className="text-green-300">$ transfer files</p>
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
