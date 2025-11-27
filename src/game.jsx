import { useState } from "react"
import './App.css'

function Game(){
    let [aiGuess, setAiGuess] = useState(512);
    let [power, setPower] = useState(256);
    let [counter, setCounter] = useState(0);

    const lessThan = () => {
        if(counter >= 10 || aiGuess <= 1){
            window.alert("CHEATER! Press refresh to restart WITHOUT CHEATING")
        }else{
            setAiGuess(aiGuess - power)
            setPower(power / 2)
            setCounter(counter + 1);
        }
    }

    const exactly = () => {
        window.alert(`The computer guessed your number is ${counter} attemps, Press refresh to try again`)
    }

    const greaterThan = () => {
        if(counter >= 10 || aiGuess >= 1000){
            window.alert("CHEATER! Press refresh to restart WITHOUT CHEATING!")
        }
        else{
            setAiGuess(aiGuess + power);
            setPower(power / 2);
            setCounter(counter + 1)
        }
    }

    return(
        <>
        <h1>I can guess your number (between 1-1000) in 10 guesses or less</h1>
        <div className="gameContainer">
            <h1>Count: {counter}</h1>
            <h2>Is your number greater, lower, or exactly {aiGuess}</h2>
            <button className="button" onClick={lessThan}>Less Than</button>
            <button className="button" onClick={exactly}>Exactly</button>
            <button className="button" onClick={greaterThan}>Greater Than</button>
        </div>
        
        </>
    )
}

export default Game