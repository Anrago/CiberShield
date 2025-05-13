import NavBar from "../layouts/NavBar";
import InformativeCards from "../components/informativeCards";
import LetterGlitch from "../Backgrounds/LetterGlitch/LetterGlitch";
import DecryptedText from "../TextAnimations/DecryptedText/DecryptedText";
import Footer from "../layouts/footer";

import Virus from "../assets/images/virus.png";

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
              title={"Malware"}
              description={
                "lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, voluptatibus."
              }
              color={"#FF4848"}
              link={"/ransomware"}
              image={Virus}
            />
            <InformativeCards
              title={"Ingenieria social"}
              description={
                "lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, voluptatibus."
              }
              color={"#34B08A"}
            />
            <InformativeCards
              title={"Practicas"}
              description={
                "lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, voluptatibus."
              }
              color={"#E0E757"}
              link={"/sessionExercise"}
            />
          </div>
        </section>
        <section className="relative z-40 bg-[#ccebfe] text-center col-span-2 row-span-3 w-full py-10 ">
          <h2 className=" text-5xl font-bold mb-10">Sobre nosotros</h2>
        </section>
        <Footer />
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
