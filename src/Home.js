import React, { useState, useEffect } from 'react'
import './home.css'
import { Swiper, SwiperSlide } from "swiper/react";
import Aos from 'aos';
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./home.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

import Carousel from 'react-bootstrap/Carousel';

    function Home() {
        const [index, setIndex] = useState(0);
        useEffect(() => {
          Aos.init({duration:1000});
        }, []);
        const handleSelect = (selectedIndex, e) => {
          setIndex(selectedIndex);
        };
  return (
    <div className='Home'>
      <div className='sec1'>
      <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="	https://preview.colorlib.com/theme/myhome/images/index.jpg"
          alt="First slide"
     />
        <Carousel.Caption>
        <div className='sec2 container 'data-aos="fade-right">
         <h1>1243 Main Avenue
            <br></br>
             Left Town
             <br></br>
              $ 482 900</h1>
        
         </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="	https://preview.colorlib.com/theme/myhome/images/index.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
         <div className='sec2 container'>
         <h1>1243 Main Avenue
            <br></br>
             Left Town
             <br></br>
              $ 482 900</h1>
         
         </div>
        </Carousel.Caption>
      </Carousel.Item >
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="	https://preview.colorlib.com/theme/myhome/images/index.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
        <div className='sec2 container'>
        <h1>1243 Main Avenue
            <br></br>
             Left Town
             <br></br>
              $ 482 900</h1>
         
         </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel> 
      </div>
      <div className='sec3 container' data-aos="fade-right">
        <h1 style={{color:"black"}}>Find your home</h1>
        <div className='sec4'>
            <input type="taxt" placeholder="Property type" />
            <input type="text" placeholder="Location"/>
            <input type="text" placeholder="No rooms"/>
            <input className='but' type="submite" value="SUBMIT LISTING"/>
        </div>
      </div>

      <div className='sec6 container' data-aos="zoom-out">
        <h6>THE BEST DEALS</h6>
        <h1 style={{color:"black"}}>Featured Properties</h1>
      </div>

      <section className='sec7 container' data-aos="fade-right">
        <div className='div55'>
           <div className='dim ' data-aos="fade-right">
           <video src='https://player.vimeo.com/external/414380290.sd.mp4?s=a69ad8a3b8e2a8cdd712f9df4acc01f58b92b33c&profile_id=164&oauth2_token_id=57447761' muted autoPlay loop></video>
           </div>
           <div className='sec77' data-aos="fade-right">
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
        <div className='div55' data-aos="fade-right">
           <div className='dim ' data-aos="fade-right">
           <video src='https://player.vimeo.com/external/388902243.sd.mp4?s=cf07a88724d1ef574009cbfbe74beab97f2d326e&profile_id=164&oauth2_token_id=57447761' muted autoPlay loop></video>
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
        <div className='div55' data-aos="fade-right">
           <div className='dim ' data-aos="fade-right">
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
      <section className='sec8 container'>
        <div className='div55' data-aos="fade-left">
           <div className='dim ' data-aos="fade-right">
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
        <div className='div55' data-aos="fade-left">
           <div className='dim ' data-aos="fade-right">
           <video src='https://player.vimeo.com/external/392582058.sd.mp4?s=b35755aacd9476b89810bff9aab7469b9b3ce4c5&profile_id=164&oauth2_token_id=57447761' muted autoPlay loop></video>
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
        <div className='div55' data-aos="fade-left">
           <div className='dim ' data-aos="fade-right">
           <video src='https://player.vimeo.com/external/329032472.sd.mp4?s=d21f2f3e0dc7694e93df398d669726605081827d&profile_id=164&oauth2_token_id=57447761' muted autoPlay loop></video>
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
      <div className='map' data-aos="zoom-out">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27640.33348692258!2d31.50780485020157!3d30.006959400463565!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145822cffcd270e7%3A0x98b73d687889fd8!2z2YXYr9mK2YbYqSDYp9mE2YLYp9mH2LHYqSDYp9mE2KzYr9mK2K_YqdiM INmF2K3Yp9mB2LjYqSDYp9mE2YLYp9mH2LHYqeKArA!5e0!3m2!1sar!2seg!4v1664169148906!5m2!1sar!2seg" width="100%" height="450" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></SwiperSlide>
      
        <SwiperSlide><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27640.33348692258!2d31.50780485020157!3d30.006959400463565!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145822cffcd270e7%3A0x98b73d687889fd8!2z2YXYr9mK2YbYqSDYp9mE2YLYp9mH2LHYqSDYp9mE2KzYr9mK2K_YqdiM INmF2K3Yp9mB2LjYqSDYp9mE2YLYp9mH2LHYqeKArA!5e0!3m2!1sar!2seg!4v1664169148906!5m2!1sar!2seg" width="100%" height="450" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></SwiperSlide>
        <SwiperSlide><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27640.33348692258!2d31.50780485020157!3d30.006959400463565!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145822cffcd270e7%3A0x98b73d687889fd8!2z2YXYr9mK2YbYqSDYp9mE2YLYp9mH2LHYqSDYp9mE2KzYr9mK2K_YqdiM INmF2K3Yp9mB2LjYqSDYp9mE2YLYp9mH2LHYqeKArA!5e0!3m2!1sar!2seg!4v1664169148906!5m2!1sar!2seg" width="100%" height="450" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></SwiperSlide>
        <SwiperSlide><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27640.33348692258!2d31.50780485020157!3d30.006959400463565!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145822cffcd270e7%3A0x98b73d687889fd8!2z2YXYr9mK2YbYqSDYp9mE2YLYp9mH2LHYqSDYp9mE2KzYr9mK2K_YqdiM INmF2K3Yp9mB2LjYqSDYp9mE2YLYp9mH2LHYqeKArA!5e0!3m2!1sar!2seg!4v1664169148906!5m2!1sar!2seg" width="100%" height="450" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></SwiperSlide>
      </Swiper>
     
      </div>

      <section className='div223 container' data-aos="zoom-out">
        <h6>THE BEST DEALS</h6>
        <h1 style={{color:"black"}}>Today's Hot Deal</h1>
      </section>

      <section className='sec8 container'>
        <div className='imge' data-aos="fade-left">
            <video src='https://player.vimeo.com/external/539010008.sd.mp4?s=790251ba7c25525475d18e698ae413978b66ae44&profile_id=164&oauth2_token_id=57447761'  muted autoPlay loop></video>
            <div className='dv'>
                <h6 className='dh6'>HOUSE</h6>
                <h6 className='dh5'>FOR SALE</h6>
            </div>
        </div>
        <div className='sec88' data-aos="fade-right">
            <h5 className='h5'>$ 562 346</h5>
          <h2>Villa for sale</h2>
          <div className='div15 flex'>
            <img src='https://preview.colorlib.com/theme/myhome/images/icon_1.png'/>
            <h6>280 Doe Meadow Drive Landover, MD 20785</h6>
          
          </div>
          <p>Nulla aliquet bibendum sem, non placerat risus venenatis at. Prae sent vulputate bibendum dictum. Cras at vehicula urna. Suspendisse fringilla lobortis justo, ut tempor leo cursus in.</p>
          <div className='dev'>
            <img src='https://preview.colorlib.com/theme/myhome/images/agent_1.jpg'/>
            <h6><span>Maria Smith,</span> Agent</h6>
          </div>
          <hr className='hrr'></hr>
            <div className='div111'>
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
      </section>

      <section className='sec55 container'>
        <img src='https://preview.colorlib.com/theme/myhome/images/testimonials.jpg' data-aos="fade-right"/>

        <div className='div99' data-aos="fade-left">
            <h6>THE BEST DEALS</h6>
            <h1>Clients
             
                 testimonials</h1>
                 <div>
                 <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide className='sw'><h1>"They helped us find our home"</h1>
        <h6>Nulla aliquet bibendum sem, non placerat risus venenatis at
            . Prae sent vulputate bibendum dictum. Cras at vehicula urna. 
            Suspendisse fringilla lobortis justo, ut tempor leo cursus in.
             Nulla aliquet bibendum sem, non placerat risus venenatis at. Prae sent vulputate bibendum dictum. 
            Cras at vehicula urna. Suspendisse fringilla lobortis justo, ut tempor leo cursus in.</h6>
        </SwiperSlide>
        <SwiperSlide className='sw'><h1>"They helped us find our home"</h1>
        <h6>Nulla aliquet bibendum sem, non placerat risus venenatis at
            . Prae sent vulputate bibendum dictum. Cras at vehicula urna. 
            Suspendisse fringilla lobortis justo, ut tempor leo cursus in.
             Nulla aliquet bibendum sem, non placerat risus venenatis at. Prae sent vulputate bibendum dictum. 
            Cras at vehicula urna. Suspendisse fringilla lobortis justo, ut tempor leo cursus in.</h6></SwiperSlide>
        <SwiperSlide className='sw'><h1>"They helped us find our home"</h1>
        <h6>Nulla aliquet bibendum sem, non placerat risus venenatis at
            . Prae sent vulputate bibendum dictum. Cras at vehicula urna. 
            Suspendisse fringilla lobortis justo, ut tempor leo cursus in.
             Nulla aliquet bibendum sem, non placerat risus venenatis at. Prae sent vulputate bibendum dictum. 
            Cras at vehicula urna. Suspendisse fringilla lobortis justo, ut tempor leo cursus in.</h6></SwiperSlide>
      </Swiper>
                 </div>
        </div>
      </section>
    </div>
  )
}

export default Home