import { useState } from "react";
import minigameQuestions from "./MinigameQuestions";
import '../../css/Minigame.css'

const Minigame = () => {
 
    const [currentQuestion, setCurrentQuestion] = useState(0);

    const [showScore, setShowScore] = useState(false);

    const [score, setScore] = useState(0);

    const [response, setResponse] = useState("");
    
    const handleAnswerButtonOnClick = (isCorrect: boolean) => {
        if(isCorrect === true){
            setScore(score + 1);
            setResponse("Correct");
        } else {
            setResponse("Incorrect");
        }

        const nextQuestion = currentQuestion + 1;
            if(nextQuestion < minigameQuestions.length){
                setCurrentQuestion(nextQuestion);
            } else {
                setShowScore(true);
            }
    }

    const handleRestartButtonOnclick = () => {
        window.location.reload(); 
    }
    
    return (
        <section className="container text-center">
            <h1>Equipment picture quiz</h1>
            <p>In this game you should match the character with their equipment</p>  
            <hr/>
        {showScore ? (
            <div>
                You scored {score} out of {minigameQuestions.length}
                <hr />
                <button onClick={handleRestartButtonOnclick} className='btn btn-success'>Try again</button>
            </div>
        ) : (
            <>
                <h3 className='question-counter'>Question {currentQuestion + 1}/{minigameQuestions.length}</h3>
                <p className='question-text'>{minigameQuestions[currentQuestion].question}</p>
            <div className="image-section">
                <div className='question-image'>{minigameQuestions[currentQuestion].image}</div>
            </div>
            <div className='answer-section'>
                {minigameQuestions[currentQuestion].answerOptions.map((answerOptions) => 
                    <button onClick={() => handleAnswerButtonOnClick(answerOptions.isCorrect)} className='btn'>{answerOptions.answer}</button>
                )} 
                <p style={{opacity: 0.5}}>{response}</p>
            </div>
            </>
        )}
        </section>
    );  
    
}

export default Minigame;