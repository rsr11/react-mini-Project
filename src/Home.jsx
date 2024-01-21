import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
    <h1 className='text-center text-4xl mt-5' >React mini Projects</h1>


    <Link to={"/bgchange"} > BgChanger </Link> 
    {/* <Link to="/passwordGenrator"> Password Genrator </Link> */}
    </div>
  )
}

export default Home
