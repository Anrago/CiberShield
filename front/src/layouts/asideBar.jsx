import { NavLink } from "react-router";
export default function AsideBar() {
  return (
    <aside className="w-72 bg-gray-800 text-white p-6 min-h-screen">
      {/* Marca */}
      <NavLink
        to="/"
        className="block text-3xl font-bold mb-10 hover:text-gray-300 transition"
      >
        CiberShield
      </NavLink>

      {/* Navegación */}
      <nav>
        <ul className="space-y-4">
          <li>
            <a
              href="#"
              className="block px-4 py-2 rounded-md hover:bg-gray-700 transition"
            >
              Malware
            </a>
          </li>
          <li>
            <a
              href="/ransomware"
              className="block px-4 py-2 bg-white text-gray-900 rounded-md hover:bg-gray-200 transition"
            >
              Ransomware
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block px-4 py-2 rounded-md hover:bg-gray-700 transition"
            >
              Ingeniería Social
            </a>
          </li>
          <li>
            <a
              href="/phishing"
              className="block px-4 py-2 bg-white text-gray-900 rounded-md hover:bg-gray-200 transition"
            >
              Phishing
            </a>
          </li>
        </ul>
      </nav>
    </aside>
  );
}
