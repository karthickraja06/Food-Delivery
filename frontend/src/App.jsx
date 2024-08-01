import React from 'react'
import NavBar from './components/navbar/navbar.jsx'
import { Routes, Route} from 'react-router-dom'
import Home from './pages/Home/home'
import Cart from './pages/Cart/cart'
import Placeorder from './pages/PlaceOrder/placeorder'


const App = () => {
  return (
    <div className='app'>
      <NavBar/>
      <Routes>
        <Route path='/' element = {<Home/>}/>
        <Route path='/cart' element = {<Cart/>}/>
        <Route path='/placeorder' element = {<Placeorder/>}/>
      </Routes>
    </div>
  )
}

export default App 