import { useState, useEffect, use } from "react";
export default function useRenderHook( ) {
  const [contDown, setContDown] = useState(10);
  const [activeMalware, setActiveMalware] = useState(false);
  const [isClick, setIsClick] = useState(false);
  const [component, setComponent] = useState(null);
  const [files, setFile] = useState([
    { name: "Password", content: "123456789\n" },
    { name: "Info", content: "" },
    {
      name: "code",
      content:
        '#include <iostream>\n int main(){\n cout<<"Hola" << endl;\n return 0;\n}',
    }]);
  

useEffect(() => {
  if (!isClick) return; 
  
  const timer = setTimeout(() => {
    setContDown(prev => {
      const newCount = prev - 1;
      console.log("Timer running, countdown:", newCount);
      if (newCount <= 7) {
        setFile(prevFiles => {
          const newFiles = [...prevFiles];
          
          newFiles[0] = { 
            name: "SW5mbw==", 
            content: "RU5DUllQVEVEX0NPTlRFTlQ="
          };
          return newFiles;
        });
      }
      
      if (newCount <= 5) {
        setFile(prevFiles => {
          const newFiles = [...prevFiles];
          
          newFiles[1] = { 
            name: "UGFzc3dvcmQ=",
            content: "MTIzNDU2Nzg5Q1JZUFRFRA=="
          };
          return newFiles;
        });
      }
      
      if (newCount <= 3) {
        setFile(prevFiles => {
          const newFiles = [...prevFiles];
          newFiles[2] = {
            name: "Y29kZQ==", 
            content: "RU5DUllQVEVEX0NPREVfQ09OVEVOVCBST0tZIEhBQ0tFRA=="
          };
          return newFiles;
        });
      }

      if (newCount <= 0) {
        setActiveMalware(true);
      }

      return newCount;
    });
  }, 1000);

  return () => clearTimeout(timer);
}, [contDown, isClick]);
  
  


  // Return an object with the values instead of using comma operator
  return { 
    Component: component, 
    isClick, 
    setIsClick,
    setFile,
    files,
    setContDown,
    contDown,
    activeMalware
  };
}