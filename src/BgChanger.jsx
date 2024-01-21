import React from 'react'
import { useState } from "react"

const BgChanger = () => {

    const [color , setColor] = useState("black");

  return (
    <div className="w-screen relative h-screen" style={{background:color}} >


    <div className="absolute bottom-10 flex justify-center w-full gap-10">
     <button className="text-red-500 border-2 bg-white border-red-500 py-2 px-4 rounded-lg" onClick={()=> setColor("red") } >Red</button>
     <button className="text-blue-500 border-2 bg-white border-blue-500 py-2 px-4 rounded-lg" onClick={()=> setColor("blue") } >blue</button>
     <button className="text-green-500 border-2 bg-white border-green-500 py-2 px-4 rounded-lg" onClick={()=> setColor("green") }>green</button>
     <button className="text-black border-2 bg-white border-black py-2 px-4 rounded-lg" onClick={()=> setColor("black") }>black</button>
     <button className="text-pink-500 border-2 bg-white border-pink-500 py-2 px-4 rounded-lg" onClick={()=> setColor("pink") }>pink</button>
     </div>
   </div>
  )
}

export default BgChanger
