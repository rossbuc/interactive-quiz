import  Answers from '../components/Answers'
import {useState} from 'react'

const QuestionContainer = ({questions, currentQuestionIndex, selectedAnswer, feedback, setSelectedAnswer, handleAnswer, setFeedback}) => {

    const checkAnswer = () => {
        (selectedAnswer == questions[currentQuestionIndex].answer) 
        ? setFeedback(`✅ Correct Answer!`)
        : setFeedback(`❌ Wrong Answer! The correct answer was ${questions[currentQuestionIndex].answer}`)
    }

    return (
        <>
            <div className="question--text">
                <h2>Question {currentQuestionIndex + 1}</h2>
                <h3>{questions[currentQuestionIndex].question}</h3>
            </div>
            <form className="answers">
                <Answers 
                    currentQuestionIndex={currentQuestionIndex}
                    questions={questions}
                    selectedAnswer={selectedAnswer} 
                    setSelectedAnswer={setSelectedAnswer}
                />
                <div>
                    <button type="submit" onClick={handleAnswer}>Next Question</button>
                </div>
            </form>
            <button onClick={checkAnswer}>Check Answer</button>
            {feedback}
        </>
    )
}

export default QuestionContainer