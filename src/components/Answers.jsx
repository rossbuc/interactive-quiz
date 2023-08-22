import Answer from '../components/Answer'

const Answers = ({currentQuestionIndex, questions, endOfQuiz, selectedAnswer, setSelectedAnswer, handleAnswer}) => {

    const answers = (currentQuestionIndex == (questions.length)) 
    ? endOfQuiz() 
    : questions[currentQuestionIndex].options.map((option, index) => 
        <Answer key={index} option={option} selectedAnswer={selectedAnswer} setSelectedAnswer={setSelectedAnswer}/>
    )

    return (
        <form id="answers">
            {answers}
            <button type="submit" onClick={handleAnswer}>Next Question</button>
        </form>
    )
}

export default Answers