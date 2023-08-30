import React, { useState } from 'react';



function Traffic () {

    const [highlightRed, setHighlightRed] = useState(false)
    const [highlightYellow, setHighlightYellow] = useState(false)
    const [highlightGreen, setHighlightGreen] = useState(false)

    return (
        <div className="m-5 frame mx-auto">
            <div className={`${highlightRed ? "highlight" : ""}` + " circle bg-danger mx-auto"} onClick={() => setHighlightRed(!highlightRed)}></div>
            <div className={`${highlightYellow ? "highlight" : ""}` +  " circle bg-warning mx-auto"} onClick={() => setHighlightYellow(!highlightYellow)}></div>
            <div className={`${highlightGreen ? "highlight" : ""}` +  " circle bg-success mx-auto"} onClick={() => setHighlightGreen(!highlightGreen)}></div>
        </div>
    )
}
// "circle bg-danger mx-auto"
export default Traffic