import React, { useState } from "react";

const ButtonExercis = ({ title, description, icon, onClick, color,textColor }) => {
  const [expanded, setExpanded] = useState(false);

  const handleClick = (e) => {
    if (onClick) {
      onClick(e);
    }
  };

  return (
    <div
      className={`relative w-64 m-3 cursor-pointer overflow-hidden rounded-xl transition-all duration-300 ${
        expanded ? "transform -translate-y-1 shadow-xl cursor-pointer"  : "shadow-md"
      }`}
      onMouseEnter={() => setExpanded(true)}
      onMouseLeave={() => setExpanded(false)}
    >
      <button
        onClick={handleClick}
        className="w-full p-4 flex items-center cursor-pointer justify-start bg-[var(--tempColor)] text-[var(--textColor)] rounded-t-xl transition-all duration-300"
        style={{ "--tempColor": color, "--textColor": textColor
         }}
      >
        {icon && <span className="text-2xl mr-3">{icon}</span>}
        <span className="font-bold text-lg">{title}</span>
      </button>

      <div
        className={`bg-white rounded-b-xl transition-all duration-300 overflow-hidden ${
          expanded
            ? "max-h-50 py-4 px-5 border-x border-b border-gray-200"
            : "max-h-0"
        }`}
      >
        <p className="text-gray-700 text-lg leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

export default ButtonExercis;
