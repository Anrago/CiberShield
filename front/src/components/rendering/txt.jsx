export default function Txt({name}) {
  return (
    <div className="bg-white p-1 rounded shadow hover:shadow-md transition-all w-16 h-20 flex flex-col justify-between">
      <div className="w-full h-3/4 bg-gray-100 border border-gray-200">
        <div className="border-b border-gray-300 w-full h-1 my-1"></div>
        <div className="border-b border-gray-300 w-3/4 h-1 my-1"></div>
        <div className="border-b border-gray-300 w-1/2 h-1 my-1"></div>
      </div>
      <div className="h-1/4 bg-blue-100 flex items-center justify-center">
        <span className="text-[8px] text-blue-800 truncate w-full text-center">
          {name}.txt
        </span>
      </div>
    </div>
  );
}
