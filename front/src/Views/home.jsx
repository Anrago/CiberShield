import InformativeCards from "../components/informativeCards";
import LetterGlitch from "../Backgrounds/LetterGlitch/LetterGlitch";
import DecryptedText from "../TextAnimations/DecryptedText/DecryptedText";
import MVCards from "../components/MVcards";
import Virus from "../assets/images/virus.png";
import socialEngineering from "../assets/images/ingenieria-social.png";
import Practices from "../assets/images/practices.png";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <>
      <div className="bg-[var(--colorBase)] min-h-screen relative overflow-hidden">
        <div className="fixed inset-0 z-0">
          <LetterGlitch
            glitchSpeed={50}
            centerVignette={true}
            outerVignette={false}
            smooth={true}
          />
        </div>

        <main>
          <div className="hero h-screen">
            <div className="hero-content flex flex-col lg:flex-row-reverse max-w-7xl mx-auto">
              <motion.div
                className="lg:w-1/2 flex items-center justify-center"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <img
                  src="https://img.freepik.com/free-vector/cyber-security-concept_23-2148532223.jpg"
                  alt="Cybersecurity Shield"
                  className="max-w-md rounded-lg shadow-2xl"
                />
              </motion.div>
              <motion.div
                className="lg:w-1/2"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h1 className="text-7xl font-bold">
                  <DecryptedText
                    text={"Bienvenido a"}
                    speed={100}
                    fontSize={"text-9xl"}
                    animateOn="view"
                    className="text-[#D9FAE7] text-8xl"
                    sequential={true}
                    encryptedClassName="text-[#D9FAE7]"
                  />
                  <br />
                  <DecryptedText
                    text={"CiberShield"}
                    speed={120}
                    fontSize={""}
                    animateOn="view"
                    className="text-[#C3ACD5] text-8xl"
                    sequential={true}
                    encryptedClassName="text-[#C3ACD5]"
                  />
                </h1>
                <p className="py-6 text-4xl text-white">
                  Tu escudo contra las amenazas digitales
                </p>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <a
                    href="#servicios"
                    className="btn btn-primary btn-lg px-10 mt-4"
                  >
                    Descubre más
                  </a>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </main>

        <section
          id="servicios"
          className="relative z-40 bg-[#FFFFFF] text-center w-full py-20"
        >
          <div className="container mx-auto px-4">
            <motion.h2
              className="text-5xl font-bold mb-16 text-gray-800"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              NUESTROS SERVICIOS
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <InformativeCards
                  title={"Malware: Software que juega en tu contra"}
                  description={
                    "Descubre qué es el malware, cómo infecta tus dispositivos y cuáles son los tipos más peligrosos que existen hoy"
                  }
                  color={"#FF4848"}
                  link={"/info/malware"}
                  image={Virus}
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <InformativeCards
                  title={"Ingeniería social: El arte de engañar"}
                  description={
                    "Descubre cómo los atacantes manipulan emociones y confianza para obtener acceso a información confidencial. Aprende sus técnicas más usadas."
                  }
                  color={"#34B08A"}
                  link={"/phishing"}
                  image={socialEngineering}
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <InformativeCards
                  title={"Prácticas: Refuerza tus defensas digitales"}
                  description={
                    "Pon a prueba tus conocimientos con ejercicios interactivos que simulan situaciones reales. Aprende haciendo y fortalece tu defensa digital"
                  }
                  color={"#E0E757"}
                  link={"/sessionExercise"}
                  image={Practices}
                />
              </motion.div>
            </div>
          </div>
        </section>

        <section className="relative lex flex-col z-40 content-center bg-[#D8E4F0] text-center min-h-screen w-full py-20">
          <div className="  container mx-auto px-4 max-w-5xl">
            <motion.h2
              className="text-5xl font-bold mb-10 text-gray-800"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              SOBRE NOSOTROS
            </motion.h2>
            <motion.p
              className="text-xl text-gray-700 leading-relaxed max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              viewport={{ once: true }}
            >
              En CyberShield, creemos que la mejor defensa contra las amenazas
              digitales es el conocimiento. Somos un equipo de profesionales en
              ciberseguridad, educación y desarrollo web comprometidos con
              formar usuarios conscientes y preparados. Nuestra misión es
              ayudarte a identificar y evitar peligros como la ingeniería
              social, el malware y otras técnicas de ataque cibernético,
              mediante contenido claro, práctico y accesible para todos. Desde
              simulaciones interactivas hasta ejercicios de prevención,
              trabajamos para que aprendas haciendo. Porque la seguridad empieza
              contigo.
            </motion.p>
          </div>
        </section>

        <section className="relative flex justify-center z-40 bg-gradient-to-b from-[#b3e0fd] to-[#99d6fc] text-center w-full py-20">
          <div className="container mx-auto px-4">
            <motion.h2
              className="text-5xl font-bold mb-16 text-gray-800"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              MISIÓN Y VISIÓN
            </motion.h2>
            <div className="flex flex-col md:flex-row justify-center items-center gap-10 max-w-5xl mx-auto">
              <motion.div
                className="w-full md:w-1/2 flex justify-center"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <MVCards
                  title="Misión"
                  content="Nuestra misión es democratizar el conocimiento en ciberseguridad, proporcionando herramientas educativas accesibles que permitan a cualquier persona reconocer, prevenir y responder adecuadamente a amenazas digitales. Nos comprometemos a transformar información técnica compleja en contenido práctico y comprensible para todos, construyendo una primera línea de defensa informada contra los ciberataques."
                ></MVCards>
              </motion.div>
              <motion.div
                className="w-full md:w-1/2 flex justify-center"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <MVCards
                  title="Visión"
                  content="Aspiramos a crear un mundo digital más seguro donde las personas estén empoderadas con el conocimiento necesario para protegerse en línea. Buscamos ser reconocidos como líderes en educación de ciberseguridad, contribuyendo significativamente a reducir el impacto de los ataques cibernéticos a través de la formación y concientización. Visualizamos una comunidad global de usuarios digitales confiados y preparados."
                ></MVCards>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
