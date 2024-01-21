import React, { useCallback, useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'


const PasswordGenrator = () => {


  const [length , setLength] = useState(8);
  const [numberChecked , setNumberChecked] = useState(false);
  const [specialCharChecked , setSpecialChar] = useState(false);
  const [password , setPassword] = useState("");


  const passwordGenratorf = useCallback(()=>{

      let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZjhgfdsaqwertyuiop";
      let pass = "";

      if (numberChecked) str += "1234567890";
      if(specialCharChecked) str += "@!#$%^&*";


      for (let i = 0; i <= length; i++) {
         
        const randomChar = Math.floor(Math.random()* length +1 );
        pass += str.charAt(randomChar);

        setPassword(pass);
        
      }
  },[length,numberChecked,specialCharChecked])

  
  const inputValue = useRef(null);

  const copyToClip = ()=>{
         window.navigator.clipboard.writeText(password);
         inputValue.current.select();
  }

  useEffect(()=>{
       passwordGenratorf();
  },[numberChecked,specialCharChecked, length, passwordGenratorf])

console.log(numberChecked);

  return (
    <>
    <button className='px-3 py-2 border-black border-2 hover:bg-slate-200 transition-all delay-75 mb-5 rounded-md mt-10 ml-10' > <Link to={"/"}> Back home </Link> </button>

    <div className='bg-black h-[80vh] w-[80vw] flex flex-col items-center text-white mx-auto'>
      <h1 className='text-center text-xl font-bold pt-5'>Password Genrator</h1>
      <div>
      <input type="text" value={password} ref={inputValue} className='mt-10 p-2 text-black outline-0' readOnly />
      <button className='bg-blue-500 py-2 px-3 rounded-r-md hover:bg-blue-600' onClick={copyToClip}>COPY</button>
      </div>

      <div className='flex gap-5 mt-5'>
      <input type="range" min={0} max={100} onChange={(e)=>{setLength(e.target.value)}} value={length} name="" id="" />
      <p>Length : {length}</p>
      </div>
      
      <div className='flex gap-10 mt-5'>
        <div className='flex gap-3'>
      <input type="checkbox" name="" id="" onClick={()=> setNumberChecked((prev)=> !prev)} />
      <label>Number</label>
        </div>

        <div className='flex gap-3'>
      <input type="checkbox" name="" id="" onClick={()=> setSpecialChar((prev)=> !prev)} />
      <label>Special Character</label>
        </div>
      </div>

   

    </div>
    </>
  )
}

export default PasswordGenrator
