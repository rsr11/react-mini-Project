import { useState } from "react";
import addRemove from "./addRemove";

const AddRemoveProvider = ({children}) =>{

    const [amount ,setAmount] = useState(200);


    return (
        <addRemove.Provider value={{amount, setAmount}}>
            {children}
        </addRemove.Provider>
    )
}


export default AddRemoveProvider;