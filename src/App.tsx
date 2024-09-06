import React from "react";
import "./App.css";
import kangaroo from "./kangaroo-punch.png";
import { Button } from "react-bootstrap";

function App(): React.JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript
            </header>
            <h1>
                This is my example of a header. Note that it is not in the
                Bootstrap header.
            </h1>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload. Zachariah Sollenberger was here!!!
            </p>
            <p>Hello World!</p>
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
            <Button
                onClick={() => {
                    console.log("Hello World!");
                }}
            >
                Log Hello World
            </Button>
            <div
                style={{
                    width: "100%",
                    height: "100px",
                    backgroundColor: "#FF0000",
                }}
            ></div>
        </div>
    );
}

export default App;
