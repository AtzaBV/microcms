import React from 'react'
import ReactDOM from 'react-dom/client'

import { BrowserRouter } from 'react-router-dom';

import { MicroApp } from './MicroApp.jsx'

import './styles.css'
import 'draft-js/dist/Draft.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <MicroApp />
    </BrowserRouter>
  </React.StrictMode>,
)