/*
import { BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// Datos para las gráficas de phishing
const phishingGrowthData = [
  { year: '2019', ataques: 114000 },
  { year: '2020', ataques: 241342 },
  { year: '2021', ataques: 316747 },
  { year: '2022', ataques: 423525 },
  { year: '2023', ataques: 512936 },
];

const moneyLostData = [
  { year: '2019', millones: 1700 },
  { year: '2020', millones: 3540 },
  { year: '2021', millones: 4200 },
  { year: '2022', millones: 6900 },
  { year: '2023', millones: 10200 },
];

const victimsByRegionData = [
  { name: 'Norteamérica', value: 37 },
  { name: 'Europa', value: 29 },
  { name: 'Asia', value: 24 },
  { name: 'Latinoamérica', value: 7 },
  { name: 'África', value: 3 },
];


<section className="relative z-40 bg-[#f8f9fa] text-center w-full py-20">
          <div className="container mx-auto px-4">
            <motion.h2
              className="text-5xl font-bold mb-6 text-gray-800"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              ESTADÍSTICAS DE PHISHING
            </motion.h2>
            
            <motion.p
              className="text-xl text-gray-700 leading-relaxed max-w-4xl mx-auto mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              El phishing se ha convertido en una de las amenazas más prevalentes en el mundo digital. 
              Observa el alarmante crecimiento de estos ataques y su impacto económico global.
            </motion.p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-7xl mx-auto mb-16">
              <motion.div
                className="bg-white p-6 rounded-lg shadow-lg"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-bold mb-4 text-gray-800">Crecimiento de ataques de phishing (2019-2023)</h3>
                <ResponsiveContainer width="100%" height={300}>
                  <AreaChart
                    data={phishingGrowthData}
                    margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="year" />
                    <YAxis />
                    <Tooltip formatter={(value) => [`${value.toLocaleString()} ataques`, 'Cantidad']} />
                    <Legend />
                    <Area type="monotone" dataKey="ataques" stroke="#8884d8" fill="#8884d8" name="Ataques registrados" />
                  </AreaChart>
                </ResponsiveContainer>
                <p className="mt-4 text-gray-600 text-left">
                  Los ataques de phishing han aumentado un <b>350%</b> en los últimos 5 años, 
                  con un incremento notable tras la pandemia debido al aumento del trabajo remoto.
                </p>
              </motion.div>

              <motion.div
                className="bg-white p-6 rounded-lg shadow-lg"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-bold mb-4 text-gray-800">Pérdidas económicas por phishing (Millones USD)</h3>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart
                    data={moneyLostData}
                    margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="year" />
                    <YAxis />
                    <Tooltip formatter={(value) => [`$${value.toLocaleString()} millones`, 'Pérdidas']} />
                    <Legend />
                    <Bar dataKey="millones" fill="#82ca9d" name="Millones USD perdidos" />
                  </BarChart>
                </ResponsiveContainer>
                <p className="mt-4 text-gray-600 text-left">
                  Las pérdidas económicas globales por phishing superaron los <b>10 mil millones de dólares</b> en 2023, 
                  con un aumento del 500% desde 2019.
                </p>
              </motion.div>
            </div>

            <motion.div
              className="bg-white p-6 rounded-lg shadow-lg max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Distribución de víctimas por región (2023)</h3>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={victimsByRegionData}
                    cx="50%"
                    cy="50%"
                    labelLine={true}
                    outerRadius={100}
                    fill="#8884d8"
                    dataKey="value"
                    nameKey="name"
                    label={({name, percent}) => `${name}: ${(percent * 100).toFixed(0)}%`}
                  >
                    {victimsByRegionData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={['#8884d8', '#82ca9d', '#ffc658', '#ff8042', '#0088FE'][index % 5]} />
                    ))}
                  </Pie>
                  <Tooltip formatter={(value) => [`${value}%`, 'Porcentaje']} />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
              <p className="mt-4 text-gray-600 text-left">
                Se estima que alrededor de <b>1.5 millones de personas</b> caen víctimas de ataques de phishing diariamente en todo el mundo. 
                Norteamérica y Europa son las regiones más afectadas, pero el crecimiento en Asia y Latinoamérica es acelerado.
              </p>
            </motion.div>
          </div>
        </section>
*/
