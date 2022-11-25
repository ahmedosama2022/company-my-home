import React from 'react'
import Home from './Home'
import Navv from './Navv'
import Footer from './Footer'
import Aboutus from './About us'
import Listings from './Listings'
import News from './News'
import {BrowserRouter, Route, Router, Routes, Link, NavLink} from 'react-router-dom';
import Conect from './Conect'
const App = () => {
  return (
    <BrowserRouter>
      
     
          <Navv />
         
          <Routes>
          <Route path='/' element = {<Home />}/>
         <Route path='/Aboutus' element = {<Aboutus />}/>
         <Route path='/Listings' element = {<Listings />}/>
         <Route path='/News' element = {<News />}/>
         <Route path='/Conect' element = {<Conect />}/>
      
          </Routes>
        <Footer data-aos="zoom-out"/>
      
    </BrowserRouter>
  )
}

export default App