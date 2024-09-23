import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function RevealAnswer(): React.JSX.Element {

    const [textShown, setTextShown] = useState<boolean>(false);

    function updateText(){
        setTextShown(!textShown);
    }

    return <div style={{display:"flex", flexDirection: "column", flexWrap: "wrap", alignItems:"center", justifyContent:"center"}}>
        <Button onClick={updateText}>Reveal Answer</Button>
        Answer: {textShown? "42" : ""}
    </div>;
}
