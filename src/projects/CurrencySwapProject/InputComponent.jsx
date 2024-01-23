import React, { useId } from 'react'

const InputComponent = ({amount,setAmount, label, currency, setCurrency}) => {

    const labelId = useId();



  return (
    <>
      <div className='text-white w-[50vw] border-2  py-10 px-5 flex justify-between items-center'>
      <div className='flex gap-5'>
      <label htmlFor={labelId} className='text-xl'>From : </label>
      <input type="number" className='text-black' name="" id={labelId} />
      </div>

      <div className='flex gap-5'>
        <label htmlFor="" className=''>Currency Type</label>
       <select name="" id="" className='text-black'> 
        <option value="">Usd</option>
        <option value="">Inr</option>
       </select>
        
      </div>



      </div>

    </>
  )
}

export default InputComponent
