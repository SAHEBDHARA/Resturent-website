import React from 'react'
import './Home.css'
import Body from '../components/Body/Body'
import Navbar from '../components/Navbar/Navbar'

const Home = () => {
  return (
    <div className='home-container'>
        
        <Navbar/>
        <Body/>
    </div>
  )
}

export default Home