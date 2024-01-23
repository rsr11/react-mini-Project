import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {

    const buttonStyle = "py-2 px-3 border-2 border-black rounded-md hover:bg-black hover:text-white transition-all delay-75";

  return (
    <div>
    <h1 className='text-center text-4xl mt-5' >React mini Projects</h1>


    <div className='w-[80vw] mx-auto mt-20 flex gap-20 flex-wrap'>
    <Link to={"/bgchange"} className={buttonStyle}  > BgChanger </Link> 
    <Link to="/passwordGenrator" className={buttonStyle} > Password Genrator </Link>
    <Link to="/currencySwapper" className={buttonStyle}> Currency Swapper </Link>
    <Link to="/addRemoveContext" className={buttonStyle}> Context API {`(Bank project)`}</Link>
    </div>
    </div>
  )
}

export default Home
