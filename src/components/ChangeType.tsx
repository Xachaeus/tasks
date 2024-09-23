import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

export function ChangeType(): React.JSX.Element {

    const [qtype, setQtype] = useState<QuestionType>("short_answer_question");

    function changeType(){
        switch (qtype){
            case "short_answer_question":
                setQtype("multiple_choice_question");
                break;
            case "multiple_choice_question":
                setQtype("short_answer_question");
                break;
        }
    }
    return <div style={{display:"flex", flexDirection: "column", flexWrap: "wrap", alignItems:"center", justifyContent:"center"}}>
        <Button onClick={changeType}>Change Type</Button>
        Type: {qtype==="short_answer_question"? "Short Answer" : "Multiple Choice"}
    </div>;
}
