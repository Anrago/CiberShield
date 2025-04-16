

export default function dificultySelector({ setExercise }) {

    return (
        <div className='container'>
            <h2>Selecciona dificultad</h2>
            <button onClick={() => setExercise("simple")}>Fácil</button>
            <button onClick={() => setExercise("medium")}>Normal</button>
            <button onClick={() => setExercise("complex")}>Dificil</button>
        </div>
    )
}