import ImageTemp from "../../assets/imagen.png";
import SODesing from "../../components/rendering/SODesing";
import AsideBar from "../../layouts/asideBar";

export default function Worm() {
  return (
    <>
      <div className="flex h-full">
        <AsideBar />

        <div className="flex-1 p-10 justify-items-center bg-gray-100">
          <h2 className="text-5xl font-bold text-center">Gusano Informático (Worm)</h2>

          <div className="flex flex-col w-5/6 gap-2 mt-3">
            <h3 className="text-3xl text-start">¿Qué es?</h3>
            <p className="text-xl text-gray-700 mt-4">
              Un gusano informático, o *worm*, es un tipo de software malicioso que se replica a sí mismo 
              y se propaga automáticamente entre dispositivos, sin necesidad de intervención del usuario ni de adjuntarse a otros archivos.
              <br /><br />
              A diferencia de otros tipos de malware, los gusanos pueden distribuirse rápidamente a través de redes, 
              explotando vulnerabilidades de seguridad o utilizando correos electrónicos, dispositivos externos y otros medios para multiplicarse.
              <br /><br />
              Su capacidad de propagación autónoma los convierte en una amenaza especialmente peligrosa en entornos conectados, 
              como redes empresariales o sistemas públicos.
            </p>

            <div className="flex justify-center m-8">
              <img
                src={ImageTemp}
                alt="Gusano informático"
                className="w-64 h-auto rounded-lg shadow-lg"
              />
            </div>

            <h3 className="text-3xl text-start">¿Cómo afecta a mis dispositivos?</h3>
            <p className="text-xl text-gray-700 mt-4">
              Los gusanos pueden causar daños significativos al consumir recursos del sistema, saturar redes y 
              ralentizar el funcionamiento general de los dispositivos. 
              <br /><br />
              Aunque algunos gusanos están diseñados únicamente para propagarse, muchos llevan cargas maliciosas 
              (*payloads*) que pueden eliminar archivos, instalar puertas traseras, robar datos o permitir el control remoto del sistema afectado.
              <br /><br />
              Su capacidad de replicarse rápidamente también puede facilitar la propagación de otros tipos de malware, 
              como troyanos o ransomware, aumentando el nivel de riesgo para los sistemas infectados.
            </p>

            <div className="flex justify-center m-8">
              <SODesing />
            </div>

            <h3 className="text-3xl text-start">¿Cómo identificarlo?</h3>
            <p className="text-xl text-gray-700 mt-4">
              Aunque los gusanos pueden ser silenciosos, existen algunas señales que podrían indicar su presencia:
            </p>
            <ul className="list-disc list-inside text-xl text-gray-700 mt-4">
              <li><strong>Uso elevado del ancho de banda:</strong> Las redes se vuelven lentas sin razón aparente.</li>
              <li><strong>Rendimiento degradado:</strong> El sistema presenta lentitud o fallos frecuentes.</li>
              <li><strong>Archivos duplicados:</strong> Aparecen múltiples copias de archivos o procesos desconocidos.</li>
              <li><strong>Conexiones inusuales:</strong> Actividad de red sospechosa hacia servidores desconocidos.</li>
              <li><strong>Dispositivos vecinos afectados:</strong> Otros equipos en la misma red muestran síntomas similares.</li>
            </ul>

            <h3 className="text-3xl text-start">¿Cómo prevenirlo?</h3>
            <p className="text-xl text-gray-700 mt-4">
              Prevenir la propagación de gusanos requiere una combinación de prácticas de seguridad y herramientas adecuadas:
            </p>
            <ul className="list-disc list-inside text-xl text-gray-700 mt-4">
              <li>Actualiza regularmente tu sistema operativo y software para corregir vulnerabilidades.</li>
              <li>Utiliza un firewall y soluciones de seguridad que detecten tráfico malicioso.</li>
              <li>Evita conectar dispositivos USB de origen desconocido o no confiable.</li>
              <li>No abras correos electrónicos sospechosos ni ejecutes archivos adjuntos sin verificar su origen.</li>
              <li>Realiza copias de seguridad periódicas para minimizar el impacto en caso de infección.</li>
            </ul>
            <p className="text-xl text-gray-700 mt-4">
              La educación en ciberseguridad y el monitoreo constante de la red son esenciales para evitar que los gusanos informáticos comprometan tus sistemas.
            </p>

            <div className="flex justify-center m-8">
              <img
                src={ImageTemp}
                alt="Gusano informático"
                className="w-64 h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
