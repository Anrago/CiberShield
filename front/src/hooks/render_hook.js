import { useState, useEffect } from "react";

export default function useRenderHook({ type }) {
  const [contet, setContent] = useState(null);
  const [isClick, setIsClick] = useState(false);
  const [component, setComponent] = useState(null);
  
  // Use useEffect for side effects
  useEffect(() => {
    const components = {
      ransomware: () => import("../components/rendering/ransomware.jsx"),
    };
  
    if (components[type]) {
      components[type]().then((mod) => {
        setComponent(() => mod.default);
      });
    }
  }, [type]);
  

  // Return an object with the values instead of using comma operator
  return { 
    Component: component, 
    isClick, 
    setIsClick 
  };
}