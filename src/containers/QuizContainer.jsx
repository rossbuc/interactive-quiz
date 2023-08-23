import {useState, useEffect} from 'react'
import QuestionContainer from '../containers/QuestionContainer'
import EndOfQuiz from '../components/EndOfQuiz'

const QuizContainer = () => {

    const [questions, setQuestions] = useState([])
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
    const [selectedAnswer, setSelectedAnswer] = useState("")
    const [score, setScore] = useState(0)
    const [feedback, setFeedback] = useState("")
    const [quizRound, setQuizRound] = useState(1)

    useEffect(() => {
        fetch("https://opentdb.com/api.php?amount=10&type=multiple")
            .then(response => response.json())
            .then(data => {
                const formattedQuiz = formatQuiz(data.results)
                setQuestions(formattedQuiz)
            })
    }, [quizRound]) 

    const formatQuiz = (quizData) => {
        const questionsAnswers = quizData.map((dataItem) => [...dataItem.incorrect_answers, dataItem.correct_answer].sort())
        const questions = quizData.map((dataItem, index) => ({
            question: dataItem.question,
            options: questionsAnswers[index],
            answer: dataItem.correct_answer
        }))
        return questions
    }

    const resetQuiz = () => {
        setCurrentQuestionIndex(0)
        setSelectedAnswer("")
        setScore(0)
        setQuizRound(quizRound + 1)
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