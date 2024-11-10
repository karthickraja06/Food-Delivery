import React, { useState } from 'react'
import { Routes, Route} from 'react-router-dom'
import Home from './pages/Home/home'
import Cart from './pages/Cart/cart'
import Placeorder from './pages/PlaceOrder/placeorder'
import Footer from './components/Footer/Footer.jsx'
import NavBar from './components/NavBar/NavBar.jsx'
import LoginPopup from './components/LoginPopup/LoginPopup.jsx'
import Verify from './pages/verify/Verify.jsx'


const App = () => {
  const [showLogin,setShowLogin] = useState(false)
  return (
    <>
      {
        showLogin?<LoginPopup setShowLogin = {setShowLogin}/>:<></>
      }
      <div className='app'>
        <NavBar setShowLogin = {setShowLogin}/>
        
        <Routes>
          <Route path='/' element = {<Home/>}/>
          <Route path='/cart' element = {<Cart/>}/>
          <Route path='/order' element = {<Placeorder/>}/>
          <Route path='/verify' element={<Verify/>}/>
        </Routes>
      </div>
      <Footer/>
    </>
  )
}

export default App 