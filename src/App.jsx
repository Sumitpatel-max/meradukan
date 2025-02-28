import "./App.css";

import Login from "./assets/Pages/Login";
import Footer from "./assets/Component/Footer";
import Navbar from "./assets/Component/Navbar";
import {BrowserRouter, Route, Routes}from "react-router-dom";
import Registration from "./assets/Pages/Register";
import Home from "./assets/Pages/Home";
import About from "./assets/Pages/About";
import ServicePage from "./assets/Pages/Services";
import Contact from "./assets/Pages/Contact";
import Pan from "./assets/Pages/Pan";
import Casata from "./assets/Pages/Casata";
import Coco from "./assets/Pages/Coco";
import Falooda from "./assets/Pages/Falooda";
import { IceCream } from "lucide-react";
import Icecream2 from "./assets/Pages/Icecream2";
import Icecream3 from "./assets/Pages/Icecream3";
import Lassi from "./assets/Pages/Lassi";
import Rabadi from "./assets/Pages/Rabadi";
import Shakes from "./assets/Pages/Shakes";



function App(){


    return(
        <div>
         <BrowserRouter>
        <Navbar/>  
      
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/Register" element={<Registration/>} />
            <Route path="/Login" element={<Login/>} />
            <Route path="/About" element={<About/>} />
            <Route path="/Services" element={<ServicePage/>} />
            <Route path="/Contact" element={<Contact/>} />
            <Route path="/Pan" element={<Pan/>} />
            <Route path="/Casata" element={<Casata/>} />
            <Route path="/Coco" element={<Coco/>} />
            <Route path="/Falooda" element={<Falooda/>} />
            <Route path="/Icecream" element={<IceCream/>} />
            <Route path="/Icecream2" element={<Icecream2/>} />
            <Route path="/Icecream3" element={<Icecream3/>} />
            <Route path="/Lassi" element={<Lassi/>} />
            <Route path="/Rabadi" element={<Rabadi/>} />
            <Route path="/Pan" element={<Pan/>} />
            <Route path="/Shakes" element={<Shakes/>} />
           
            
            
            
            
            
            
      </Routes>
     
   
    <Footer/>
  </BrowserRouter>
</div>        
        
    );
}
export default App;