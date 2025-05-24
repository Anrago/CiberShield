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
    <div className="card shadow-2xl bg-[#E0F2E9] border border-gray-300 rounded-md max-w-2xl mx-auto my-4">
      <div className="card-body p-6">
        <div className="mb-4 border-b pb-2">
          <h2 className="text-xl font-semibold text-gray-800">
            {message.Asunto}
          </h2>
          <p className="text-sm text-gray-500">De: {message.Remitente}</p>
        </div>
        <div className="mb-6 text-gray-700 whitespace-pre-line">
          {message.Cuerpo}
        </div>
        <div className="flex justify-center gap-4">
          <Modal
            description={message.Descripcion}
            onClose={handleClose}
            onOptions={handleOption}
          />
        </div>
      </div>
    </div>
  );
}
