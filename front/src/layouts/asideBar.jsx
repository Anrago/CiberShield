import { isDragActive } from "framer-motion";
import { NavLink } from "react-router";

export default function AsideBar() {
  return (
    <aside className="w-72 bg-gray-900 text-white p-6 min-h-screen shadow-lg relative">
      <div className="fixed w-60 top-1/2 transform -translate-y-1/2">
        <nav className="w-full">
          <ul className="space-y-6 text-sm font-medium w-full text-center">
            <li>
              <NavLink
                to="/info/malware"
                className={({ isActive }) =>
                  isActive
                    ? "block text-2xl font-semibold mb-10 text-blue-400 transition border-b-2 border-blue-400 pb-1"
                    : "block text-2xl font-semibold mb-10 hover:text-gray-300 transition"
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
                    ? "block text-2xl font-semibold mb-10 text-blue-400 transition border-b-2 border-blue-400 pb-1"
                    : "block text-2xl font-semibold mb-10 hover:text-gray-300 transition"
                }
              >
                Phishing
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </aside>
  );
}
