import React, { useState } from "react";
import { Button } from "react-bootstrap";

/**
 * Here is a helper function you *must* use to "roll" your die.
 * The function uses the builtin `random` function of the `Math`
 * module (which returns a random decimal between 0 up until 1) in order
 * to produce a random integer between 1 and 6 (inclusive).
 */
export function d6(): number {
    return 1 + Math.floor(Math.random() * 6);
}



export function TwoDice(): React.JSX.Element {
    const [die1val, setDie1] = useState<number>(1);
    const [die2val, setDie2] = useState<number>(6);

    function rollDie(die_num: number){
        die_num===1? setDie1(d6()) : setDie2(d6());
    }

    return <div style={{display:"flex", flexDirection: "column", flexWrap: "wrap", alignItems:"center", justifyContent:"center"}}>
            <div>
            <Button onClick={() => {rollDie(1)}}>Roll Left</Button>
            <Button onClick={() => {rollDie(2)}}>Roll Right</Button>
            </div>

            <div>
            <span data-testid="left-die">
                Left: {die1val}
            </span>
            </div>

            <div>
            <span data-testid="right-die">
                Right: {die2val}
            </span>
            </div>

            <div>{die1val === die2val? (die1val===1? "You Lose!" : "You Win!") : ""}</div>
    </div>;
}
