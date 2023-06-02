import React, { useState } from "react";
import "./Navbar.css";
import Mainhome from "./Mainhome";
import ContactUs from "./ContactUs";
import Studentlogin from "./Studentlogin";

const Navbar = () => {
    const [contactVis,setContactVis] = useState(false);
    const [homeVis, setHomeVis] = useState(true);
    const [loginVis,setloginVis] = useState(false);
    function showContact() {
        setHomeVis(false);
        setContactVis(true);
        setloginVis(false);
    }
    function showhome() {
        setHomeVis(true);
        setContactVis(false);
          setloginVis(false);
    }
    function showlogin(){
        setHomeVis(false);
        setContactVis(false);
        setloginVis(true);

    }


  return (
    <div> 
    <nav className="navbar">
      <ul className="navbar-nav">
        <li className="nav-item">
          <h3 className="nav-title">LPU Library</h3>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="Home" onClick={showhome}>
           Home
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#student-login" onClick={showlogin}>
            Login
          </a>
        </li>
        
            <li className="nav-item">
          <a className="nav-link" href="#contact-us" onClick={showContact}>
            Contact Us
          </a>
        </li>
      </ul>
    </nav>
    {homeVis && <Mainhome></Mainhome>}
    {contactVis && <ContactUs></ContactUs>}
   {loginVis && <Studentlogin></Studentlogin>}
    </div>
  );
};

export default Navbar;
