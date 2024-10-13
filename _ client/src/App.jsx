import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import DashBoard from './pages/DashBoard'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import Projects from './pages/Projects'
// import Header from './components/Header'
import Header from './components/Header.jsx';


export default function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/dashboard" element={<DashBoard/>} />
        <Route path="/sign-in" element={<SignIn/>} />
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/projects" element={<Projects/>} />

      </Routes>
    </BrowserRouter>
  )
}
