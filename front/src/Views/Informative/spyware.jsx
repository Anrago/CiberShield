import ImageTemp from "../../assets/imagen.png";
import SODesing from "../../components/rendering/SODesing";
import AsideBar from "../../layouts/asideBar";
import "../../style/spyware-style.css";

export default function Spyware() {
  return (
    <>
      <div className="flex h-full spyware-background">
        <AsideBar />

        <div className="flex-1 p-10 justify-items-center">
          <h2 className="spyware-header">🕵️ Spyware</h2>

          <div className="flex flex-col w-5/6 gap-2 mt-3">
            <h3 className="spyware-section-title">¿Qué es?</h3>
            <p className="spyware-paragraph mt-4">
              El spyware es un tipo de software malicioso diseñado para espiar y
              recopilar información sobre un usuario o sistema sin su
              conocimiento ni consentimiento. Este tipo de malware puede
              infiltrarse en dispositivos a través de descargas de software
              aparentemente legítimas, correos electrónicos de phishing o
              vulnerabilidades de seguridad en el sistema operativo o en
              aplicaciones.
              <br /><br />
              El spyware puede recopilar una gran variedad de datos, incluyendo
              información personal, credenciales de inicio de sesión, datos
              bancarios, historial de navegación y actividad en línea. Algunos
              tipos de spyware también pueden registrar pulsaciones de teclas,
              tomar capturas de pantalla o acceder a la cámara y el
              micrófono del dispositivo, lo que representa una grave amenaza
              para la privacidad y seguridad del usuario.
              <br /><br />
              Existen diferentes variantes de spyware, cada una con
              características y métodos de ataque específicos.
            </p>

            <div className="mt-4">
              <h3 className="spyware-section-title">Tipos comunes de spyware</h3>
              <ul className="spyware-list spyware-paragraph">
                <li>
                  <strong>Adware:</strong> Muestra anuncios intrusivos y recopila datos sobre tus preferencias.
                </li>
                <li>
                  <strong>Keyloggers:</strong> Registran las pulsaciones de teclas para robar contraseñas y datos bancarios.
                </li>
                <li>
                  <strong>Troyanos:</strong> Se hacen pasar por software legítimo y permiten acceso remoto al sistema.
                </li>
                <li>
                  <strong>Secuestradores de navegador:</strong> Modifican configuraciones y redirigen a sitios maliciosos.
                </li>
                <li>
                  <strong>Monitores de sistema:</strong> Espían el sistema, recolectando información sobre hardware/software.
                </li>
                <li>
                  <strong>Remote Access Trojans (RATs):</strong> Permiten el control total del dispositivo a distancia.
                </li>
              </ul>
            </div>

            <div className="flex justify-center m-8">
              <img
                src={ImageTemp}
                alt="Spyware"
                className="w-64 h-auto spyware-img"
              />
            </div>

            <h3 className="spyware-section-title">¿Cómo afecta a mis dispositivos?</h3>
            <p className="spyware-paragraph mt-4">
              El spyware puede ralentizar el sistema al consumir recursos, comprometer tu privacidad recolectando datos sin permiso,
              y permitir el acceso remoto a tu dispositivo. Esto puede incluir la capacidad de espiar tus actividades, tomar capturas,
              grabar audio/video y robar información confidencial. Por tanto, representa una amenaza grave a la privacidad digital.
            </p>

            <div className="flex justify-center m-8">
              <SODesing />
            </div>

            <h3 className="spyware-section-title">¿Cómo identificarlo?</h3>
            <p className="spyware-paragraph mt-4">
              A menudo se oculta sin dejar rastro visible, pero algunos signos pueden incluir:
            </p>
            <ul className="spyware-list spyware-paragraph mt-4">
              <li><strong>Rendimiento lento:</strong> Sistema más lento de lo normal.</li>
              <li><strong>Anuncios intrusivos:</strong> Pop-ups o publicidad constante.</li>
              <li><strong>Cambios en el navegador:</strong> Página de inicio o búsquedas alteradas.</li>
              <li><strong>Archivos desconocidos:</strong> Programas que no instalaste.</li>
            </ul>

            <h3 className="spyware-section-title">¿Cómo prevenirlo?</h3>
            <p className="spyware-paragraph mt-4">
              Toma estas medidas preventivas para evitar el spyware:
            </p>
            <ul className="spyware-list spyware-paragraph mt-4">
              <li>Actualiza tu sistema operativo y tus aplicaciones.</li>
              <li>Usa antivirus y antimalware confiables.</li>
              <li>Haz copias de seguridad regularmente.</li>
              <li>Evita enlaces o archivos de fuentes no confiables.</li>
              <li>Desactiva macros en documentos si no las necesitas.</li>
            </ul>

            <p className="spyware-paragraph mt-4">
              La conciencia digital es tu mejor defensa: mantente informado, alerta y protegido.
            </p>

            <div className="flex justify-center m-8">
              <img
                src={ImageTemp}
                alt="Spyware"
                className="w-64 h-auto spyware-img"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

/*
import ImageTemp from "../../assets/imagen.png";
import SODesing from "../../components/rendering/SODesing";
import AsideBar from "../../layouts/asideBar";

export default function Spyware() {
  return (
    <>
      <div className="flex h-full">
        <AsideBar />

        <div className="flex-1 p-10 justify-items-center bg-gray-100">
          <h2 className="text-5xl font-bold text-center">Spyware</h2>

          <div className="flex flex-col w-5/6 gap-2 mt-3">
            <h3 className="text-3xl text-start">¿Qué es?</h3>
            <p className="text-xl text-gray-700 mt-4">
              El spyware es un tipo de software malicioso diseñado para espiar y
              recopilar información sobre un usuario o sistema sin su
              conocimiento ni consentimiento. Este tipo de malware puede
              infiltrarse en dispositivos a través de descargas de software
              aparentemente legítimas, correos electrónicos de phishing o
              vulnerabilidades de seguridad en el sistema operativo o en
              aplicaciones.
              <br /><br />
              El spyware puede recopilar una gran variedad de datos, incluyendo
              información personal, credenciales de inicio de sesión, datos
              bancarios, historial de navegación y actividad en línea. Algunos
              tipos de spyware también pueden registrar pulsaciones de teclas,
              tomar capturas de pantalla o acceder a la cámara y el
              micrófono del dispositivo, lo que representa una grave amenaza
              para la privacidad y seguridad del usuario.
              <br /><br />
              Existen diferentes variantes de spyware, cada una con
              características y métodos de ataque específicos.
            </p>

            <div className="mt-4">
              <h3 className="text-2xl text-start text-gray-800 mb-2">
                Tipos comunes de spyware
              </h3>
              <ul className="list-disc list-inside text-xl text-gray-700">
                <li>
                  <strong>Adware:</strong> Software que muestra anuncios
                  intrusivos y recopila datos sobre las preferencias del usuario
                  para personalizar la publicidad.
                </li>
                <li>
                  <strong>Keyloggers:</strong> Registran las pulsaciones de
                  teclas del usuario para capturar información sensible, como
                  contraseñas y datos bancarios.
                </li>
                <li>
                  <strong>Troyanos (Trojans):</strong> Programas maliciosos que se hacen
                  pasar por software legítimo, permitiendo el acceso no
                  autorizado al sistema.
                </li>
                <li>
                  <strong>Secuestradores de navegador (Browser hijackers):</strong> Modifican la configuración
                  del navegador, redirigiendo al usuario a sitios web no
                  deseados y recopilando datos de navegación.
                </li>
                <li>
                  <strong>Monitores de sistema (System monitors):</strong> Supervisan la actividad del
                  sistema y recopilan información sobre el hardware y el
                  software instalado.
                </li>
                <li>
                  <strong>Troyanos de acceso remoto (Remote Access Trojans, RATs):</strong> Permiten a un
                  atacante acceder y controlar un dispositivo de forma remota,
                  lo que puede incluir la recopilación de datos, vigilancia y
                  robo de información.
                </li>
              </ul>
            </div>

            <div className="flex justify-center m-8">
              <img
                src={ImageTemp}
                alt="Spyware"
                className="w-64 h-auto rounded-lg shadow-lg"
              />
            </div>

            <h3 className="text-3xl text-start">¿Cómo afecta a mis dispositivos?</h3>
            <p className="text-xl text-gray-700 mt-4">
              El spyware puede afectar a tus dispositivos de varias maneras. En
              primer lugar, puede ralentizar el rendimiento del sistema al
              consumir recursos del procesador y la memoria, haciendo que tu
              computadora o dispositivo móvil funcione con lentitud y de forma menos eficiente.
              <br /><br />
              Además, puede comprometer tu privacidad al recopilar
              información personal y sensible sin tu consentimiento, como
              contraseñas, información bancaria, historial de navegación y
              actividad en línea. Los atacantes pueden utilizar esta información
              para cometer fraudes, suplantación de identidad o extorsión.
              <br /><br />
              También puede abrir puertas traseras en tu sistema,
              permitiendo a los atacantes acceder y controlar tu dispositivo de
              forma remota. Esto puede incluir la capacidad de espiar tus
              actividades, tomar capturas de pantalla, grabar audio o video y
              robar información confidencial.
              <br /><br />
              En resumen, el spyware representa una amenaza significativa para
              la seguridad y privacidad de tus dispositivos. Es fundamental
              tomar medidas preventivas, como mantener tu software actualizado,
              usar soluciones de seguridad confiables y ser cauteloso al
              descargar aplicaciones o hacer clic en enlaces sospechosos.
            </p>

            <div className="flex justify-center m-8">
              <SODesing />
            </div>

            <h3 className="text-3xl text-start">¿Cómo identificarlo?</h3>
            <p className="text-xl text-gray-700 mt-4">
              Identificar la presencia de spyware puede ser complicado, ya que a menudo se
              oculta en el sistema y no muestra signos evidentes. Sin embargo,
              hay algunos síntomas y comportamientos que podrían indicar su presencia:
            </p>
            <ul className="list-disc list-inside text-xl text-gray-700 mt-4">
              <li>
                <strong>Rendimiento lento:</strong> Si tu dispositivo se vuelve más lento de lo
                habitual, puede deberse a spyware que consume recursos.
              </li>
              <li>
                <strong>Anuncios intrusivos:</strong> La aparición de ventanas emergentes o publicidad no deseada puede ser señal de adware o spyware.
              </li>
              <li>
                <strong>Cambios en la configuración del navegador:</strong> Si tu página de inicio,
                motor de búsqueda o configuraciones cambian sin tu permiso, es
                posible que tengas un secuestrador de navegador instalado.
              </li>
              <li>
                <strong>Archivos o programas desconocidos:</strong> La presencia de software o archivos extraños puede ser indicativo de una infección.
              </li>
            </ul>

            <h3 className="text-3xl text-start">¿Cómo prevenirlo?</h3>
            <p className="text-xl text-gray-700 mt-4">
              La prevención es clave para protegerse contra el spyware. Aquí tienes algunas recomendaciones importantes:
            </p>
            <ul className="list-disc list-inside text-xl text-gray-700 mt-4">
              <li>
                Mantén tu sistema operativo y software actualizados para corregir vulnerabilidades.
              </li>
              <li>
                Utiliza un software antivirus y antimalware confiable, y mantenlo actualizado.
              </li>
              <li>
                Realiza copias de seguridad regulares de tus datos, ya sea en dispositivos externos o en la nube.
              </li>
              <li>
                Evita hacer clic en enlaces sospechosos o descargar archivos de fuentes no confiables.
              </li>
              <li>
                Desactiva las macros en documentos de Office si no son necesarias, ya que pueden ser un medio de infección.
              </li>
            </ul>
            <p className="text-xl text-gray-700 mt-4">
              Recuerda que la educación y la conciencia son tus mejores herramientas contra el spyware. Mantente informado sobre las amenazas más recientes para mejorar tu protección.
            </p>

            <div className="flex justify-center m-8">
              <img
                src={ImageTemp}
                alt="Spyware"
                className="w-64 h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}


botnet
 */
