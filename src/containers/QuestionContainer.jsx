import  Answers from '../components/Answers'

const QuestionContainer = ({questions, currentQuestionIndex, selectedAnswer, setSelectedAnswer, handleAnswer, endOfQuiz}) => {

    const displayText = (currentQuestionIndex == (questions.length)) 
    ? null 
    : <div>
        <h2>Question {currentQuestionIndex + 1}</h2>
        <h3>{questions[currentQuestionIndex].question}</h3>
    </div>

    return (
        <>
            {displayText}
            <Answers 
                currentQuestionIndex={currentQuestionIndex}
                questions={questions} 
                endOfQuiz={endOfQuiz} 
                selectedAnswer={selectedAnswer} 
                setSelectedAnswer={setSelectedAnswer} 
                handleAnswer={handleAnswer}
            />
        </>
    )
}

export default QuestionContainer