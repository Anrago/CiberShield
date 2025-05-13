import Arrow from "../assets/Icons/ArrowSMS.svg";
import User from "../assets/Icons/userSMS.svg";
import Trash from "../assets/Icons/trash.svg";

import image from "../assets/Icons/image.svg";
import camera from "../assets/Icons/camera.svg";
import add from "../assets/Icons/add.svg";
import smile from "../assets/Icons/smile.svg";
import mic from "../assets/Icons/mic.svg";

export default function ExerciseSMSCard({ exercise }) {
  return (
    <div className="mockup-phone">
      <div className="mockup-phone-camera"></div>
      <div className="mockup-phone-display text-white grid place-content-start">
        <div className="flex flex-col gap-2 pt-15 ps-5">
          <div className="flex row-auto gap-2">
            <img src={Arrow} alt="Return" />
            <img className="w-8.5" src={User} alt="User" />
            <h2 className=" text-3xl me-10">{exercise.Numero}</h2>
            <img className="w-8 ms-10" src={Trash} alt="Trash" />
          </div>
          <section className="overflow-y-auto h-[65%]">
            {Object.values(exercise.Message).map((message, index) => (
              <div
                key={index}
                className="bg-[#454545] border-none rounded-2xl mt-1 mb-3 max-w-[70%]"
              >
                <p className="p-1.5 text-white">{message}</p>
              </div>
            ))}
          </section>

          <div className=" flex flex-row gap-3">
            <img src={image} alt="" />
            <img src={camera} alt="" />
            <img src={add} alt="" />
            <div className="flex flex-row-reverse w-[50%] py-1.5 border-none rounded-full bg-[#262626]">
              <img className="me-1" src={smile} alt="" />
            </div>
            <img src={mic} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
