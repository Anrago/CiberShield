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
            Register
          </h2>

          <div>
            <label
              htmlFor="username"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Username
            </label>
            <input
              id="username"
              type="text"
              onChange={(e) => setUserName(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm bg-gray-50 text-gray-800 focus:outline-none focus:ring-2 focus:ring-amber-500"
              required
              placeholder="Enter a username"
              autoComplete="username"
            />
          </div>

          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              First Name
            </label>
            <input
              id="name"
              type="text"
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm bg-gray-50 text-gray-800 focus:outline-none focus:ring-2 focus:ring-amber-500"
              required
              placeholder="Enter your first name"
              autoComplete="given-name"
            />
          </div>

          <div>
            <label
              htmlFor="lastname"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Last Name
            </label>
            <input
              id="lastname"
              type="text"
              onChange={(e) => setLastName(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm bg-gray-50 text-gray-800 focus:outline-none focus:ring-2 focus:ring-amber-500"
              required
              placeholder="Enter your last name"
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
              className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm bg-gray-50 text-gray-800 focus:outline-none focus:ring-2 focus:ring-amber-500"
              required
              placeholder="Enter your email"
              autoComplete="email"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm bg-gray-50 text-gray-800 focus:outline-none focus:ring-2 focus:ring-amber-500"
              required
              placeholder="Create a password"
              autoComplete="new-password"
            />
          </div>

          <div>
            <label
              htmlFor="image"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Profile Image
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
            className="w-full bg-[#34B08A] text-white font-semibold py-2 rounded-md hover:bg-[#34908A] focus:outline-none focus:ring-2 focus:ring-amber-400 transition duration-200"
          >
            Register
          </button>
        </form>
      </div>
    </>
  );
}
