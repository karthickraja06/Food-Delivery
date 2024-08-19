import React, { useState } from 'react'
import { Routes, Route} from 'react-router-dom'
import Home from './pages/Home/home'
import Cart from './pages/Cart/cart'
import Placeorder from './pages/PlaceOrder/placeorder'
import Footer from './components/Footer/Footer.jsx'
import NavBar from './components/navbar/NavBar.jsx'
import LoginPopup from './components/LoginPopup/LoginPopup.jsx'


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
          <Route path='/placeorder' element = {<Placeorder/>}/>
        </Routes>
      </div>
      <Footer/>
    </>
  )
}

export default App 