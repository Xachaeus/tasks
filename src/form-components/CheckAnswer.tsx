import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function CheckAnswer({
    expectedAnswer,
}: {
    expectedAnswer: string;
}): React.JSX.Element {


    const [ans, setAns] = useState<string>("");

    function ansChanged(event: React.ChangeEvent<HTMLInputElement>){
        setAns(event.target.value);
    }

    return (
        <div>
            <h3>Check Answer</h3>

            <Form.Group controlId="userAnswer">
                <Form.Label>Answer:</Form.Label>
                <Form.Control value={ans} placeholder="Enter Answer" onChange={ansChanged}/>
            </Form.Group>
            <div>{(ans===expectedAnswer)? "✔️" : "❌"}</div>
        </div>
    );
}
