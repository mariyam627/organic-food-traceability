import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './component/pages/Login'
import Signup from './component/pages/Signup'
const App = () => {
  return (
      <BrowserRouter >
        <Routes >
         {/* <Route exact path='/' element={<Signup />} /> */}
          <Route path='/Signup' element={<Signup />} />
          <Route path='/Login' element={<Login />} />
        </Routes>
      </BrowserRouter>
  )
}
export default App