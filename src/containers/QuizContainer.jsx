import {useState} from 'react'
import QuestionContainer from '../containers/QuestionContainer'
import EndOfQuiz from '../components/EndOfQuiz'

const QuizContainer = () => {

    const [questions, setQuestions] = useState(
        [
            {
              question: "What was the name of the first computer virus that spread in the wild?",
              options: ["Creeper", "ILOVEYOU", "Melissa", "Brain"],
              answer: "Brain"
            },
            {
              question: "Which programming language is often referred to as the 'mother of all languages'?",
              options: ["Java", "C", "Fortran", "Assembly"],
              answer: "C"
            },
            {
              question: "In what year was the company Google founded?",
              options: ["1996", "1998", "2000", "2004"],
              answer: "1998"
            }
        ]
    )

    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
    const [selectedAnswer, setSelectedAnswer] = useState("")
    const [score, setScore] = useState(0)
    const [feedback, setFeedback] = useState("")

    const resetQuiz = () => {
        setCurrentQuestionIndex(0)
        setSelectedAnswer("")
        setScore(0)
    }



    const handleAnswer = (event) => {
        event.preventDefault()
        setScore((selectedAnswer == questions[currentQuestionIndex].answer) ? score + 1 : score)
        setCurrentQuestionIndex(currentQuestionIndex + 1)
        setFeedback("")
    }



    return (
        <>
            <div className="question-container">
                <h3>Score: {score}</h3>
                {(currentQuestionIndex == questions.length) 
                    ? <EndOfQuiz score={score} resetQuiz={resetQuiz}/>
                    : <QuestionContainer 
                    questions={questions} 
                    currentQuestionIndex={currentQuestionIndex} 
                    selectedAnswer={selectedAnswer}
                    feedback={feedback} 
                    setSelectedAnswer={setSelectedAnswer} 
                    handleAnswer={handleAnswer} 
                    setFeedback={setFeedback}/>
                }
                
            </div>
        </>
    )
}

export default QuizContainer