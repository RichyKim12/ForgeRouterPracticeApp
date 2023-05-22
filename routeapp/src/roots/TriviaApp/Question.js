import React, {useState, useEffect} from 'react';
import Button from '@material-ui/core/Button';
function Question({question, correct, incorrect}){
    const [shuffledAnswers, setShuffledAnswers] = useState([]);
    
    useEffect(() => {
        const allAnswers=[...incorrect, correct];
        setShuffledAnswers(allAnswers.sort(() => Math.random() - 0.5))
    }, [correct,incorrect]);

    // Give feedback on whether answer clicked is correct
    const [clickedAnswer,setClickedAnswer] = useState(null);
    function checkIfCorrect(answer){
        if (answer !== clickedAnswer){
            return '';
        }
        else{
            if (answer === correct){
                return 'green';
            }
            else{
                return 'red';
            }
        }
    }

    function handleAnswerClick(answer){
        if(clickedAnswer === null){
            setClickedAnswer(answer);
        }
    }
    return(
        <div>
            <h2>{question}</h2>
            <ul>
                
                {shuffledAnswers.map((answer,index) => (
                    <li key = {index}>
                        <Button 
                        variant = 'contained'
                        style = {{backgroundColor: checkIfCorrect(answer)}} 
                        onClick={() => handleAnswerClick(answer)}
                        disabled={clickedAnswer!==null}> 
                        {answer}
                        </Button>
                    </li>
                )
                )}
            </ul>
        </div>
    )
}

export default Question;
