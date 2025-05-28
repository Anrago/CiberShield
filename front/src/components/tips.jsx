import { useState, useEffect } from "react";
import tipsData from "../json/tips.json";

export default function TipsDisplay() {
  const [currentTipIndex, setCurrentTipIndex] = useState(0);
  const tips = tipsData.tips;

  useEffect(() => {
    if (currentTipIndex >= tips.length) {
      setCurrentTipIndex(0);
    }
  }, [currentTipIndex, tips.length]);

  const handleNextTip = () => {
    setCurrentTipIndex((prevIndex) => (prevIndex + 1) % tips.length);
  };

  const currentTip = tips[currentTipIndex];

  return (
    <div className="flex justify-center mt-10">
      <div className="card w-96 bg-gradient-to-br from-green-50 to-green-100 shadow-lg border border-green-200 rounded-lg p-4">
        <div className="card-body space-y-3">
          <h2 className="text-lg font-semibold text-blue-700">
            💡 Consejo {currentTipIndex + 1} de {tips.length}
          </h2>
          <p className="text-gray-700 text-sm">{currentTip.content}</p>
          <div className="card-actions justify-end">
            <button
              className="btn btn-sm btn-primary hover:scale-105 transition-transform duration-200"
              onClick={handleNextTip}
            >
              Siguiente →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
