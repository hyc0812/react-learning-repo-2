
import './App.css';

import React from "react"
import Header from "./components/Header"
import Home from "./pages/Home"
import ServicesList from "./pages/services/ServicesList"
import ServiceDetail from "./pages/services/ServiceDetail"

import {Routes, Route} from "react-router-dom"

function App() {    
    return (
        <div>
            <Header />
            
            <Routes>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route exact path="/services" >
                    <ServicesList />
                </Route>
                <Route path="/services/:serviceId" >
                    <ServiceDetail />
                </Route>
            </Routes>
        </div>
    )
}

export default App