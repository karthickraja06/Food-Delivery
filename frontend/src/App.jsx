import React from 'react'
import NavBar from './components/navbar/navbar.jsx'
import { Routes, Route} from 'react-router-dom'
import Home from './pages/Home/home'
import Cart from './pages/Cart/cart'
import Placeorder from './pages/PlaceOrder/placeorder'
import Footer from './components/Footer/Footer.jsx'


const App = () => {
  return (
    <>
      <div className='app'>
        <NavBar/>
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