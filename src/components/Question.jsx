const Question = ({question}) => {

    const answers = question.options.map((option) => {
        <div>
            <label htmlFor={indexOf(option)}>{option}</label>
            <input type="radio" id={indexof(option)} name="options" value></input>
        </div>
    })

    return (
        <>
            <h3>{question.question}</h3>
            <form>
                {answers}
                <button type="submit"/>
            </form>
        </>
    )
    
}

export default Question