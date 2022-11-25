import React, { useState }  from 'react'
import { BsFillTelephoneForwardFill } from 'react-icons/bs';
import { FiMapPin } from 'react-icons/fi';
import { MdEmail } from 'react-icons/md';
import { AiFillDribbbleCircle } from 'react-icons/ai';
import { BsFacebook } from 'react-icons/bs';
import { AiFillTwitterCircle } from 'react-icons/ai';

import {BrowserRouter, Route, Router, Routes, Link, NavLink} from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './nav.css'
const Navv = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  return (
    <div className='hh'>
       <div className='topp'>
       <div className='top'>
                <BsFillTelephoneForwardFill className='io'/>
                <h5>+546 990221 12</h5>
                <FiMapPin className='io'/>
                <h5>Main Str, no 23, Cairo</h5>
                <MdEmail className='io'/>
                <h5>hosting@contact.com</h5>
        </div>
        <div className='two'>
            <BsFacebook className="icon"/>
            <AiFillTwitterCircle className="icon"/>
          
            <AiFillDribbbleCircle className="icon"/>
         
           <h3>LOGIN/REGISTER</h3>
           
        </div>
       
       </div>

       <div className='sec2'>
       <nav class="navbar navbar-expand-lg ">
  <div class="container-fluid">
    <a class="navbar-brand" href="#"><img src='https://play-lh.googleusercontent.com/06-rVRCsfy3SAKu824zeoxrI_fZXIU735tA8jmFQXcP-StyVa04DjfniI66-6ef3xSU'/></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <Link class="nav-link active"  to="/">Home</Link>
         <Link class="nav-link"  to="/Aboutus">Aboutus</Link>
         <Link class="nav-link"  to="/Listings">Listings</Link>
         <Link class="nav-link"  to="/News">News</Link>
        
         <Link class="nav-link " to="/Conect">Conect</Link>
      <form class="d-flex">
       
        <button class="bn " type="submit">SUBMIT LISTING</button>
      </form>
    </div>
  </div>
</nav>
       </div>
    </div>
  )
}

export default Navv







