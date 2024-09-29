import React, { useState } from "react";
import {Form} from "react-bootstrap";

export function MultipleChoiceQuestion({
    options,
    expectedAnswer,
}: {
    options: string[];
    expectedAnswer: string;
}): React.JSX.Element {

    const [choice, setChoice] = useState<string>(options[0]);

    function updateChoice(event: React.ChangeEvent<HTMLSelectElement>){
        setChoice(event.target.value);
    }

    return (
        <div>
            <h3>Multiple Choice Question</h3>
            <Form.Group controlId="Multiple-Choice">
                <Form.Label>Choose an answer below.</Form.Label>
                <Form.Select value={choice} onChange={updateChoice}>
                    {options.map((val: string) =>
                    <option key={val} value={val}>{val}</option>
                    )}
                </Form.Select>
            </Form.Group>
            {choice===expectedAnswer? "✔️" : "❌"}
        </div>
    );
}
