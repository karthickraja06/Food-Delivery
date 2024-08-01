import React, { useState } from 'react'
import "./home.css"
import Header from '../../components/Header/header'
import Exploremenu from '../../components/ExploreMenu/exploremenu'

const home = () => {
  const [category,setCategory] = useState('All');
  return (
    <div>
        <Header/>
        <Exploremenu category = {category} setCategory = {setCategory}/> 
    </div>
  )
}

export default home