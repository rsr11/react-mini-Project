import React, { useContext } from 'react'
import User from './User'
import Banker from './Banker'
import addRemove from './context/addRemove'

const Bank = () => {

    const {amount} = useContext(addRemove);

  return (
    <div>
       <h1 className='text-center text-3xl font-bold mt-10'>Bank Of Maharashtra</h1>
      <h2 className='text-center text-lg font-semibold mt-5'>Account Balance : <span className='text-white bg-black py-2 px-3'>{amount}</span></h2>
      
      <div className='flex mt-10 mx-auto justify-between w-[800px] bg-blue'>
      <User/>
      <Banker/>
      </div>

    </div>
  )
}

export default Bank
