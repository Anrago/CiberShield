import { NavLink } from "react-router";
import { useState, useEffect } from "react";
import logo from "../../public/ciberShieldLogo.png";

export default function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false);

  // Add scroll effect to navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header className="z-50 sticky top-0">
        <div
          className={`navbar ${
            isScrolled
              ? "bg-gradient-to-r from-[#1a4263] to-[#2a5377] shadow-lg"
              : "bg-gradient-to-r from-[#1e3a5f] to-[#2d4e78]"
          } text-[#D9FAE7] transition-all duration-300`}
        >
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost hover:bg-[#3a6491] lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-gradient-to-b from-[#1e3a5f] to-[#2d4e78] text-[#D9FAE7] rounded-box z-50 mt-3 w-52 p-2 shadow-lg"
              >
                <li>
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      isActive
                        ? "font-bold bg-[#3a6491] text-white"
                        : "hover:bg-[#3a6491] hover:bg-opacity-70"
                    }
                  >
                    Inicio
                  </NavLink>
                </li>
                <li>
                  <a
                    href="/#sobre-nosotros"
                    className="hover:bg-[#3a6491] hover:bg-opacity-70"
                  >
                    Acerca de nosotros
                  </a>
                </li>
                <li>
                  <span className="hover:bg-[#3a6491] hover:bg-opacity-70">
                    Servicios
                  </span>
                  <ul className="p-2 bg-gradient-to-b from-[#1e3a5f] to-[#2d4e78]">
                    <li>
                      <NavLink
                        to="/info/malware"
                        className={({ isActive }) =>
                          isActive
                            ? "font-bold bg-[#3a6491] text-white"
                            : "hover:bg-[#3a6491] hover:bg-opacity-70"
                        }
                      >
                        Malware
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/phishing"
                        className={({ isActive }) =>
                          isActive
                            ? "font-bold bg-[#3a6491] text-white"
                            : "hover:bg-[#3a6491] hover:bg-opacity-70"
                        }
                      >
                        Ingeniería Social
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/sessionExercise"
                        className={({ isActive }) =>
                          isActive
                            ? "font-bold bg-[#3a6491] text-white"
                            : "hover:bg-[#3a6491] hover:bg-opacity-70"
                        }
                      >
                        Prácticas
                      </NavLink>
                    </li>
                  </ul>
                </li>
                <li>
                  <NavLink
                    to="/contact"
                    className={({ isActive }) =>
                      isActive
                        ? "font-bold bg-[#3a6491] text-white"
                        : "hover:bg-[#3a6491] hover:bg-opacity-70"
                    }
                  >
                    Contacto
                  </NavLink>
                </li>
              </ul>
            </div>
            <NavLink to="/" className="btn btn-ghost hover:bg-transparent">
              <img
                src={logo}
                alt="CiberShield Logo"
                className="h-15 w-15 object-contain"
              />

              <span className="text-xl font-bold text-gradient bg-gradient-to-r from-[#D9FAE7] to-[#C3ACD5] inline-block text-transparent bg-clip-text">
                CiberShield
              </span>
            </NavLink>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive
                      ? "font-bold bg-[#3a6491] text-white"
                      : "hover:bg-[#3a6491] hover:bg-opacity-70"
                  }
                >
                  Inicio
                </NavLink>
              </li>
              <li>
                <a
                  href="/#sobre-nosotros"
                  className="hover:bg-[#3a6491] hover:bg-opacity-70"
                >
                  Acerca de nosotros
                </a>
              </li>
              <li>
                <details>
                  <summary className="hover:bg-[#3a6491] hover:bg-opacity-70">
                    Servicios
                  </summary>
                  <ul className="p-2 bg-gradient-to-b from-[#1e3a5f] to-[#2d4e78] rounded-box shadow-xl border border-[#3a6491]">
                    <li>
                      <NavLink
                        to="/info/malware"
                        className={({ isActive }) =>
                          isActive
                            ? "font-bold bg-[#3a6491] text-white"
                            : "hover:bg-[#3a6491] hover:bg-opacity-70"
                        }
                      >
                        Malware
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/info/phishing"
                        className={({ isActive }) =>
                          isActive
                            ? "font-bold bg-[#3a6491] text-white"
                            : "hover:bg-[#3a6491] hover:bg-opacity-70"
                        }
                      >
                        Phishing
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/sessionExercise"
                        className={({ isActive }) =>
                          isActive
                            ? "font-bold bg-[#3a6491] text-white"
                            : "hover:bg-[#3a6491] hover:bg-opacity-70"
                        }
                      >
                        Prácticas
                      </NavLink>
                    </li>
                  </ul>
                </details>
              </li>
            </ul>
          </div>
          <div className="navbar-end">
            {localStorage.getItem("token") ? (
              <NavLink
                to={"/profile"}
                className={({ isActive }) =>
                  isActive
                    ? "font-bold bg-[#3a6491] text-white"
                    : "hover:bg-[#3a6491] hover:bg-opacity-70 flex flex-row-reverse items-center gap-2"
                }
              >
                <div className="flex flex-row  gap-3 items-center justify-center align-center">
                  <p>{JSON.parse(localStorage.getItem("profile")).name}</p>
                  <img
                    className="w-10 h-10  rounded-full shadow-md my-auto border-4 border-[#3F88C5] object-cover"
                    src={JSON.parse(localStorage.getItem("profile")).imgPerfil}
                  ></img>
                </div>
              </NavLink>
            ) : (
              <ul className="menu menu-horizontal px-1 gap-2">
                <li>
                  <NavLink
                    to="/login"
                    className={({ isActive }) =>
                      isActive
                        ? "btn bg-gradient-to-r from-[#34B08A] to-[#2d9a78] hover:from-[#2d9a78] hover:to-[#34B08A] border-none text-white"
                        : "btn bg-transparent hover:bg-[#34B08A] hover:bg-opacity-20 border-[#34B08A] text-[#D9FAE7]"
                    }
                  >
                    Iniciar Sesión
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/register"
                    className={({ isActive }) =>
                      isActive
                        ? "btn bg-gradient-to-r from-[#C3ACD5] to-[#a58bc0] hover:from-[#a58bc0] hover:to-[#C3ACD5] border-none text-white"
                        : "btn bg-transparent hover:bg-[#C3ACD5] hover:bg-opacity-20 border-[#C3ACD5] text-[#D9FAE7]"
                    }
                  >
                    Registrarse
                  </NavLink>
                </li>
              </ul>
            )}
          </div>
        </div>
      </header>
    </>
  );
}
