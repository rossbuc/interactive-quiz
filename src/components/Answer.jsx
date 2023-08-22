const Answer = ({index, option, selectedAnswer, setSelectedAnswer}) => {

    return (
        <div>
            <label htmlFor={index}>{option}</label>
            <input 
                type="radio" 
                id={index} 
                name="options" 
                checked={option ==  selectedAnswer} 
                onChange={() => {setSelectedAnswer(option)}}>
            </input>
        </div>
    )
    
}

export default Answer