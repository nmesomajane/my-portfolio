import { useState } from 'react'
import './App.css'
import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./routers/routes";

function App() {
  
  return (
    <>
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
    </>
  )
}

export default App
