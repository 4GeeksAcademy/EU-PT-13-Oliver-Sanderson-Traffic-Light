import React, { useState } from 'react';



function Traffic () {

    function cycle() {
        let count = 0
        const interval = setInterval(() => {
            switch (count) {
                case 0 : 
                console.log("red");
                setHighlightRed(true);
                setHighlightYellow(false);
                setHighlightGreen(false);
                setHighlightPurple(false)
                count ++
                break
                case 1 : 
                console.log("yellow")
                setHighlightRed(false);
                setHighlightYellow(true);
                setHighlightGreen(false);
                setHighlightPurple(false)
                count ++
                break
                case 2 : 
                console.log("green")
                setHighlightRed(false);
                setHighlightYellow(false);
                setHighlightGreen(true);
                setHighlightPurple(false)
                count ++
                break
                case 3 : 
                console.log("all off")
                setHighlightRed(false);
                setHighlightYellow(false);
                setHighlightGreen(false);
                setHighlightPurple(false)
                clearInterval(interval)
                break
            }

          }, 1000);
    }


    const purpleLightShow = () => {
        setHidden(false)
    }

    const [highlightRed, setHighlightRed] = useState(false)
    const [highlightYellow, setHighlightYellow] = useState(false)
    const [highlightGreen, setHighlightGreen] = useState(false)
    const [highlightPurple, setHighlightPurple] = useState(false)
    const [hidden, setHidden] = useState(true)

    return (
        <div className="m-5 frame mx-auto">
            <div className={`${highlightRed ? "highlight" : ""}` + " circle bg-danger mx-auto"} onClick={() => {setHighlightRed(!highlightRed); setHighlightYellow(false); setHighlightGreen(false); setHighlightPurple(false)}}></div>
            <div className={`${highlightYellow ? "highlight" : ""}` +  " circle bg-warning mx-auto"} onClick={() => {setHighlightYellow(!highlightYellow); setHighlightRed(false); setHighlightGreen(false); setHighlightPurple(false) }}></div>
            <div className={`${highlightGreen ? "highlight" : ""}` +  " circle bg-success mx-auto"} onClick={() => {setHighlightGreen(!highlightGreen); setHighlightRed(false); setHighlightYellow(false); setHighlightPurple(false)}}></div>
            <div className={`${highlightPurple ? "highlight" : ""}` + `${hidden ? "hidden" : ""}` +  " circle purpleLight mx-auto"} onClick={() => {setHighlightPurple(!highlightPurple); setHighlightGreen(false); setHighlightRed(false); setHighlightYellow(false)}}></div>
            <button onClick={cycle}>Cycle</button>
            <button onClick={purpleLightShow}>Secret</button>
        </div>
    )
}
export default Traffic