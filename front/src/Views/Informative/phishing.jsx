import "../../style/phishing-style.css";
import AsideBar from "../../layouts/asideBar.jsx";
import ImageTemp from "../../assets/imagen.png";


export default function Phishing() {
  return (
    <div className="flex h-full">
      <AsideBar />

      <div className="flex-1 p-10 justify-items-center bg-gray-100">
        <h2 className="text-5xl font-bold text-center">Phishing</h2>

        <div className="flex flex-col w-5/6 gap-2 mt-3">
          <h3 className="text-3xl text-start">¿Qué es?</h3>
          <p className="text-xl text-gray-700 mt-4">
            El phishing es una técnica de fraude utilizada por ciberdelincuentes
            para engañar a las personas y obtener información confidencial como
            contraseñas, números de tarjetas de crédito o credenciales
            bancarias. Este tipo de ataque se realiza haciéndose pasar por
            entidades legítimas a través de correos electrónicos, mensajes SMS o
            incluso llamadas telefónicas.
          </p>
          <p className="text-xl text-gray-700 mt-4">
            Es uno de los métodos más comunes de ingeniería social, y su éxito
            depende en gran medida de la capacidad del atacante para ganarse la
            confianza de la víctima.
          </p>

          <div className="mt-4">
            <h3 className="text-2xl text-start text-gray-800 mb-2">
              ¿Cómo funciona?
            </h3>
            <ol className="list-decimal list-inside text-xl text-gray-700 space-y-2">
              <li>
                El atacante se hace pasar por una entidad confiable (banco, red
                social, etc.).
              </li>
              <li>Envía un mensaje con un enlace o archivo malicioso.</li>
              <li>La víctima accede al enlace o descarga el archivo.</li>
              <li>
                Ingresa su información sin sospechar que es un sitio falso.
              </li>
              <li>El atacante roba los datos y puede usarlos o venderlos.</li>
            </ol>
          </div>

          <div className="flex justify-center m-8">
            <img
              src={ImageTemp}
              alt="Phishing"
              className="w-64 h-auto rounded-lg shadow-lg"
            />
          </div>

          <h3 className="text-3xl text-start">Tipos comunes de phishing</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4 text-xl text-gray-700">
            {[
              {
                titulo: "Phishing por correo",
                desc: "Utiliza correos electrónicos falsos para engañar al usuario.",
              },
              {
                titulo: "Smishing (SMS)",
                desc: "Ataques mediante mensajes de texto falsos.",
              },
              {
                titulo: "Vishing (llamadas)",
                desc: "Fraudes a través de llamadas telefónicas.",
              },
              {
                titulo: "Spear phishing",
                desc: "Ataques dirigidos a una persona específica o grupo reducido.",
              },
              {
                titulo: "Pharming",
                desc: "Redirecciona al usuario a sitios falsos sin que lo note.",
              },
              {
                titulo: "Phishing en redes sociales",
                desc: "Utiliza perfiles o mensajes engañosos en redes sociales.",
              },
            ].map(({ titulo, desc }) => (
              <div
                key={titulo}
                className="p-4 border rounded shadow bg-gray-50"
              >
                <h3 className="font-semibold">{titulo}</h3>
                <p className="text-sm text-gray-600">{desc}</p>
              </div>
            ))}
          </div>

          <h3 className="text-3xl text-start">¿Cómo identificarlo?</h3>
          <ul className="list-disc list-inside text-xl text-gray-700 mt-4 space-y-2">
            <li>
              Correos con errores gramaticales o diseños poco profesionales.
            </li>
            <li>Solicitudes urgentes de información personal.</li>
            <li>Enlaces que llevan a sitios web sospechosos.</li>
            <li>Remitentes desconocidos o direcciones de correo extrañas.</li>
            <li>Archivos adjuntos inesperados o no solicitados.</li>
          </ul>

          <h3 className="text-3xl text-start mt-8">¿Cómo protegerse?</h3>
          <ul className="list-disc list-inside text-xl text-gray-700 mt-4 space-y-2">
            <li>No hagas clic en enlaces sospechosos.</li>
            <li>Verifica siempre el remitente del mensaje.</li>
            <li>Usa autenticación de dos factores (2FA).</li>
            <li>Mantén actualizado tu antivirus y sistema operativo.</li>
            <li>No compartas información sensible sin verificar la fuente.</li>
            <li>Utiliza contraseñas fuertes y únicas.</li>
          </ul>

          <p className="text-xl text-gray-700 mt-4">
            La mejor defensa contra el phishing es la educación. Aprende a
            detectar estos ataques y mantente alerta ante cualquier intento
            sospechoso de obtener tus datos.
          </p>

          <div className="flex justify-center m-8">
            <img
              src={ImageTemp}
              alt="Protección contra phishing"
              className="w-64 h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
