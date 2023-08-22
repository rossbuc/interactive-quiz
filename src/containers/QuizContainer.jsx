import {useState} from 'react'
import Question from '../components/Question'

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
    // const [answers, setAnswers] = useState(questions[currentQuestionIndex])

    const endOfQuiz = () => {
        return (
            <>
                <h2>Congratulations you've finished the quiz</h2>
                <h2>Your score is {score}</h2>
            </>
        )
    }
    
    const answers = (currentQuestionIndex == (questions.length)) 
        ? endOfQuiz() 
        : questions[currentQuestionIndex].options.map((option, index) => 
            <div key={index}>
                <label htmlFor={index}>{option}</label>
                <input type="radio" id={index} name="options" checked={option ==  selectedAnswer} onChange={() => {console.log(option);setSelectedAnswer(option);}}></input>
            </div>
    )

    const handleAnswer = (event) => {
        event.preventDefault()
        // currentQuestionIndex == (questions.length - 1) ? endOfQuiz() : 
        setScore((selectedAnswer == questions[currentQuestionIndex].answer) ? score + 1 : score)
        console.log(selectedAnswer)
        console.log(questions[currentQuestionIndex].answer)
        console.log((selectedAnswer == questions[currentQuestionIndex].answer))
        setCurrentQuestionIndex(currentQuestionIndex + 1)
        // const answers = document.getElementById("answers")
        // answers.reset()
    }

    console.log(currentQuestionIndex)
    console.log(questions.length)



    return (
        <>
            <h3>Score: {score}</h3>
            <h3>Current Question: {currentQuestionIndex +1}</h3>
            <form id="answers">
                {answers}
                <button type="submit" onClick={handleAnswer}>Next Question</button>
            </form>
        </>
    )
}

export default QuizContainer