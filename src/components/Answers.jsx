import Answer from '../components/Answer'

const Answers = ({currentQuestionIndex, questions, endOfQuiz, selectedAnswer, setSelectedAnswer}) => {

    const answers = (currentQuestionIndex == (questions.length)) 
    ? endOfQuiz() 
    : questions[currentQuestionIndex].options.map((option, index) => 
        <Answer key={index} option={option} selectedAnswer={selectedAnswer} setSelectedAnswer={setSelectedAnswer}/>
    )

    return (
        <>
            {answers}
        </>
    )
}

export default Answers