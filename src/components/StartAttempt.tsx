import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): React.JSX.Element {
    const [inProgress, setInProgress] = useState<boolean>(false);
    const [attempts, setAttempts] = useState<number>(4);

    function startQuiz(){
        if(!inProgress && attempts>0){
            setInProgress(true); setAttempts(attempts-1);
        }
    }

    function stopQuiz(){
        if(inProgress){setInProgress(false);}
    }

    function resetAttempts(){
        if(!inProgress){setAttempts(attempts+1);}
    }

    return <div style={{display:"flex", flexDirection: "column", flexWrap: "wrap", alignItems:"center", justifyContent:"center"}}>

        <div>
            <Button onClick={startQuiz} disabled={inProgress || attempts<=0}>Start Quiz</Button>
            <Button onClick={stopQuiz} disabled={!inProgress}>Stop Quiz</Button>
            <Button onClick={resetAttempts} disabled={inProgress}>Mulligan</Button>
        </div>
        <div>
            Number of Attempts: {attempts}
        </div> 
    </div>;
}
