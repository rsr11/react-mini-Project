import { useState, useEffect } from "react";


const useConvertCurrency =({currency}) =>{
      
    const [data , setData] = useState({});
    
    useEffect(()=>{

        fetch(`htttps://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
        .then((res)= res.json())
        .then((res)=> setData(res[currency]) )
        .catch((err)=>{
            console.log(err);
            setData({"error":"error in API"});
        })
       
        
    },[currency])



}