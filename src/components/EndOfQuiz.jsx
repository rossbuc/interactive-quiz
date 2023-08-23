const EndOfQuiz = ({score, resetQuiz}) => {
    return (
        <>
            <h2>Congratulations you've finished the quiz</h2>
            <h2>Your score is {score}</h2>
            <button onClick={resetQuiz}>Restart</button>
        </>
    )
}

export default EndOfQuiz