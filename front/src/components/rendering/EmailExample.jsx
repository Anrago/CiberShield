import phishingExample from "../../json/examples.json";
export default function EmailExample() {
  const example = phishingExample.emailExample;
  return (
    <div className="card-body p-6 max-h-[400px] overflow-y-auto pr-2">
      <div className="mb-4 border-b pb-2">
        <h2 className="text-xl font-semibold text-gray-800">
          {example.Asunto}
        </h2>
        <div className="flex gap-2 items-center mt-2">
          <img
            src="https://mwyxcfbqgyoarrgxrevn.supabase.co/storage/v1/object/public/img-cibershield/users/GenericUSer.png"
            alt="Perfil"
            className="w-8 h-8 rounded-full border-2 border-gray-300"
          />
          <p className="text-sm text-gray-500">De: {example.Remitente}</p>
        </div>
      </div>
      <div
        className="mb-6 text-gray-700 whitespace-pre-line "
        dangerouslySetInnerHTML={{ __html: example.Cuerpo }}
      />
    </div>
  );
}
