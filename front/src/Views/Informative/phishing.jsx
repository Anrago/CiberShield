import AsideBar from "../../layouts/asideBar.jsx";
import PhishingData from "../../json/phishingData.json";
import PhishingInf from "../../components/phishingInf.jsx";
import PhishingCard from "../../components/phishingCard.jsx";
import useInformativeCards from "../../hooks/informative_hook.js";
import help_3 from "../../assets/phishing/help_1.png";
import help_2 from "../../assets/phishing/help_2.png";
import help_1 from "../../assets/phishing/help_3.png";
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

export default function Phishing() {
  const { openCard, closeCard, isCardOpen } = useInformativeCards();
  const phishingInfo = PhishingData.phishingInfo;
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
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full">
              {/* Gráfico 1: Métodos de ataque de phishing más comunes */}
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold mb-4 text-gray-800 text-center">
                  Métodos de ataque más comunes
                </h3>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart
                    data={[
                      { metodo: "Email", porcentaje: 65 },
                      { metodo: "SMS", porcentaje: 18 },
                      { metodo: "Redessociales", porcentaje: 12 },
                      { metodo: "Llamadas", porcentaje: 5 },
                    ]}
                    margin={{ top: 10, right: 30, left: 20, bottom: 60 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis
                      dataKey="metodo"
                      angle={-45}
                      textAnchor="end"
                      height={60}
                    />
                    <YAxis
                      label={{
                        value: "Porcentaje",
                        angle: -90,
                        position: "insideLeft",
                      }}
                    />
                    <Tooltip
                      formatter={(value) => [`${value}%`, "Frecuencia"]}
                    />
                    <Legend verticalAlign="top" />
                    <Bar
                      dataKey="porcentaje"
                      name="Porcentaje de ataques"
                      fill="#8884d8"
                    />
                  </BarChart>
                </ResponsiveContainer>
                <p className="mt-4 text-sm text-gray-600 italic text-center">
                  Fuente: Informe de Amenazas de Ciberseguridad 2023
                </p>
              </div>

              {/* Gráfico 2: Evolución de ataques de phishing */}
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold mb-4 text-gray-800 text-center">
                  Evolución de ataques (2019-2023)
                </h3>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart
                    data={[
                      { year: "2019", ataques: 114000 },
                      { year: "2020", ataques: 241342 },
                      { year: "2021", ataques: 316747 },
                      { year: "2022", ataques: 423525 },
                      { year: "2023", ataques: 512936 },
                    ]}
                    margin={{ top: 10, right: 30, left: 20, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="year" />
                    <YAxis />
                    <Tooltip
                      formatter={(value) => [
                        `${value.toLocaleString()} ataques`,
                        "Cantidad",
                      ]}
                    />
                    <Legend verticalAlign="top" />
                    <Line
                      type="monotone"
                      dataKey="ataques"
                      name="Ataques de phishing"
                      stroke="#ff7300"
                      activeDot={{ r: 8 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
                <p className="mt-4 text-sm text-gray-600 italic text-center">
                  Aumento del 350% en ataques de phishing en los últimos 5 años
                </p>
              </div>
            </div>
          </div>

          <h3 className="text-3xl text-start">Tipos comunes de phishing</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4 text-xl text-gray-700">
            {phishingInfo.map(({ titulo, desc, efect }) => (
              <div
                key={titulo}
                className="p-4 border rounded shadow bg-gray-50"
              >
                {isCardOpen(titulo) ? (
                  <PhishingCard
                    desc={efect}
                    howAfect={titulo}
                    onClose={() => closeCard()}
                  />
                ) : (
                  <span
                    onClick={() => openCard(titulo)}
                    className="cursor-pointer"
                  >
                    <h3 className="font-semibold">{titulo}</h3>
                    <p className="text-sm text-gray-600">{desc}</p>
                  </span>
                )}
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

          <h3 className="text-3xl">Señales de alerta</h3>
          <div className="stack stack-end" >
            {[
              {
                title: "1: Urgencia",
                description:
                  "Los atacantes suelen enviar mensajes que crean un sentido de urgencia, como amenazas de cierre de cuenta, problemas de seguridad o actividad sospechosa.",
                image: help_1,
              },
              {
                title: "2: Remitente desconocido",
                description:
                  "Los correos electrónicos o mensajes provienen de remitentes desconocidos o sospechosos, a menudo con direcciones que imitan a empresas legítimas.",
                image: help_2,
              },
              {
                title: "3: Enlaces sospechosos",
                description:
                  "Los mensajes contienen enlaces que llevan a sitios web falsos diseñados para robar información personal o credenciales.\n la manera de identificar un enlace sospechoso es pasar el cursor sobre él para ver la URL real antes de hacer clic. Dicha URL real aparecera en la parte inferior izquierda de tu navegador.",
                image: help_3,
              },
            ].map((item, index) => (
              <PhishingInf
                key={index}
                title={item.title}
                description={item.description}
                image={item.image}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
