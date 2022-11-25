import React, { useEffect } from 'react'
import './about.css'
import CountUp from 'react-countup';
import { AiFillDribbbleCircle } from 'react-icons/ai';
import Aos from 'aos';
import { BsFacebook } from 'react-icons/bs';
import { AiFillTwitterCircle } from 'react-icons/ai';
const Aboutus = () => {
  useEffect(() => {
    Aos.init({duration:1000});
  }, []);
  return (
    <div className='Aboutus'>
      
      <div>
      <img src='https://preview.colorlib.com/theme/myhome/images/index.jpg'/>
      </div>
      <div className='se122 ' data-aos="zoom-out">
        <h1 >About us</h1>
        <div className='sec33 '>
          <div>
           <h6>THE BEST DEALS</h6>
           <h2>Who we are</h2>
           <h6>Nulla aliquet bibendum sem, non placerat risus venenatis at.
            <br/>
             Prae sent vulputate bibendum dictum. Cras at vehicula urna.
             <br/> 
             Suspendisse fringilla lobortis justo, ut tempor leo cursus in. 
             <br/>
             Nulla aliquet bibendum sem, non placerat risus venenatis at. 
             <br/>
             Prae sent vulputate bibendum dictum. Cras at vehicula urna. 
             <br/>
             Suspendisse fringilla lobortis justo, ut tempor leo cursus in.</h6>
             <button className='bt2'>RADE MORE</button>
          </div>
          <div className='im2'>
            <img src='https://preview.colorlib.com/theme/myhome/images/intro.jpg'/>
          </div>
        </div>
      </div>
       <section className='sec45'>
       <div className='hh11 container' data-aos="zoom-out">
       <h6>THE BEST DEALS</h6>
        <h2>Services</h2>
       </div>
       <section className='container'>
       <div className='sec33'>
       <div className='sd1' data-aos="flip-left">
          <div className='im1'>
            <img src='https://preview.colorlib.com/theme/myhome/images/service_3.png'/>
            <h2>Renting</h2>
          </div>
          <h6>Nulla aliquet bibendum sem, 
            <br/>
            non placerat risus venenatis at.
            <br/>
             Prae sent vulputate bibendum dictum.</h6>
        </div>
        <div className='sd1 ' data-aos="flip-left">
          <div className='im1'>
            <img src='	https://preview.colorlib.com/theme/myhome/images/service_1.png'/>
            <h2>Consulting</h2>
          </div>
          <h6>Nulla aliquet bibendum sem, 
            <br/>
            non placerat risus venenatis at.
            <br/>
             Prae sent vulputate bibendum dictum.</h6>
        </div>
        <div className='sd1' data-aos="flip-left" >
          <div className='im1'>
            <img src='https://preview.colorlib.com/theme/myhome/images/service_2.png'/>
            <h2>Real estate sales</h2>
          </div>
          <h6>Nulla aliquet bibendum sem, 
            <br/>
            non placerat risus venenatis at.
            <br/>
             Prae sent vulputate bibendum dictum.</h6>
        </div>
       </div>
       <div className='sec33'>
       <div className='sd1' data-aos="flip-right">
          <div className='im1'>
            <img src='	https://preview.colorlib.com/theme/myhome/images/service_4.png'/>
            <h2>Meditation</h2>
          </div>
          <h6>Nulla aliquet bibendum sem, 
            <br/>
            non placerat risus venenatis at.
            <br/>
             Prae sent vulputate bibendum dictum.</h6>
        </div>
        <div className='sd1' data-aos="flip-right">
          <div className='im1'>
            <img src='	https://preview.colorlib.com/theme/myhome/images/service_5.png'/>
            <h2>Evaluation</h2>
          </div>
          <h6>Nulla aliquet bibendum sem, 
            <br/>
            non placerat risus venenatis at.
            <br/>
             Prae sent vulputate bibendum dictum.</h6>
        </div>
        <div className='sd1' data-aos="flip-right">
          <div className='im1'>
            <img src='	https://preview.colorlib.com/theme/myhome/images/service_6.png'/>
            <h2>Price Consulting</h2>
          </div>
          <h6>Nulla aliquet bibendum sem, 
            <br/>
            non placerat risus venenatis at.
            <br/>
             Prae sent vulputate bibendum dictum.</h6>
        </div>
       </div>
       </section>
       </section>

      
       <section className=' sec78'>
        <div className='scf' data-aos="zoom-in-right">
          <img src='https://preview.colorlib.com/theme/myhome/images/duplex.svg'/>
          <h1 style={{color:"white"}}>+ <CountUp end={440} /> </h1>
          <h6>homes sold</h6>
        </div>
        <div  className='scf' data-aos="zoom-in-right">
          <img src='	https://preview.colorlib.com/theme/myhome/images/prize.svg'/>
          <h1 style={{color:"white"}}>+ <CountUp end={520} /> </h1>
          <h6>awards</h6>
        </div>
        <div  className='scf' data-aos="zoom-in-left">
          <img src='	https://preview.colorlib.com/theme/myhome/images/home.svg'/>
          <h1 style={{color:"white"}}>+ <CountUp end={250} /> </h1>
          <h6>followers</h6>
        </div>
        <div  className='scf' data-aos="zoom-in-left">
          <img src='https://preview.colorlib.com/theme/myhome/images/rent.svg'/>
          <h1 style={{color:"white"}}>+ <CountUp end={360} /> </h1>
          <h6>rentals</h6>
        </div>
      
       </section>

       <div className='sec321 container' data-aos="zoom-in-left">
        <h6>THE BEST DEALS</h6>
        <h2>Our Realtors</h2>
       </div>


       <section className='sec658 container'>
        <div className='divn1' data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500">
          <img src='https://preview.colorlib.com/theme/myhome/images/realtor_1.jpg'/>
           <div className='vb'>
           <h1 style={{color:"black"}}>Michael Smith</h1>
          <h5>Buying Agent</h5>
          <h6>michael@myhometemp.com</h6>
          <h6>+45 27774 5653 267</h6>
          <div className='io1'>
          <BsFacebook className="icon"/>
            <AiFillTwitterCircle className="icon"/>
          
            <AiFillDribbbleCircle className="icon"/>
         
           </div>
           </div>
        </div>
        <div className='divn1' data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500">
          <img src='https://preview.colorlib.com/theme/myhome/images/realtor_1.jpg'/>
           <div className='vb'>
           <h1 style={{color:"black"}}>Michael Smith</h1>
          <h5>Buying Agent</h5>
          <h6>michael@myhometemp.com</h6>
          <h6>+45 27774 5653 267</h6>
          <div className='io1'>
          <BsFacebook className="icon"/>
            <AiFillTwitterCircle className="icon"/>
          
            <AiFillDribbbleCircle className="icon"/>
         
           </div>
           </div>
        </div>
        <div className='divn1' data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500">
          <img src='https://preview.colorlib.com/theme/myhome/images/realtor_1.jpg'/>
           <div className='vb'>
           <h1 style={{color:"black"}}>Michael Smith</h1>
          <h5>Buying Agent</h5>
          <h6>michael@myhometemp.com</h6>
          <h6>+45 27774 5653 267</h6>
          <div className='io1'>
          <BsFacebook className="icon"/>
            <AiFillTwitterCircle className="icon"/>
          
            <AiFillDribbbleCircle className="icon"/>
         
           </div>
           </div>
        </div>
       </section>
       <div className='container'>
       <button className='tn '>CONTACT US</button>
       </div>
    </div>
  )
}

export default Aboutus