import NavBar from "../layouts/NavBar";
import InformativeCards from "../components/informativeCards";
import LetterGlitch from "../Backgrounds/LetterGlitch/LetterGlitch";
import DecryptedText from "../TextAnimations/DecryptedText/DecryptedText";
import MVCards from "../components/MVcards";
import Virus from "../assets/images/virus.png";
import socialEngineering from "../assets/images/ingenieria-social.png";
import Practices from "../assets/images/practices.png";

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
        <header className="relative z-50">
          <NavBar />
        </header>

        <main>
          <div className="hero min-h-screen">
            <div className="hero-content flex col lg:flex-row-reverse">
              {/* <img src="" alt="Hola" /> AGREGAR IMAGEN */}
              <div>
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
                  {" "}
                  Tu escudo contra las amenazas digitales
                </p>
              </div>
            </div>
          </div>
        </main>

        <section className="relative z-40 bg-[#e5f5ff] text-center col-span-2 row-span-3 w-full py-10 ">
          <h2 className=" text-5xl font-bold mb-10">SERVICIOS</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto ">
            <InformativeCards
              title={"Malware: Software que juega en tu contra"}
              description={
                " Descubre qué es el malware, cómo infecta tus dispositivos y cuáles son los tipos más peligrosos que existen hoy"
              }
              color={"#FF4848"}
              link={"/info/malware"}
              image={Virus}
            />
            <InformativeCards
              title={"Ingenieria social: El arte de engañar"}
              description={
                "Descubre cómo los atacantes manipulan emociones y confianza para obtener acceso a información confidencial. Aprende sus técnicas más usadas."
              }
              color={"#34B08A"}
              link={"/phishing"}
              image={socialEngineering}
            />
            <InformativeCards
              title={"Practicas: Refuerza tus defensas digitales"}
              description={
                "Pon a prueba tus conocimientos con ejercicios interactivos que simulan situaciones reales. Aprende haciendo y fortalece tu defensa digital"
              }
              color={"#E0E757"}
              link={"/sessionExercise"}
              image={Practices}
            />
          </div>
        </section>
        <section className="relative z-40 bg-[#ccebfe] text-center col-span-2 row-span-3 w-full py-10 ">
          <h2 className=" text-5xl font-bold mb-10">Sobre nosotros</h2>
          <p>
            En CyberShield, creemos que la mejor defensa contra las amenazas
            digitales es el conocimiento. Somos un equipo de profesionales en
            ciberseguridad, educación y desarrollo web comprometidos con formar
            usuarios conscientes y preparados. Nuestra misión es ayudarte a
            identificar y evitar peligros como la ingeniería social, el malware
            y otras técnicas de ataque cibernético, mediante contenido claro,
            práctico y accesible para todos. Desde simulaciones interactivas
            hasta ejercicios de prevención, trabajamos para que aprendas
            haciendo. Porque la seguridad empieza contigo.
          </p>
        </section>
        <section className="relative z-40 bg-[#ccebfe] text-center col-span-2 row-span-3 w-full py-10 ">
          <h2 className=" text-5xl font-bold mb-10">Mision y vision</h2>
          <div className="grid grid-cols-2 aling-items-center justify-items-center gap-8 max-w-7xl mx-auto ">
            <MVCards
              title="Mision"
              content="Nuestra mision es lograr "
            ></MVCards>
            <MVCards
              title="Vision"
              content="Nuestra vision es lograr "
            ></MVCards>
          </div>
        </section>
      </div>
    </>
  );
}

{
  /* #e5f5ff */
}
{
  /* #ccebfe */
}
