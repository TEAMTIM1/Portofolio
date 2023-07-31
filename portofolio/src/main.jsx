import React from 'react'
import ReactDOM from 'react-dom/client'
import ReactGA from 'react-ga';

//local import
import App from './App'
import './index.css'

// Initialisez Google Analytics
ReactGA.initialize('G-QKGXLHPFGK');
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
