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

    const answers = questions[currentQuestionIndex].options.map((option, index) => 
        <div key={index}>
            <label htmlFor={index}>{option}</label>
            <input type="radio" id={index} name="options" onChange={(event) => setSelectedAnswer(option)}></input>
        </div>
    )

    const handleAnswer = () => {
        event.preventDefault()
        setCurrentQuestionIndex(currentQuestionIndex + 1)
    }



    return (
        <>
            <h3>{questions[currentQuestionIndex].question}</h3>
            <form>
                {answers}
                <button type="submit" onClick={handleAnswer}/>
            </form>
        </>
    )
}

export default QuizContainer