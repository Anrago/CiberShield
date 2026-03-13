import ImageTemp from "../../assets/imagen.png";

import AsideBar from "../../layouts/asideBar";

export default function Virus() {
  return (
    <>
      <div className="flex h-full">
        <AsideBar />

        <div className="flex-1 p-10 justify-items-center bg-gray-100">
          <h2 className="text-5xl font-bold text-center">Virus Informático</h2>

          <div className="flex flex-col w-5/6 gap-2 mt-3">
            <h3 className="text-3xl text-start">¿Qué es?</h3>
            <p className="text-xl text-gray-700 mt-4">
              Un virus informático es un tipo de software malicioso diseñado para infectar y dañar dispositivos. 
              Suele propagarse al adherirse a archivos o programas legítimos y, una vez ejecutado, es capaz de replicarse 
              y extenderse a otros sistemas sin el conocimiento del usuario. 
              <br /><br />
              Su principal objetivo es reproducirse y difundirse, lo que puede provocar consecuencias graves como 
              la pérdida de datos, la corrupción de archivos y la interrupción del funcionamiento normal del sistema. 
              Algunos virus incluso permiten acceso no autorizado a información o dejan vulnerables los dispositivos frente a otros ataques.
              <br /><br />
              La prevención y detección temprana mediante programas antivirus y buenas prácticas de seguridad 
              informática son fundamentales para proteger los sistemas contra este tipo de amenazas.
            </p>

            <div className="flex justify-center m-8">
              <img
                src={ImageTemp}
                alt="Virus informático"
                className="w-64 h-auto rounded-lg shadow-lg"
              />
            </div>

            <h3 className="text-3xl text-start">¿Cómo afecta a mis dispositivos?</h3>
            <p className="text-xl text-gray-700 mt-4">
              Un virus puede afectar negativamente el rendimiento de un dispositivo al consumir recursos del sistema, 
              como la memoria y el procesador. Esto provoca lentitud, fallos en el software, reinicios inesperados 
              o incluso la imposibilidad de arrancar el sistema operativo.
              <br /><br />
              Además, puede dañar o eliminar archivos importantes, modificar configuraciones del sistema, 
              y en casos más graves, inutilizar por completo el dispositivo.
              Algunos virus también abren puertas traseras que permiten a atacantes remotos ejecutar comandos o 
              instalar software adicional sin consentimiento del usuario.
            </p>

            <div className="flex justify-center m-8">

            </div>

            <h3 className="text-3xl text-start">¿Cómo identificarlo?</h3>
            <p className="text-xl text-gray-700 mt-4">
              Detectar un virus no siempre es sencillo, pero hay señales comunes que pueden alertarte:
            </p>
            <ul className="list-disc list-inside text-xl text-gray-700 mt-4">
              <li><strong>Rendimiento anormal:</strong> El sistema se vuelve lento sin razón aparente.</li>
              <li><strong>Errores frecuentes:</strong> Programas que se cierran inesperadamente o mensajes de error constantes.</li>
              <li><strong>Archivos corruptos o desaparecidos:</strong> Documentos que no abren o han sido eliminados.</li>
              <li><strong>Comportamiento extraño:</strong> Aparición de ventanas emergentes, ejecución de programas desconocidos o cambios en la configuración.</li>
              <li><strong>Antivirus desactivado:</strong> Algunos virus intentan deshabilitar software de seguridad.</li>
            </ul>

            <h3 className="text-3xl text-start">¿Cómo prevenirlo?</h3>
            <p className="text-xl text-gray-700 mt-4">
              La prevención es clave para protegerse de los virus informáticos. Algunas buenas prácticas incluyen:
            </p>
            <ul className="list-disc list-inside text-xl text-gray-700 mt-4">
              <li>Instalar y mantener actualizado un antivirus confiable.</li>
              <li>No abrir archivos adjuntos o enlaces sospechosos en correos electrónicos.</li>
              <li>Actualizar regularmente el sistema operativo y el software instalado.</li>
              <li>Evitar descargar programas de sitios no verificados o inseguros.</li>
              <li>Hacer copias de seguridad periódicas para no perder información en caso de infección.</li>
            </ul>
            <p className="text-xl text-gray-700 mt-4">
              Mantener una buena higiene digital y estar alerta ante comportamientos inusuales es esencial para mantener tus dispositivos libres de virus.
            </p>

            <div className="flex justify-center m-8">
              <img
                src={ImageTemp}
                alt="Virus informático"
                className="w-64 h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
