

export default function dificultySelector({ setExercise }) {

    return (
        <div className='container'>
            <h2>Selecciona dificultad</h2>
            <button className='btn bg-[var(--colorSimple)]' onClick={() => setExercise("simple")}>Fácil</button>
            <button className='btn bg-[var(--colorMedium)]' onClick={() => setExercise("medium")}>Normal</button>
            <button className='btn bg-[var(--colorComplex)]' onClick={() => setExercise("complex")}>Dificil</button>
        </div>
    )
}