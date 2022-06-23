
import './App.css';

import React, { useState } from "react"

function App () {

  const [inputData, setInputData] = useState({firstName:"", lastName:""})
  const [contactData, setContactData] = useState([])

  function handleChange(event) {
    const { name, value } = event.target;
    setInputData(prevInputData => {
      return {
          ...prevInputData,
          [name] : value
        }
      })
    }
  function handleSubmit(event) {
    event.preventDefault();
    setContactData(prevContacts => [...prevContacts, inputData])
  }
  const contacts = contactData.map(contact => <h2>{ contact.firstName } { contact.lastName }</h2>)

  return (
    <div>
      <div>
        <form onSubmit={ handleSubmit }>
          <input
              placeholder="First Name"
              name="firstName"
              value={inputData.firstName}
              onChange={handleChange}
            />
          <input
              placeholder="Last Name"
              name="lastName"
              value={inputData.lastName}
              onChange={handleChange}
            />
          <br />
          <button> Add Contact </button>
          <br />
          { contacts }
        </form>

      </div>

    </div>
  )
}

export default App


  // const [ count, setCount ] = useState(0)

  // function increment() {
  //   setCount(prevCount => prevCount + 1)
  // }
  // function decrement() {
  //   setCount(prevCount => prevCount - 1)
  // }
  // function double () {
  //   setCount(prevCount => prevCount * 2)
  // }
  // function half () {
  //   setCount(prevCount => (prevCount / 2))
  // }
