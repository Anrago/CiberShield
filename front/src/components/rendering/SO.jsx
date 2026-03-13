import { useEffect, useState } from "react";
import Txt from "./txt";
import Ransomware from "./ransomware";
import useRenderHook from "../../hooks/render_hook";
import useInformativeCards from "../../hooks/informative_hook.js";
import TROJAN from "./trojan.jsx";
import Adware from "./adware.jsx";

export default function SO({ malware }) {
  const [selectedFile, setSelectedFile] = useState(null);
  const { files, setFiles } = useRenderHook();

  console.log("Malware: desde el SO", malware);
  const openFile = (file) => {
    setSelectedFile(file);
  };

  const closeModal = () => {
    setSelectedFile(null);
  };

  // Helper function to render the appropriate malware component
  const renderMalwareComponent = () => {
    if (!malware) return null;


    if (malware === "Ransomware") {
      return <Ransomware />;
    } else if (malware === "Troyanos") {
      return <TROJAN />;
    } else if (malware === "Adware") {
      return <Adware />;
    }

    return null;
  };

  return (
    <div className="bg-linear-to-r min-h-100 from-cyan-500 to-blue-500 min-w-[90%] relative p-4">
      <div className="flex-grow flex flex-row flex-wrap gap-4 pb-12">
        {files.map((file, index) => (
          <div
            key={index}
            className="flex flex-col items-center cursor-pointer hover:bg-blue-400/20 p-2 rounded transition-all"
            onClick={() => openFile(file)}
          >
            <Txt name={file.name} />
            <span className="text-xs font-medium mt-1 text-white drop-shadow-md">
              {file.name}
            </span>
          </div>
        ))}
        {renderMalwareComponent()}
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-12 bg-[#0078D7] flex items-center px-2 shadow-lg">
        <div className="flex items-center h-10 px-2 hover:bg-blue-600 rounded cursor-pointer">
          <div className="w-8 h-8 bg-white flex items-center justify-center rounded">
            <div className="grid grid-cols-2 grid-rows-2 gap-0.5">
              <div className="w-3 h-3 bg-red-500"></div>
              <div className="w-3 h-3 bg-green-500"></div>
              <div className="w-3 h-3 bg-blue-500"></div>
              <div className="w-3 h-3 bg-yellow-500"></div>
            </div>
          </div>
          <span className="text-white ml-2 font-medium">Start</span>
        </div>

        <div className="ml-auto flex items-center">
          <div className="text-white text-sm bg-[#005A9E] px-2 py-1 rounded">
            {new Date().toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            })}
          </div>
        </div>
      </div>

      {selectedFile && (
        <div className="fixed inset-0 bg-black/30 flex items-center justify-center z-50">
          <div className="bg-white rounded shadow-xl w-4/5 max-w-2xl h-[50%] overflow-hidden flex flex-col">
            <div className="bg-[#0078D7] text-white p-2  flex justify-between items-center">
              <div className="flex  items-center">
                <div className="w-4 h-4 mr-2 bg-white rounded">
                  <div className="border-b border-gray-400 w-full h-0.5 my-0.5"></div>
                  <div className="border-b border-gray-400 w-3/4 h-0.5 my-0.5"></div>
                </div>
                <h2 className="text-sm font-medium">
                  {selectedFile.name}.txt - Notepad
                </h2>
              </div>
              <div className="flex">
                <button className="w-8 h-6 flex items-center justify-center hover:bg-blue-600">
                  <span className="font-bold">_</span>
                </button>
                <button className="w-8 h-6 flex items-center justify-center hover:bg-blue-600">
                  <span className="font-bold">□</span>
                </button>
                <button
                  onClick={closeModal}
                  className="w-8 h-6 flex items-center justify-center hover:bg-red-600 transition-colors"
                >
                  <span className="font-bold">×</span>
                </button>
              </div>
            </div>

            <div className="bg-gray-100 text-gray-700 flex text-xs border-b">
              <div className="px-2 py-1 hover:bg-gray-200">File</div>
              <div className="px-2 py-1 hover:bg-gray-200">Edit</div>
              <div className="px-2 py-1 hover:bg-gray-200">View</div>
            </div>

            <div className="p-1 overflow-auto flex-grow bg-white">
              <textarea
                className="whitespace-pre-wrap font-mono text-gray-800 w-full h-full p-2 focus:outline-none resize-none"
                defaultValue={selectedFile.content || ""}
                readOnly
              ></textarea>
            </div>

            <div className="border-t border-gray-300 p-1 bg-gray-100 flex justify-between text-xs text-gray-600">
              <div>Ln 1, Col 1 | {toString(selectedFile.content).length}</div>
              <div className="flex items-center gap-2">
                <div>100% |</div>
                <div>Windows (CRLF) | </div>
                <div>UTF-8</div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
