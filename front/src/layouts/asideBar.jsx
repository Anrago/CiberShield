import { isDragActive } from "framer-motion";
import { NavLink } from "react-router";

export default function AsideBar() {
  return (
    <aside className="w-72 bg-gray-900 text-white p-6 min-h-screen shadow-lg">
      <NavLink
        to="/"
        className="block text-3xl font-semibold mb-10 hover:text-gray-300 transition"
      >
        CiberShield
      </NavLink>
      <nav>
        <ul className="space-y-6 text-sm font-medium">
          {/* Sección: Malware */}
          <li>
            <span
              className={({ isActive }) =>
                isActive
                  ? "block px-4 py-2 text-gray-400 uppercase tracking-wider"
                  : "block px-4 py-2 rounded-md hover:bg-gray-700 transition"
              }
            >
              Malware
            </span>
            <ul className="ml-4 space-y-2">
              <li>
                <NavLink
                  to="/info/malware/virus"
                  className={({ isActive }) =>
                    isActive
                      ? "block px-4 py-2 text-white bg-gray-700 rounded-md transition-colors"
                      : "block px-4 py-2 rounded-md hover:bg-gray-700 transition"
                  }
                >
                  Virus
                </NavLink>
              </li>
              <li className="ml-4">
                <NavLink
                  to="/malware"
                  className={({ isActive }) =>
                    isActive
                      ? "block px-4 py-2 text-white bg-gray-700 rounded-md transition-colors"
                      : "block px-4 py-2 rounded-md hover:bg-gray-700 transition"
                  }
                >
                Malware
                </NavLink>

              </li>
              <li>
                <NavLink
                  to="/info/malware/ransomware"
                  className={({ isActive }) =>
                    isActive
                      ? "block px-4 py-2 text-white bg-gray-700 rounded-md transition-colors"
                      : "block px-4 py-2 rounded-md hover:bg-gray-700 transition"
                  }
                >
                  Ransomware
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/info/malware/spyware"
                  className={({ isActive }) =>
                    isActive
                      ? "block px-4 py-2 text-white bg-gray-700 rounded-md transition-colors"
                      : "block px-4 py-2 rounded-md hover:bg-gray-700 transition"
                  }
                >
                  Spyware
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/info/malware/worm"
                  className={({ isActive }) =>
                    isActive
                      ? "block px-4 py-2 text-white bg-gray-700 rounded-md transition-colors"
                      : "block px-4 py-2 rounded-md hover:bg-gray-700 transition"
                  }
                >
                  Gusano
                </NavLink>
              </li>
            </ul>
          </li>

          {/* Sección: Ingeniería Social */}
          <li>
            <span className="block px-4 py-2 text-gray-400 uppercase tracking-wider">
              Ingeniería Social
            </span>
            <ul className="ml-4 space-y-2">
              <li>
                <NavLink
                  to="/info/ingenieria-social/phishing"
                  className={({ isActive }) =>
                    isActive
                      ? "block px-4 py-2 text-white bg-gray-700 rounded-md transition-colors"
                      : "block px-4 py-2 rounded-md hover:bg-gray-700 transition"
                  }
                >
                  Phishing
                </NavLink>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </aside>
  );
}
