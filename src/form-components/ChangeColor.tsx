import React, { useState } from "react";
import {Form} from "react-bootstrap";

export function ChangeColor(): React.JSX.Element {

    const [color, setColor] = useState<string>("red");
    
    const colors: string[] = ["red", "green", "blue", "orange", "cyan", "magenta", "white", "black", "#66cbff"];

    function onColorChange(event: React.ChangeEvent<HTMLInputElement>){
        setColor(event.target.value);
    }

    return (
        <div>
            <h3>Change Color</h3>
            <Form.Group controlId="color-select">
                {colors.map((value: string) =>
                <Form.Check inline type="radio" name="Colors" label={value} key={value} value={value} onChange={onColorChange} checked={color===value} style={{backgroundColor: value}}/>
                )}
            </Form.Group>

            <div><span>You have chosen </span><span data-testid="colored-box" style={{backgroundColor: color}}>{color}</span><span>.</span></div>
        </div>
    );
}
