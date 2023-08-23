const Answer = ({index, option, selectedAnswer, setSelectedAnswer}) => {

    return (
        <div>
            <input 
                type="radio" 
                id={index} 
                name="options"
                checked={option ==  selectedAnswer}
                required
                onChange={() => {setSelectedAnswer(option)}}>
            </input>
            <label htmlFor={index}>{option}</label>
        </div>
    )
    
}

export default Answer


// pass answer all the way down here
// first reneder the correct and incorrect answers to check it works 
// then conditionally render