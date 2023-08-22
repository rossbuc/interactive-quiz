import {useState} from 'react'
import QuestionContainer from '../containers/QuestionContainer'

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

    const endOfQuiz = () => {
        return (
            <>
                <h2>Congratulations you've finished the quiz</h2>
                <h2>Your score is {score}</h2>
                <button onClick={resetQuiz}>Restart</button>
            </>
        )
    }

    const handleAnswer = (event) => {
        event.preventDefault()
        setScore((selectedAnswer == questions[currentQuestionIndex].answer) ? score + 1 : score)
        setCurrentQuestionIndex(currentQuestionIndex + 1)
        setFeedback("")
    }



    return (
        <>
            <h3>Score: {score}</h3>
            <QuestionContainer 
                questions={questions} 
                currentQuestionIndex={currentQuestionIndex} 
                selectedAnswer={selectedAnswer}
                feedback={feedback} 
                setSelectedAnswer={setSelectedAnswer} 
                handleAnswer={handleAnswer} 
                endOfQuiz={endOfQuiz}
                setFeedback={setFeedback}
            />
        </>
    )
}

export default QuizContainer