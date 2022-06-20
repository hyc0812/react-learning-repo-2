import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import UserContext from './userContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <React.StrictMode>
    <UserContext.Provider value={"Yongchang He"}>
      <App />
    </UserContext.Provider>
  </React.StrictMode>

);