import { useState, useEffect } from "react";
import "./App.css";
import divider from "./assets/pattern-divider-desktop.svg";
import dice from "./assets/icon-dice.svg";

function App() {
    const url = "https://api.adviceslip.com/advice";

    const [adviceStr, setAdviceStr] = useState("");
    const [adviceNum, setAdviceNum] = useState(0);

    async function fetchData() {
        try {
            const response = await fetch(url);
            const json = await response.json();

            setAdviceStr(json.slip.advice);
            setAdviceNum(json.slip.id);
        } catch (error) {
            console.log("error", error);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className="App">
            <div className="adviceNum">ADVICE #{adviceNum}</div>
            <div className="adviceStr">"{adviceStr}"</div>
            <img src={divider} alt="divider" />
            <button className="adviceButton" onClick={fetchData}>
                <img src={dice} alt="get-advice" />
            </button>
        </div>
    );
}

export default App;
