import Answer from '../components/Answer'

const Answers = ({currentQuestionIndex, questions, selectedAnswer, setSelectedAnswer}) => {

    const answers = questions[currentQuestionIndex].options.map((option, index) => 
        <Answer key={index} option={option} selectedAnswer={selectedAnswer} setSelectedAnswer={setSelectedAnswer}/>
    )

    return (
        <>
            {answers}
        </>
    )
}

export default Answers