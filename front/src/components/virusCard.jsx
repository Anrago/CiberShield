import { useEffect } from "react";
import useInformativeCards from "../hooks/informative_hook";
import SO from "../components/rendering/SO.jsx";

export default function VirusCard({ title, desc, howAfect, onClose }) {
  const { setIsOpen, setMalware, malware } = useInformativeCards();
  useEffect(() => {
    setMalware(title);
  }, []);

  console.log("ENTRO", malware);

  const handleClose = () => {
    setIsOpen(false);
    if (onClose) {
      onClose();
    }
  };

  return (
    <>
      <dialog id="virusModal" className="modal">
        <div className="modal-box max-w-5xl">
          <form method="dialog">
            <button
              onClick={handleClose}
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            >
              ✕
            </button>
          </form>
          <h2 className="text-3xl font-bold text-center">{howAfect}</h2>
          <div className="py-4">
            <p className="text-lg">{desc}</p>
            <SO malware={title} />
          </div>
        </div>
      </dialog>
    </>
  );
}
