import React, { useEffect } from 'react'
import './new.css'
import './home.css'
import Aos from 'aos';
import { BsSearch } from 'react-icons/bs';
const News = () => {
  useEffect(() => {
    Aos.init({duration:1000});
  }, []);
  return (
    <div className='News'>
           <div className='sec1' >
      <img src='https://preview.colorlib.com/theme/myhome/images/index.jpg'/>
     </div>
     <h2 className='h1' data-aos="zoom-in-up">Blog</h2>

     <section className='sec38 container' data-aos="zoom-in-up">
      <div className='sfdv'>
        <img src='https://preview.colorlib.com/theme/myhome/images/blog_1.jpg'/>
        <div className='klo'>
          <h2>07</h2>
          <h3>nov'17</h3>
        </div>
        
        <h2>How to get a good deal on your house</h2>
        <h6>by Admin | in <span>Real Estate</span> | tips and <span> tricks </span>| houses | <span>marketing</span></h6>

        <h6>Nulla aliquet bibendum sem, non placerat risus venenatis
          <br/>
           at. Prae sent vulputate bibendum dictum. Cras at vehicula
           <br/>
            urna. Suspendisse fringilla lobortis justo, ut tempor leo
            <br/> 
            cursus in. Nullam fermentum egestas quam nec malesuada. 
            <br/>
            Donec non ligula non risus luctus mattis non non diam.

</h6>
      </div>
      
      <div className='sec965'>
        <input type="search" />
        <BsSearch className='iop'/>
        <h2>Categories</h2>
        <h6>Real Estate</h6>
        <h6>Lifestyle & Living</h6>
        <h6>Uncategorized</h6>
        <br/>
        <br/>
        <br/>
        <h2>Archive</h2>
        <h6>October 2018</h6>
        <h6>September 2018</h6>
        <h6>August 2018</h6>
        <h6>July 2018</h6>
        <h6>June 2018</h6>
      
      </div>
     </section>

     <section className='sec38 container' data-aos="zoom-in-up">
      <div className='sfdv'>
        <img src='https://preview.colorlib.com/theme/myhome/images/blog_2.jpg'/>
        <div className='klo'>
          <h2>07</h2>
          <h3>nov'17</h3>
        </div>
        
        <h2>How to choose a good area</h2>
        <h6>by Admin | in <span>Real Estate</span> | tips and <span> tricks </span>| houses | <span>marketing</span></h6>

        <h6>Nulla aliquet bibendum sem, non placerat risus venenatis
          <br/>
           at. Prae sent vulputate bibendum dictum. Cras at vehicula
           <br/>
            urna. Suspendisse fringilla lobortis justo, ut tempor leo
            <br/> 
            cursus in. Nullam fermentum egestas quam nec malesuada. 
            <br/>
            Donec non ligula non risus luctus mattis non non diam.

</h6>
      </div>
      
     
     <div className='sec965'>
        <h2>Tags</h2>

        <div className='vvv'>
          <h3>real estate</h3>
          <h3>tips & tricks</h3>
        </div>
        <div className='vvv'>
          <h3>house</h3>
          <h3>home</h3>
        
        </div>

        <div className='vvv'>
          <h3>property</h3>
          <h3>car</h3>
        </div>
        <div className='vvv'>
        <h3 >buy & sell</h3>
        </div>

        <div className='tyu'>
          <h3>Need a Property?</h3>
          <img src='	https://preview.colorlib.com/theme/myhome/images/extra.jpg'/>
          <h4>Call Maria Smith</h4>
          <h5>00349 566 77892</h5>
        </div>
      
      </div>
    
     </section>
     <section className='sec38 container' data-aos="zoom-in-up">
      <div className='sfdv'>
        <img src='	https://preview.colorlib.com/theme/myhome/images/blog_3.jpg'/>
        <div className='klo'>
          <h2>07</h2>
          <h3>nov'17</h3>
        </div>
        
        <h2>How to get a good deal on your house</h2>
        <h6>by Admin | in <span>Real Estate</span> | tips and <span> tricks </span>| houses | <span>marketing</span></h6>

        <h6>Nulla aliquet bibendum sem, non placerat risus venenatis
          <br/>
           at. Prae sent vulputate bibendum dictum. Cras at vehicula
           <br/>
            urna. Suspendisse fringilla lobortis justo, ut tempor leo
            <br/> 
            cursus in. Nullam fermentum egestas quam nec malesuada. 
            <br/>
            Donec non ligula non risus luctus mattis non non diam.

</h6>
      </div>
      
      <div className='sec965'>
      <section className='sec7 container'>
        
        <div className='div55'>
           <div className='dim'>
           <video src='https://player.vimeo.com/external/404473959.sd.mp4?s=fadedbfa084e9a764f557800ff00a31cb7eb13a9&profile_id=165&oauth2_token_id=57447761' muted autoPlay loop></video>
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
      </section>
      </div>
     </section>
    </div>
  )
}

export default News