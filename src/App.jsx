import BgChanger from "./BgChanger";
import Home from "./Home";
import PasswordGenrator from "./PasswordGenrator";

import { BrowserRouter , Routes , Route } from "react-router-dom";
import CurrencyValueSwap from "./projects/CurrencySwapProject/CurrencyValueSwap";
import Bank from "./projects/ContextAPIproject/Bank";
import AddRemoveProvider from "./projects/ContextAPIproject/context/AddRemoveProvider";


function App() {



 return (
   <>


   <BrowserRouter>
      <AddRemoveProvider>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/bgchange" element={ <BgChanger /> } />
      <Route path="/passwordGenrator" element={<PasswordGenrator/>} />
      <Route path="/currencySwapper" element={<CurrencyValueSwap />} />
      <Route path="/addRemoveContext" element={<Bank/>} />
    </Routes>
      </AddRemoveProvider>
   </BrowserRouter>
   </>
  )
}

export default App
