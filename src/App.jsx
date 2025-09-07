import { useState } from 'react'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Home/Home'
import './App.css'
function App() {
  return (
    <BrowserRouter basename='/zeeyneth_portfolio/'>
      <Navbar/>
      <Home />
     
    </BrowserRouter>

  )
}

export default App
