import React, { useEffect, useRef } from "react";
import { initSO } from "./SO.js";
export default function SODesing() {
  const canvasRef = useRef(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      canvas.width = 900;
      canvas.height = 600;
      initSO(canvas);
    }
  }, []);

  return (
    <>
      <canvas className="block" ref={canvasRef}></canvas>
    </>
  );
}
