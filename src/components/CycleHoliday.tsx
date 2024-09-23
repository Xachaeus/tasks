import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function CycleHoliday(): React.JSX.Element {
    let holidays_alphabetically = ["Christmas","Easter","Halloween","St. Patrick's Day","Thanksgiving"];
    let holidays_chronologically = ["St. Patrick's Day","Easter","Halloween","Thanksgiving","Christmas"];
    let emoji_equivalents: Record<string, string> = {"Christmas": "🎄", "Easter": "🥚", "St. Patrick's Day": "🍀", "Halloween": "🎃", "Thanksgiving": "🦃"};

    const [holiday, setHoliday] = useState<string>("Christmas");

    function next_alphabetically(){
        setHoliday(holidays_alphabetically[(holidays_alphabetically.indexOf(holiday)+1)%5]);
    }
    function next_chronologically(){
        setHoliday(holidays_chronologically[(holidays_chronologically.indexOf(holiday)+1)%5]);
    }

    return <div style={{display:"flex", flexDirection: "column", flexWrap: "wrap", alignItems:"center", justifyContent:"center"}}>
            <div>
                <Button onClick={next_alphabetically}>Next by Alphabet</Button>
                <Button onClick={next_chronologically}>Next by Year</Button>
            </div>
            <div>
                Holiday: {emoji_equivalents[holiday]}
            </div>
    </div>;
}
