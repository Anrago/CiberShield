
export default function MVCards({title, content}) {
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body items-center text-center">
                <h2 className="card-title text-3xl font-bold">{title}</h2>
                <p className="text-xl text-gray-700 mt-4">{content}</p>
            </div>

        </div>
    )

}