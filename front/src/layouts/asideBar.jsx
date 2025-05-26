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
          <li>
            <NavLink
              to="/malware"
              className="block text-3xl font-semibold mb-10 hover:text-gray-300 transition"
            >
              Malware
            </NavLink>
          </li>
        </ul>
      </nav>
    </aside>
  );
}
