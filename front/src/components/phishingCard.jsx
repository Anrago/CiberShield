import { useEffect } from "react";
import useInformativeCards from "../hooks/informative_hook";
import EmailExample from "./rendering/EmailExample";
import SocialMediaExample from "./rendering/socialMediaExample.jsx";
import SMSExample from "./rendering/SMS.jsx";
export default function PhishingCard({ title, desc, howAfect, onClose }) {
  const { setIsOpen, example } = useInformativeCards();
  const handleClose = () => {
    setIsOpen(false);
    if (onClose) {
      onClose();
    }
  };

  const renderExample = () => {
    if (title == "Phishing por correo") return <EmailExample />;
    if (title == "Phishing en redes sociales") return <SocialMediaExample />;
    if (title == "Smishing (SMS)") return <SMSExample />;
  }
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
          </div>
          {renderExample()}
        </div>
      </dialog>
    </>
  );
}
