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
                count ++
                break
                case 1 : 
                console.log("yellow")
                setHighlightRed(false);
                setHighlightYellow(true);
                setHighlightGreen(false);
                count ++
                break
                case 2 : 
                console.log("green")
                setHighlightRed(false);
                setHighlightYellow(false);
                setHighlightGreen(true);
                count ++
                break
                case 3 : 
                console.log("all off")
                setHighlightRed(false);
                setHighlightYellow(false);
                setHighlightGreen(false);
                clearInterval(interval)
                break
            }

          }, 1000);
    }


    

    const [highlightRed, setHighlightRed] = useState(false)
    const [highlightYellow, setHighlightYellow] = useState(false)
    const [highlightGreen, setHighlightGreen] = useState(false)

    return (
        <div className="m-5 frame mx-auto">
            <div className={`${highlightRed ? "highlight" : ""}` + " circle bg-danger mx-auto"} onClick={() => {setHighlightRed(!highlightRed); setHighlightYellow(false); setHighlightGreen(false)}}></div>
            <div className={`${highlightYellow ? "highlight" : ""}` +  " circle bg-warning mx-auto"} onClick={() => {setHighlightYellow(!highlightYellow); setHighlightRed(false); setHighlightGreen(false) }}></div>
            <div className={`${highlightGreen ? "highlight" : ""}` +  " circle bg-success mx-auto"} onClick={() => {setHighlightGreen(!highlightGreen); setHighlightRed(false); setHighlightYellow(false)}}></div>
            <button onClick={cycle}>Cycle</button>
        </div>
    )
}
export default Traffic