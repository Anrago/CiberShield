import ImageTemp from "../../assets/imagen.png";
import SO from "../../components/rendering/SO.jsx";
import AsideBar from "../../layouts/asideBar";

export default function Ransomware() {
  return (
    <>
      <div className="flex h-full">
        <AsideBar />

        <div className="flex-1 p-10 justify-items-center bg-gray-100">
          <h2 className="text-5xl font-bold text-center">Ransomware</h2>

          <div className="flex flex-col w-5/6 gap-2 mt-3">
            <h3 className="text-3xl text-start">¿Qué es?</h3>
            <p className="text-xl text-gray-700 mt-4">
              El ransomware es un tipo de software malicioso (malware) que impide el acceso a los datos almacenados en un dispositivo, generalmente cifrándolos, y exige un pago —conocido como "rescate"— para restaurar el acceso. Este tipo de amenaza informática suele propagarse a través de correos electrónicos de phishing, archivos adjuntos infectados o descargas de sitios web maliciosos.
            </p>
            <p className="text-xl text-gray-700 mt-4">
              Además de cifrar los archivos, muchos ataques modernos también amenazan con publicar la información robada si no se realiza el pago, lo que añade una presión adicional a las víctimas, ya que puede implicar la exposición de datos confidenciales o personales.
            </p>
            <p className="text-xl text-gray-700 mt-4">
              Existen diferentes variantes de ransomware, cada una con características y métodos de ataque específicos.
            </p>

            <div className="mt-4">
              <h3 className="text-2xl text-start text-gray-800 mb-2">
                Tipos comunes de ransomware
              </h3>
              <ul className="list-disc list-inside text-xl text-gray-700">
                <li><strong>Crypto-ransomware:</strong> Cifra los archivos del usuario y exige un rescate a cambio de la clave de descifrado.</li>
                <li><strong>Locker ransomware:</strong> Bloquea por completo el acceso al sistema operativo, impidiendo al usuario interactuar con el dispositivo.</li>
                <li><strong>Doxware o Leakware:</strong> Amenaza con publicar información confidencial de la víctima si no se paga el rescate.</li>
                <li><strong>Scareware:</strong> Simula ser una advertencia legítima del sistema o un antivirus falso para engañar al usuario y hacerle pagar por una "solución".</li>
              </ul>
            </div>

            <div className="flex justify-center m-8">
              <img src={ImageTemp} alt="Ransomware" className="w-64 h-auto rounded-lg shadow-lg" />
            </div>

            <h3 className="text-3xl text-start">¿Cómo afecta a mis dispositivos?</h3>
            <p className="text-xl text-gray-700 mt-4">
              Como se mencionó anteriormente, el ransomware cifra los archivos y datos almacenados en un dispositivo. Esto significa que, si este tipo de malware logra infiltrarse en un sistema, los usuarios pueden perder el acceso a archivos personales, documentos importantes, fotografías y otra información valiosa.
            </p>
            <p className="text-xl text-gray-700 mt-4">
              Además, el ransomware no solo afecta al equipo inicialmente infectado. Puede propagarse a través de redes locales o compartidas, lo que le permite extenderse a otros dispositivos conectados, incluyendo computadoras, servidores o unidades de almacenamiento en red. Esta capacidad de propagación puede paralizar por completo entornos domésticos o empresariales.
            </p>
            <p className="text-xl text-gray-700 mt-4">
              En algunos casos, incluso después de pagar el rescate, los archivos no son recuperados, o el sistema queda vulnerable a futuros ataques. Por eso, la prevención, la copia de seguridad regular y el uso de software de seguridad actualizado son medidas fundamentales para proteger tus dispositivos frente a esta amenaza.
            </p>

            <div className="flex justify-center m-8">
              <SO />
            </div>

            <h3 className="text-3xl text-start">¿Como identificarlo?</h3>
            <p className="text-xl text-gray-700 mt-4">
              Identificar un ataque de ransomware no es tan difícil, solo hay que poner atención a ciertos signos y comportamientos dentro del dispositivo que pueden indicar su presencia.
            </p>
            <ul className="list-disc list-inside text-xl text-gray-700">
              <li>Archivos cifrados: Si encuentras archivos con extensiones inusuales o que no puedes abrir, podría ser un signo de cifrado.</li>
              <li>Mensajes de rescate: Si aparece una nota en tu pantalla exigiendo un pago para recuperar tus archivos, es una clara señal de ransomware.</li>
              <li>Rendimiento lento: Un dispositivo infectado puede volverse lento o inestable debido a la actividad del malware.</li>
              <li>Archivos desconocidos: La aparición repentina de archivos o programas desconocidos en tu sistema puede ser un indicativo.</li>
              <li>Cambios en la configuración: Si notas cambios inesperados en la configuración de tu sistema o en tus archivos, podría ser un signo de infección.</li>
            </ul>

            <h3 className="text-3xl text-start">¿Cómo prevenirlo?</h3>
            <p className="text-xl text-gray-700 mt-4">
              La prevención es clave para protegerse contra el ransomware. Aquí hay algunas medidas que puedes tomar:
            </p>
            <ul className="list-disc list-inside text-xl text-gray-700">
              <li>Mantén tu software y sistema operativo actualizados para corregir vulnerabilidades.</li>
              <li>Utiliza un software antivirus y antimalware confiable y mantenlo actualizado.</li>
              <li>Realiza copias de seguridad regulares de tus datos en dispositivos externos o en la nube.</li>
              <li>Ten cuidado con los correos electrónicos sospechosos y evita hacer clic en enlaces o descargar archivos de fuentes no confiables.</li>
              <li>Desactiva macros en documentos de Office, ya que son una vía común de infección.</li>
            </ul>

            <p className="text-xl text-gray-700 mt-4">
              Recuerda que la educación y la conciencia son tus mejores herramientas para prevenir ataques de ransomware. Mantente informado sobre las últimas amenazas y técnicas de ataque para protegerte mejor.
            </p>

            <div className="flex justify-center m-8">
              <img src={ImageTemp} alt="Ransomware" className="w-64 h-auto rounded-lg shadow-lg" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
