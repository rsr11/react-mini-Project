import React from 'react'
import { useState } from "react"
import { Link } from 'react-router-dom';

const BgChanger = () => {

    const [color , setColor] = useState("black");

  return (
    <>
    
    <button className='px-3 py-2 border-black border-2 hover:bg-black hover:text-white transition-all delay-75 mb-5 rounded-md mt-10 ml-10' > <Link to={"/"}> Back home </Link> </button>


    <div className="w-screen relative h-[80vh]" style={{background:color}} >


    <div className="absolute bottom-10 flex justify-center w-full gap-10">
      <div className='flex py-5 px-8 rounded-lg justify-center gap-10 bg-black' >
     <button className="text-red-500 border-2  border-red-500 py-2 px-4 rounded-lg" onClick={()=> setColor("red") } >Red</button>
     <button className="text-blue-500 border-2  border-blue-500 py-2 px-4 rounded-lg" onClick={()=> setColor("blue") } >blue</button>
     <button className="text-green-500 border-2  border-green-500 py-2 px-4 rounded-lg" onClick={()=> setColor("green") }>green</button>
     <button className="text-purple-500 border-2  border-purple-500 py-2 px-4 rounded-lg" onClick={()=> setColor("purple") }>purple</button>
     <button className="text-pink-500 border-2  border-pink-500 py-2 px-4 rounded-lg" onClick={()=> setColor("pink") }>pink</button>
     </div>
     </div>
   </div>

   </>
  )
}

export default BgChanger
