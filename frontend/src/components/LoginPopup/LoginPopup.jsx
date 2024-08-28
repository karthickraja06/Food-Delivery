import React, { useState } from 'react'
import './LoginPopup.css'
import { assets } from '../../assets/assets'

const LoginPopup = ({setShowLogin}) => {
  const[currState,setCurrState] = useState("Sign Up")
  const[data,setData] = useState({
    name:"",
    email:"",
    password:""
  })
  const onChangeHandler = (event)=>{
      const name = event.target.name;
      const value = event.target.value;
      setData((data)=>({...data,[name]:value}))
  }

  return (
    <div className='login-popup'>
        <form className='login-popup-container'>
          <div className="login-popup-title">
            <h2>{currState}</h2>
            <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt="close" />
          </div>
          <div className="login-popup-inputs">
            {
              currState === "Login"?<></>:<input name='name' onChange={onChangeHandler} value={data.name} type="text" placeholder='Your Name' required/>
            }
            <input name='email' onChange={onChangeHandler} value={data.email} type="email" placeholder='Your Email' required/>
            <input name='password' onChange={onChangeHandler} value={data.password} type="password" placeholder='Your Password' required />
          </div>

          <button>{currState === "Sign Up"?"Create account":"Login"}</button>
          <div className="login-popup-condition">
            <input type="checkbox" required/>
            <p>By continuing, I agree the terms of use & privacy policy.</p>
          </div>
          {currState === "Login"? 
          <p>Create a New Account? <span onClick={()=>setCurrState("Sign Up")}>Click Here</span></p>:
          <p>Already have a Account <span onClick={()=>setCurrState("Login")}>Login Here</span></p>
          }
        </form>
    </div>
  )
}

export default LoginPopup