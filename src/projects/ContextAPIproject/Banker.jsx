import React, { useContext } from 'react'
import addRemove from './context/addRemove';

const Banker = () => {

    const {amount, setAmount} = useContext(addRemove);

  return (
    <div>
      <h1 className='text-xl font-semibold '>Banker Account / User balance : <span className='underline'> {amount} </span></h1>
      
      <button className='bg-green-500 mt-5 hover:bg-green-600 px-3 py-2 text-white font-semibold text-md' onClick={()=>{setAmount(amount+1)}} >Add Money</button>
      <br />
      <button className='bg-red-500 mt-5 hover:bg-red-600 px-3 py-2 text-white font-semibold text-md' onClick={()=>{setAmount(amount-1)}} >Withdraw Money</button>

    </div>
  )
}

export default Banker
