import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.js'


const container = document.getElementById("root");
if (!container) throw new Error("Root Container Not Found!");

createRoot(container).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
