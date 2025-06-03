import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router";
import './index.css'
import App from './App.js'
import { ContactSection } from './components/ContactSection';


const container = document.getElementById("root");
if (!container) throw new Error("Root Container Not Found!");

createRoot(container).render(
  <StrictMode>
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />}/>
            <Route path="/about" element={<ContactSection />}/>
        </Routes>
    </BrowserRouter>
  </StrictMode>,
)
