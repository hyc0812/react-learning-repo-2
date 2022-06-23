
import './App.css';
import React, { useState } from 'react';


function App() {

  const [inputData, setInputData] = useState({textArea:""})

  function handleChange(event) {
    const {name, value} = event.target;
    setInputData(prevInputData => {
      return {
        ...prevInputData,
        [name]: value
      }
    })

  }
  console.log(inputData)

  return (
    <div>
      <h1>How fast do you type? </h1>
      <textarea 
        name="textArea"
        value={inputData.textArea}
        onChange={ handleChange }/>
      <h4>Time remaining: ???</h4>
      <button> START </button>
      <h1> Word Count: ???</h1>
    </div>
  );
}

export default App;
