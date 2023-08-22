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