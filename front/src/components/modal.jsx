export default function Modal({ description, onClose }) {
  const handleClose = () => {
    document.getElementById("my_modal_3").close();
    onClose(); // Avanzar a la siguiente tarjeta
  };
  return (
    <>
      <button
        onClick={() => document.getElementById("my_modal_3").showModal()}
        className="btn btn-outline btn-error"
      >
        Falso
      </button>
      <button
        onClick={() => document.getElementById("my_modal_3").showModal()}
        className="btn btn-outline btn-success"
      >
        Verdadero
      </button>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form method="dialog">
            <button
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              onClick={handleClose}
            >
              ✕
            </button>
          </form>
          <h3 className="font-bold text-lg">Hello!</h3>
          <p className="py-4">{description}</p>
        </div>
      </dialog>
    </>
  );
}
