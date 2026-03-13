import phishingExample from "../../json/examples.json";
import Arrow from "../../assets/Icons/ArrowSMS.svg";
import User from "../../assets/Icons/userSMS.svg";
import Trash from "../../assets/Icons/trash.svg";
import { color, motion } from "framer-motion";

import image from "../../assets/Icons/image.svg";
import camera from "../../assets/Icons/camera.svg";
import add from "../../assets/Icons/add.svg";
import smile from "../../assets/Icons/smile.svg";
import mic from "../../assets/Icons/mic.svg";

export default function SMSExample() {
  const exercise = phishingExample.smsExample;
  return (
    <div className="mockup-phone transform scale-75 mx-auto">
      <div className="mockup-phone-camera"></div>
      <div className="mockup-phone-display text-white">
        <div className="flex flex-col h-full">
          <div className="flex items-center gap-2 mb-2 pt-10 px-5">
            <img src={Arrow} alt="Return" />
            <img className="w-8" src={User} alt="User" />
            <h2 className="text-xl flex-1">{exercise.number}</h2>
            <img className="w-6" src={Trash} alt="Trash" />
          </div>
          <section
            className="overflow-y-auto flex-1 px-5"
            style={{ height: "270px" }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3 }}
            >
              <div
                
                className="bg-[#454545] rounded-2xl p-2 mb-2 max-w-[70%]"
              >
                <p dangerouslySetInnerHTML={{ __html: exercise.msg1 }} />
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3  }}
            >
              <div
                
                className="bg-[#454545] rounded-2xl p-2 mb-2 max-w-[70%]"
              >
                <p dangerouslySetInnerHTML={{ __html: exercise.msg2 }} />
              </div>
            </motion.div>
          </section>
          <div className="flex items-center gap-3 px-5 py-3 mt-auto">
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
  );
}
