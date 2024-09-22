import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home.jsx'
import SignIn from './pages/SignIn.jsx'
import SignUp from './pages/SignUp.jsx'
import Dashboard from './pages/Dashboard.jsx'
import ContactUs from './pages/ContactUs.jsx'
import About from './pages/About.jsx'
import PageNotFound from './pages/PageNotFound.jsx'
import ElementBody from './pages/ElementBody.jsx'
import PrivateRoute from './components/PrivateRoute.jsx'

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route element={<ElementBody/>} >

      <Route path='/' element={<Home/>} />
      <Route path='/signin' element={<SignIn/>} />
      <Route path='/signup' element={<SignUp/>} />
      <Route element={<PrivateRoute/>}>

      <Route path='/dashboard' element={<Dashboard/>} />
      </Route>
      <Route path='/contact' element={<ContactUs/>} />
      <Route path='/about' element={<About/>} />
      </Route>

      <Route path='/*' element={<PageNotFound/>} />

    </Routes>
    </BrowserRouter>
  )
}

export default App