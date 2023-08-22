const Answers = ({currentQuestionIndex, questions, endOfQuiz, selectedAnswer, setSelectedAnswer, handleAnswer}) => {

    const answers = (currentQuestionIndex == (questions.length)) 
    ? endOfQuiz() 
    : questions[currentQuestionIndex].options.map((option, index) => 
        <div key={index}>
            <label htmlFor={index}>{option}</label>
            <input 
                type="radio" 
                id={index} 
                name="options" 
                checked={option ==  selectedAnswer} 
                onChange={() => {setSelectedAnswer(option)}}>
            </input>
        </div>
    )

    return (
        <form id="answers">
            {answers}
            <button type="submit" onClick={handleAnswer}>Next Question</button>
        </form>
    )
}

export default Answers