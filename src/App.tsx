import React from "react";
import { Button } from "react-bootstrap";
import "./App.css";
import { ChangeType } from "./components/ChangeType";
import { RevealAnswer } from "./components/RevealAnswer";
import { StartAttempt } from "./components/StartAttempt";
import { TwoDice } from "./components/TwoDice";
import { CycleHoliday } from "./components/CycleHoliday";
import { Counter } from "./components/Counter";
import kangaroo from "./kangaroo-punch.png";
import { DoubleHalf } from "./bad-components/DoubleHalf";
import { ColoredBox } from "./bad-components/ColoredBox";
import { ShoveBox } from "./bad-components/ShoveBox";
import { ChooseTeam } from "./bad-components/ChooseTeam";

function App(): React.JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript
            </header>
            <h1>Example header.</h1>
            <p>Example paragraph text. Hello World!</p>
            <img
                src={kangaroo}
                alt="Picture of a badass australian punching a kangaroo in the face to protect his dog."
            />
            <div style={{ justifyContent: "left", alignItems: "left" }}>
                Some cool details about the above picture:
                <ul>
                    <li>
                        The man seen in the picture is defending his dog from a
                        kangaroo attack.
                    </li>
                    <li>
                        The man seen in the picture can bench press approx. 17
                        kangaroos, and successfully completed the first recorded
                        &quot;no-hands&quot; pushup.
                    </li>
                    <li>
                        The kangaroo seen in the picture declined to comment,
                        and is currently attending King George&apos;s Clown
                        School for Silly Geese due to a court order.
                    </li>
                </ul>
            </div>
            <div style={{backgroundColor: '#ff0000', width: '100%', height: '50px'}}></div>
            <hr></hr>
            <DoubleHalf></DoubleHalf>
            <hr></hr>
            <ChooseTeam></ChooseTeam>
            <hr></hr>
            <ColoredBox></ColoredBox>
            <hr></hr>
            <ShoveBox></ShoveBox>
            <hr></hr>
            <Button onClick={()=>{console.log("Hello World!")}}>Log Hello World</Button>
            <hr />
            <Counter></Counter>
            <hr />
            <RevealAnswer></RevealAnswer>
            <hr />
            <StartAttempt></StartAttempt>
            <hr />
            <TwoDice></TwoDice>
            <hr />
            <ChangeType></ChangeType>
            <hr />
            <CycleHoliday></CycleHoliday>
            
        </div>
    );
}

export default App;
