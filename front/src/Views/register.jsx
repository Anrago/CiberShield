import LetterGlitch from "../Backgrounds/LetterGlitch/LetterGlitch";
import useAuth from "../hooks/auth_hook"; // Asegúrate de que la ruta sea correcta
import Toaster from "../components/toaster.jsx";
export default function Register() {
  const {
    setEmail,
    setName,
    setLastName,
    setUserName,
    setPassword,
    setImage,
    handleRegister,
    toast,
  } = useAuth();

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

      <div className="flex items-center justify-center min-h-screen px-4 relative ">
        <form
          onSubmit={handleRegister}
          className="w-full max-w-md bg-white rounded-lg shadow-lg p-8 space-y-6"
          aria-label="Register form"
        >
          <h2 className="text-3xl font-bold text-center text-gray-800">
            Registro
          </h2>

          <div>
            <label
              htmlFor="username"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Nombre de Usuario
            </label>
            <input
              id="username"
              type="text"
              onChange={(e) => setUserName(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm bg-gray-50 text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#2b746f]"
              required
              placeholder="Ingrese su nombre de usuario"
              autoComplete="username"
            />
          </div>

          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Nombre
            </label>
            <input
              id="name"
              type="text"
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm bg-gray-50 text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#2b746f]"
              required
              placeholder="Ingrese su nombre"
              autoComplete="given-name"
            />
          </div>

          <div>
            <label
              htmlFor="lastname"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Apellidos
            </label>
            <input
              id="lastname"
              type="text"
              onChange={(e) => setLastName(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm bg-gray-50 text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#2b746f]"
              required
              placeholder="Ingrese sus apellidos"
              autoComplete="family-name"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm bg-gray-50 text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#2b746f]"
              required
              placeholder="Ingrese su email"
              autoComplete="email"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Contraseña
            </label>
            <input
              id="password"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              className="input validator w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm bg-gray-50 text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#2b746f]"
              required
              placeholder="Ingrese su contraseña"
              autoComplete="new-password"
              pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$"
              minLength="8"
              title="Debe contar con 8 caracteres, incluyendo numeros, letras en mayuscula y letras en minuscula"
            />
            <p className="validator-hint">
              Debe contar con 8 caracteres, incluyendo:
              <br />
              Al menos uno numero
              <br />
              Al menos una letra en mayuscula
              <br />
              Al menos una letra en minuscula
            </p>
          </div>

          <div>
            <label
              htmlFor="image"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Imagen de perfil
            </label>
            <input
              id="image"
              type="file"
              accept="image/*"
              onChange={(e) => setImage(e.target.files[0])}
              className="w-full text-sm text-gray-600 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:bg-[#34B08A] file:text-white hover:file:bg-[#34908A]"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#34B08A] text-white font-semibold py-2 rounded-md hover:bg-[#34908A] focus:outline-none focus:ring-2  transition duration-200"
          >
            Registrarse
          </button>
        </form>
      </div>
    </>
  );
}
