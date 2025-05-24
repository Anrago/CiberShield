import Arrow from "../assets/Icons/ArrowSMS.svg";
import User from "../assets/Icons/userSMS.svg";
import Trash from "../assets/Icons/trash.svg";

import image from "../assets/Icons/image.svg";
import camera from "../assets/Icons/camera.svg";
import add from "../assets/Icons/add.svg";
import smile from "../assets/Icons/smile.svg";
import mic from "../assets/Icons/mic.svg";
import Modal from "./modal";

export default function ExerciseSMSCard({
  exercise,
  handleClose,
  onCorrectAnswer,
}) {
  const handleOption = (selection) => {
    if (selection === exercise.Categoria) {
      console.log("Correcto");
      if (onCorrectAnswer) onCorrectAnswer();
      return true;
    } else {
      console.log("Incorrecto");
      return false;
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-full bg-[var(--colorBase)] px-4">
      <div className="flex flex-col items-center gap-4">
        <div className="mockup-phone">
          <div className="mockup-phone-camera"></div>
          <div className="mockup-phone-display text-white">
            <div className="flex flex-col gap-2 pt-10 px-5">
              <div className="flex items-center gap-2 mb-2">
                <img src={Arrow} alt="Return" />
                <img className="w-8" src={User} alt="User" />
                <h2 className="text-xl flex-1">{exercise.Numero}</h2>
                <img className="w-6" src={Trash} alt="Trash" />
              </div>
              <section className="overflow-y-auto max-h-60">
                {Object.values(exercise.Message).map((message, index) => (
                  <div
                    key={index}
                    className="bg-[#454545] rounded-2xl p-2 mb-2 max-w-[70%]"
                  >
                    <p>{message}</p>
                  </div>
                ))}
              </section>
              <div className="flex items-center gap-3 mt-2">
                <img src={image} alt="img" />
                <img src={camera} alt="cam" />
                <img src={add} alt="add" />
                <div className="flex flex-row-reverse w-[50%] py-1.5 rounded-full bg-[#262626]">
                  <img className="me-1" src={smile} alt="smile" />
                </div>
                <img src={mic} alt="mic" />
              </div>
            </div>
          </div>
        </div>
        <div>
          <Modal
            description={exercise.Descripcion}
            onClose={handleClose}
            onOptions={handleOption}
          />
        </div>
      </div>
    </div>
  );
}
