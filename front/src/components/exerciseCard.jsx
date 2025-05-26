import Modal from "./modal";
export default function ExerciseCard({
  message,
  handleClose,
  onCorrectAnswer,
}) {
  const handleOption = (selection) => {
    if (selection === message.Categoria) {
      console.log("Correcto");
      if (onCorrectAnswer) onCorrectAnswer();
      return true;
    } else {
      console.log("Incorrecto");
      return false;
    }
  };

  return (
    <div className="card shadow-2xl max-h-full bg-white border border-gray-300 rounded-md max-w-2xl mx-auto my-4">
      <div className="card-body p-6 max-h-[400px] overflow-y-auto pr-2">
        <div className="mb-4 border-b pb-2">
          <h2 className="text-xl font-semibold text-gray-800">
            {message.Asunto}
          </h2>
          <div className="flex gap-2 items-center mt-2">
            <img
              src={message.perfil}
              alt="Perfil"
              className="w-8 h-8 rounded-full border-2 border-gray-300"
            />
            <p className="text-sm text-gray-500">De: {message.Remitente}</p>
          </div>
        </div>
        <div
          className="mb-6 text-gray-700 whitespace-pre-line "
          dangerouslySetInnerHTML={{ __html: message.Cuerpo }}
        />
      </div>
      <div className="flex justify-center m-4 gap-4">
        <Modal
          description={message.Descripcion}
          onClose={handleClose}
          onOptions={handleOption}
        />
      </div>
    </div>
  );
}
