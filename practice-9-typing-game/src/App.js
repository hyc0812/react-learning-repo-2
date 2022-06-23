
import './App.css';
// import React, { useEffect, useState } from 'react';


// function App() {

//   const [timeRemaining, setTimeRemaining] = useState(5)
//   const [text, setText] = useState("")

//   useEffect(() => {
//     if (timeRemaining > 0) {
//       setTimeout(()=> {
//         setTimeRemaining(time => time -1)
//       },1000)
//     }
//   },[timeRemaining])

//   function handleChange(event) {
//     const { value } = event.target;
//     setText(value)
//   }

//   function wordCount(str) {
//     const wordsArr = str.trim().split(" ")
//     const result = wordsArr.filter(word => word !=="").length
//     console.log(result)
//     return result
//   }

//   return (
//     <div>
//       <h1>How fast do you type? </h1>
//       <textarea 
//         value={text}
//         onChange={ handleChange }
//       />
//       <h4>Time remaining: {timeRemaining}</h4>
//       <button onClick={ () => wordCount(text) }> START </button>
//       <h1> Word Count: ???</h1>
//     </div>
//   );
// }

// export default App;


import React, {useState, useEffect} from "react"

/**
 * Challenge:
 * 
 * 1. Create state to hold the current value of the countdown timer.
 *    Display this time in the "Time Remaining" header
 * 
 * 2. Set up an effect that runs every time the `timeRemaining` changes
 *    The effect should wait 1 second, then decrement the `timeRemaining` by 1
 * 
 *    Hint: use `setTimeout` instead of `setInterval`. This will help you avoid
 *    a lot of extra work.
 * 
 *    Warning: there will be a bug in this, but we'll tackle that next
 * 
 * 3. Make it so the effect won't run if the time is already at 0
 */

function App() {
    const [text, setText] = useState("")
    const [timeRemaining, setTimeRemaining] = useState(9)
    
    function handleChange(e) {
        const {value} = e.target
        setText(value)
    }
    
    function calculateWordCount(text) {
        const wordsArr = text.trim().split(" ")
        return wordsArr.filter(word => word !== "").length
    }
    
    useEffect(() => {
        if(timeRemaining > 0) {
            setTimeout(() => {
                setTimeRemaining(time => time + 1)
            }, 1000)
        }
    }, [timeRemaining])
    
    return (
        <div>
            <h1>How fast do you type?</h1>
            <textarea
                onChange={handleChange}
                value={text}
            />
            <h4>Time remaining: {timeRemaining}</h4>
            <button onClick={() => console.log(calculateWordCount(text))}>Start</button>
            <h1>Word count: ???</h1>
        </div>
    )
}

export default App
