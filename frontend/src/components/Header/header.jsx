import React from 'react'
import "./header.css"

const header = () => {
  return (
    <div className='header'>
      <div className="header-content">
        <h2>Order your favorite food from here</h2>
        <p>Choose from the diverse menu featuring a delectable array of dishes crafted with the finest ingrediate to satisfy your cravings and your dining experience, one delicious meal at a time.</p>
        <button>view Menu</button>
      </div>
    </div>
  )
}

export default header