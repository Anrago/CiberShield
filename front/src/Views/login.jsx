import useAuth from "../hooks/auth_hook";
import LetterGlitch from "../Backgrounds/LetterGlitch/LetterGlitch";
import Toaster from "../components/toaster.jsx";

export default function Login() {
  const { setPassword, setUserName, handleLogin, toast, isLogued } = useAuth();

  return (
    <>
      <div className="fixed inset-0 z-0">
        <LetterGlitch
          glitchSpeed={100}
          centerVignette={false}
          outerVignette={true}
          smooth={true}
        />
      </div>

      {toast.show && (
        <Toaster
          message={toast.message}
          type={toast.type}
          onClose={() => toast.setToast({ ...toast, show: false })}
        />
      )}

      <div className="flex items-center justify-center h-screen relative z-10">
        <form
          onSubmit={handleLogin}
          className="w-full max-w-md bg-white shadow-lg rounded-lg p-8 space-y-6"
          aria-label="Login form"
        >
          <h2 className="text-3xl font-bold text-center text-gray-800">
            Inicio de Sesión
          </h2>

          <div>
            <label
              htmlFor="username"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Nombre de usuario o email
            </label>
            <input
              id="username"
              name="username"
              type="text"
              onChange={(e) => setUserName(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md bg-gray-50 text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#2b746f]"
              required
              placeholder="Introduce tu nombre de usuario o email"
              autoComplete="username"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Contarseña
            </label>
            <input
              id="password"
              name="password"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md bg-gray-50 text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#2b746f]"
              required
              placeholder="Introduce tu contraseña"
              autoComplete="current-password"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#34908A] text-white font-semibold py-2 rounded-md hover:bg-[#2b746f] focus:outline-none focus:ring-2 transition duration-200"
          >
            Iniciar sesión
          </button>
          <p className="text-sm text-gray-600 text-center">
            ¿No tienes una cuenta?{" "}
            <a
              href="/register"
              className="text-[#34908A] hover:underline"
            >
              Regístrate aquí
            </a>
          </p>
          
        </form>
      </div>
    </>
  );
}
