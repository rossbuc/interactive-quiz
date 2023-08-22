const QuestionContainer = ({questions, currentQuestionIndex, selectedAnswer, setSelectedAnswer, handleAnswer, endOfQuiz}) => {
    
    const answers = (currentQuestionIndex == (questions.length)) 
        ? endOfQuiz() 
        : questions[currentQuestionIndex].options.map((option, index) => 
            <div key={index}>
                <label htmlFor={index}>{option}</label>
                <input 
                    type="radio" 
                    id={index} 
                    name="options" 
                    checked={option ==  selectedAnswer} onChange={() => {setSelectedAnswer(option)}}>
                </input>
            </div>
    )

    return (
        <>
            <h3>Current Question: {currentQuestionIndex +1}</h3>
            <form id="answers">
                {answers}
                <button type="submit" onClick={handleAnswer}>Next Question</button>
            </form>
        </>
    )
}

export default QuestionContainer