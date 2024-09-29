import React, { useState } from "react";
import {Form, Button} from "react-bootstrap";

export function GiveAttempts(): React.JSX.Element {

    const [attempts, setAttempts] = useState<number>(3);
    const [req, setReq] = useState<string>("");

    function useAttempt(): void{
        setAttempts(attempts-1);
    }

    function giveAttempts(): void{
        if(!isNaN(parseInt(req))){
            setAttempts(attempts + parseInt(req));
        }
    }

    function reqChange(event: React.ChangeEvent<HTMLInputElement>): void{
        setReq(event.target.value);
    }

    return (
        <div>
            <h3>Give Attempts</h3>
            Attempts: {attempts}
            <Form.Group controlId="Attempts">
                <Form.Control type="number" value={req} onChange={reqChange}/>
            </Form.Group>
            <div>
                <Button onClick={useAttempt} disabled={attempts<=0}>Use</Button>
                <Button onClick={giveAttempts}>Gain</Button>
            </div>
        </div>
    );
}
