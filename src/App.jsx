import BgChanger from "./BgChanger";
import Home from "./Home";
import PasswordGenrator from "./PasswordGenrator";

import { BrowserRouter , Routes , Route } from "react-router-dom";


function App() {



 return (
   <>

   <PasswordGenrator/>

   <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/bgchange" element={ <BgChanger /> } />
      {/* <Route path="/passwordGenrator" element={<PasswordGenrator/>} /> */}
    </Routes>
   </BrowserRouter>
   </>
  )
}

export default App
