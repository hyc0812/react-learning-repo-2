
import './App.css';

import React from "react"

import Header from "./Header"
import Button from "./Button"
import ThemeContext from './themeContext';


function App() {
    return (
        <div>
            <Header />
            <ThemeContext.Consumer>
                {theme => (
                    <Button theme ={theme} />
                )}
            </ThemeContext.Consumer>
            <Button />
        </div>
    )
}

export default App
