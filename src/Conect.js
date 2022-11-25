import React from 'react'
import './contect.css'
import { FiMapPin } from 'react-icons/fi';
import { BsFillTelephoneOutboundFill } from 'react-icons/bs';
import { AiOutlineMail } from 'react-icons/ai';
const Conect = () => {
  return (
    <div className='Conect'>
      <section className='drtr'>
        <div className='sd'>
          <img src='https://preview.colorlib.com/theme/myhome/images/index.jpg'/>
        </div>
        <h1 style={{color:"black"}}>Contact</h1>
        <div className='ds'>
          <h6>THE BEST DEALS</h6>
          <h2>Get in touch</h2>
        </div>

      </section>
      <section className='xcs container'>
        <div>
          <h2>myHOME</h2>
          <h6>Nulla aliquet bibendum sem, non placerat risus venenatis at.
            <br/>
            <br/>
             Prae sent vulputate bibendum dictum. Cras at vehicula urna. 
             <br/>
             <br/>
             Suspendisse fringilla lobortis justo, ut tempor leo cursus in.</h6>
        </div>
        <div>
          <div className='dcvd'>
            <FiMapPin className="icopo"/>
            <h5>Main Str, no 23, cairo</h5>
          </div>
          <div className='dcvd'>
            <BsFillTelephoneOutboundFill className="icopo"/>
          <h5>+546 990221 123</h5>
              
          </div>
          <div className='dcvd'>
             <AiOutlineMail className="icopo"/>
             <h5>hosting@contact.com</h5>
          </div>
        </div>
        <div>
          <img src='	https://preview.colorlib.com/theme/myhome/images/contact_image.jpg'/>
        </div>
      </section>
    <div className='dfe container'>
    <div class="mb-3 ">
  <label for="exampleFormControlInput1" class="form-label">Email address</label>
  <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
</div>
<div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
  <button className='fgd'>
  SEND MESSAGE
  </button>
</div>
    </div>
    </div>
  )
}

export default Conect