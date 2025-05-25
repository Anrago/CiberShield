export default function VirusCard({desc, howAfect}) {
  return (
    <>
      <div>
        <div className="card w-96 shadow-xl rounded-lg overflow-hidden transform transition duration-300 hover:scale-105">
          <div className="bg-[#E0F2E9] p-6 text-center">
            <h1 className="text-3xl font-bold text-white mb-4">Virus</h1>
            <figure className="flex justify-center">
              <img
                src={howAfect}
                alt={`${desc} image`}
                className="max-h-40 object-contain"
              />
            </figure>
          </div>

          <div className="card-body p-6 bg-white">
            <p className="text-gray-700">{desc}</p>
          </div>
        </div>

      </div>
    </>
  );
}
