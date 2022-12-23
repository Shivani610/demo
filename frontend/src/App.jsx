import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Login, Register } from './pages'
import Navbar from './pages/Navbar'

function App() {
  return <>
    <Navbar />
    <Routes>
      <Route path='/' element={<h1>Home Page</h1>} />
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
      <Route path='/*' element={<h1>Page Not Found</h1>} />
    </Routes>
  </>
}

export default App