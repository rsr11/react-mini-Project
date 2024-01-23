import React from 'react'
import { Link } from 'react-router-dom'
import InputComponent from './InputComponent'

const CurrencyValueSwap = () => {
  return (
    <>
      
      
    <button className='px-3 py-2 border-black border-2 hover:bg-black hover:text-white transition-all delay-75 mb-5 rounded-md mt-10 ml-10' > <Link to={"/"}> Back home </Link> </button>

    <div className='w-[80vw] mx-auto h-[80vh] bg-black flex justify-center' >
      
      <form className='border-white flex flex-col gap-5 items-center mt-10'>

        <InputComponent/>

        <button className='bg-blue-500 transition-all py-3 px-5 hover:bg-blue-600 font-semibold text-lg text-white' > Swap</button>

        <InputComponent/>

        <button type='submit' className='bg-green-500 hover:bg-green-600 transition-all text-white py-3 px-5 text-lg font-semibold'> Covert  </button>

      </form>

    </div>



    </>
  )
}

export default CurrencyValueSwap






// api for this project
// htttps://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json