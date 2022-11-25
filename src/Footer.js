import React, { useEffect } from 'react'
import { BsFacebook } from 'react-icons/bs';
import { ImTwitter } from 'react-icons/im';
import { AiFillBehanceCircle } from 'react-icons/ai';
import { BsInstagram } from 'react-icons/bs';
import { BsFillTelephoneOutboundFill } from 'react-icons/bs';
import { FiMapPin } from 'react-icons/fi';
import Aos from 'aos';
import { MdEmail } from 'react-icons/md';
import './home.css'
import './footer.css'
const Footer = () => {
  useEffect(() => {
    Aos.init({duration:1000});
  }, []);
  return (
    <div className='Footer'  data-aos="flip-up">
        <section className='sec222 '>
            <div>
              <h2>myHOME</h2>
              <h6>Nulla aliquet bibendum sem, non</h6>
              <h6>placerat risus venenatis at. Prae</h6>
              <h6>sent vulputate bibendum dictum.</h6>
              <h6>Cras at vehicula urna. Suspendisse</h6>
              <h6>fringilla lobortis justo, ut tempor leo</h6>
              <h6>cursus in.</h6>
              <br/>
              <br/>
              <br/>
              <br/>
              <div className='con'>
                <BsFacebook className='icon'/>
                <ImTwitter className='icon'/>
                  <AiFillBehanceCircle className='icon'/>
                <BsInstagram className='icon'/>
              </div>
              <br/>
              <br/>
              <br/>
              <button className='bk'>SUBMIT LISITING</button>
            </div>

            <div>
                <h2>Information</h2> 
                <h6><BsFillTelephoneOutboundFill/>+546 990221 123</h6>
                <h6><FiMapPin/>Main Str, no 23, Cairo</h6>
                <h6><MdEmail/>hosting@contact.com</h6>
                <br/>
                <br/>
                <h2>Usefull Links</h2>
                <h6>Testimonials</h6>
                <h6>Listings</h6>
                <h6>Featured Properties</h6>
                <h6>Contact Agents</h6>
                <h6>About us</h6>
            </div>
                <div>
                <h2>Properties Types</h2>
                 <h6>Properties for rent</h6>
                 <h6>Properties for sale</h6>
                 <h6>Commercial</h6>
                 <h6>Homes</h6>
                 <h6>Villas</h6>
                 <h6>Office</h6>
                 <h6>Residential</h6>
                 <h6>Appartments</h6>
                 <h6>Off plan</h6>
                </div>
             <div>
              <h2>Featured Property</h2>
              <div className='div55'>
           <div className='dim'>
           <video src='https://player.vimeo.com/external/451360990.sd.mp4?s=93ad6ceac1b500266f2bf94470d032cd6aacfb42&profile_id=164&oauth2_token_id=57447761' muted autoPlay loop></video>
           </div>
           <div className='sec77'>
           <div className='div2'>
                 <img src='	https://preview.colorlib.com/theme/myhome/images/icon_1.png'/>
                 <h4>280 Doe Meadow Drive Landover, MD 20785</h4>
            </div>
            <hr className='hr'></hr>
            <div className='div1'>
                  <img src='https://preview.colorlib.com/theme/myhome/images/icon_2.png'/>
                  <p>2500 sq ft</p>
                  <img src='https://preview.colorlib.com/theme/myhome/images/icon_3.png'/>
                  <p>2</p>
                  <img src='https://preview.colorlib.com/theme/myhome/images/icon_4.png'/>
                  <p>5</p>
                  <img src='https://preview.colorlib.com/theme/myhome/images/icon_5.png'/>
                  <p>2</p>
            </div>
           </div>
        </div>
                
             </div>
        </section>
    </div>
  )
}

export default Footer