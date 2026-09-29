
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./components/Home/Home";
import Login from "./components/login/login";
import Register from "./components/Register/Register";
import Profiles from "./components/Profiles/profiles ";

function App() {
  return (
   <>
   <BrowserRouter>
    <Home/>
      <Routes>
        

        {/* <Route path="/" element={<Home />} /> */}

       {/* <Route index element={<h1 className="p-6">Home Page
        
       </h1>} /> */}

         <Route path="/login" element={<Login />} /> 

        <Route path="/Register" element={<Register />} /> 
       <Route path="/profile" element={<Profiles />} />
      </Routes></BrowserRouter>
 
      </>
   
  );
}

export default App;

