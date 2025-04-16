
export default function DescriptionCard({ option, description }) {
    return (
        <>
            {option === true ? (
                <>
                    <h2>✅ Correcto</h2>
                    <p>{description}</p>
                </>
            ) : (
                <>
                    <h2>❌ Incorrecto</h2>
                    <p>{description}</p>
                </>
            )}
        </>
    );
}
