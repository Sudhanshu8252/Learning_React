import React from 'react'
import {Route, Routes} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/about'
import Contact from './pages/Contact'
import NavBar from './components/NavBar'
import Product from './pages/Product'

const App = () => {
  return (
    <div>

     <NavBar/>
      
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/Contact' element={<Contact/>}/>
        <Route path='/Product' element={<Product/>}/>
        
      </Routes>
    </div>
  )
}

export default App
