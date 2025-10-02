import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Signup from './components/Authentication/Signup'
import Login from './components/Authentication/Login'
import Home from './components/Home/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Signup/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/home' element={<Home/>} />
      </Routes>
    </Router>
    </>
    
  )
}

export default App
