import ImageTemp from "../assets/imagen.png";
import VideoTemp from "../assets/video.png";

import AsideBar from "../layouts/asideBar";
export default function InformativePage() {
  return (
    <>
      <div className=" flex h-full">
        
        <AsideBar />

        <div className="flex-1 p-10  justify-items-center bg-gray-100">
          <h2 className="text-5xl font-bold text-center">Ransomware</h2>

          <div className="flex flex-col w-5/6 gap-2 mt-3">
            <h3 className="text-3xl text-start">Que es?</h3>
            <p className="text-xl text-gray-700 mt-4">
              Ransomware is a type of malicious software that encrypts files on
              a victim's computer, rendering them inaccessible until a ransom is
              paid to the attacker. It often spreads through phishing emails or
              malicious downloads.
            </p>
            <div className="flex justify-center m-8">
              <img
                src={ImageTemp}
                alt="Ransomware"
                className="w-64 h-auto rounded-lg shadow-lg"
              />
            </div>

            <h3 className="text-3xl text-start">
              Como afecta a mis dispositivos?
            </h3>
            <p className="text-xl text-gray-700 mt-4">
              Ransomware is a type of malicious software that encrypts files on
              a victim's computer, rendering them inaccessible until a ransom is
              paid to the attacker. It often spreads through phishing emails or
              malicious downloadsRansomware is a type of malicious software that
              encrypts files on a victim's computer, rendering them inaccessible
              until a ransom is paid to the attacker. It often spreads through
              phishing emails or malicious downloadsRansomware is a type of
              malicious software that encrypts files on a victim's computer,
              rendering them inaccessible until a ransom is paid to the
              attacker. It often spreads through phishing emails or malicious
              downloadsRansomware is a type of malicious software that encrypts
              files on a victim's computer, rendering them inaccessible until a
              ransom is paid to the attacker. It often spreads through phishing
              emails or malicious downloads.
            </p>

            <div className="flex justify-center m-8">

            </div>

            <h3 className="text-3xl text-start">Como identificarlo?</h3>
            <p className="text-xl text-gray-700 mt-4">
              Ransomware is a type of malicious software that encrypts files on
              a victim's computer, rendering them inaccessible until a ransom is
              paid to the attacker. It often spreads through phishing emails or
              malicious downloadsRansomware is a type of malicious software that
              encrypts files on a victim's computer, rendering them inaccessible
              until a ransom is paid to the attacker. It often spreads through
              phishing emails or malicious downloadsRansomware is a type of
              malicious software that encrypts files on a victim's computer,
              rendering them inaccessible until a ransom is paid to the
              attacker. It often spreads through phishing emails or malicious
              downloadsRansomware is a type of malicious software that encrypts
              files on a victim's computer, rendering them inaccessible until a
              ransom is paid to the attacker. It often spreads through phishing
              emails or malicious downloads.
            </p>

            <div className="flex justify-center m-8">
              <img
                src={ImageTemp}
                alt="Ransomware"
                className="w-64 h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
