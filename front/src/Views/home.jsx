import NavBar from "../layouts/NavBar";
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
          <div className="hero min-h-screen">
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

        <section className="relative z-40 bg-[#D8E4F0] text-center w-full py-20">
          <div className="container mx-auto px-4 max-w-5xl">
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
            <motion.div
              className="mt-10"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <a href="/about" className="btn btn-outline btn-info">
                Conócenos mejor
              </a>
            </motion.div>
          </div>
        </section>

        <section className="relative z-40 bg-gradient-to-b from-[#b3e0fd] to-[#99d6fc] text-center w-full py-20">
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-7xl mx-auto">
              <motion.div
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
