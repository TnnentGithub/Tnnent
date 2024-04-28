import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import ratingIcon from '../images/Vector (17).svg';
import shareIcon from '../images/ios_share (2).svg';
import './style.css';

import 'swiper/css';

function Productpage() {
  return (
   <>
   <div className='forscroll'>
    <section className='lg:hidden'>
    <div className="fixed bg-[#fff] z-60 tnennt">
                
                <div className="flex justify-between items-center px-3 mt-6">
                <div className="flex flex-col">
            <div className="flex gap-2 items-center">
                <h2 className="font-bold text-[6vw]">PRODUCT</h2>
                <div className="rounded-full bg-red-500 w-[1vh] h-[1vh] "></div>
            </div>
            
        </div>
        <div className="rounded-full bg-[#F5F5F5] w-[12vw] h-[12vw] flex justify-center items-center absolute left-[85%]">
            <svg width="40%" height="40%" viewBox="0 0 18 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                <line x1="15.6315" y1="27.347" x2="1.96744" y2="13.6829" stroke="#272727" strokeWidth="4.09708"/>
                <line x1="16.2493" y1="2.30791" x2="4.66085" y2="13.8964" stroke="#272727" strokeWidth="4.09708"/>
                </svg>                
        </div>
                </div>
                </div>
                <div className='mt-[23%]'>
                <Swiper
          className="mySwiper mr-2 ml-4"
          spaceBetween={10}
          slidesPerView={1.2}
         
        >
        <SwiperSlide>
          <div className='h-[65vw] w-[70vw] bg-red-400'></div>  
        </SwiperSlide> 
        <SwiperSlide>
          <div className='h-[65vw] w-[70vw] bg-red-400'></div>  
        </SwiperSlide> 
        <SwiperSlide>
          <div className='h-[65vw] w-[70vw] bg-red-400'></div>  
        </SwiperSlide> 
        <SwiperSlide>
          <div className='h-[65vw] w-[70vw] bg-red-400'></div>  
        </SwiperSlide> 
        <SwiperSlide>
          <div className='h-[65vw] w-[70vw] bg-red-400'></div>  
        </SwiperSlide> 

        </Swiper>
        </div>
        <div className="flex justify-between items-center mt-6">
            <div className="flex gap-2 ml-4 items-center ">
                <div className="w-8 h-8  bg-[#616363] rounded-full flex-shrink-0"></div>
                <p className="font-semibold text-[#9C9C9C]  flex-shrink-0">Jain Brothers</p>
            </div>

            <div className="flex ml-32 gap-3 mt-[-3px] justify-end right-0">
                <div className="w-10 h-10 mt-3 bg-[#F5F5F5] rounded-full flex justify-center items-center">
                    <img src={ratingIcon} alt="" className="w-5" />
                </div>
                <div className="w-10 h-10 mt-3 bg-[#F5F5F5] rounded-full flex justify-center items-center">
                    <img src={shareIcon} alt="" className="w-4" />
                </div>

                <div className="w-10 h-10 mt-3 mr-3 bg-[#F5F5F5] rounded-full flex justify-center items-center">
                    <div className="heart-container" title="Like">
                        <input type="checkbox" className="checkbox" id="Give-It-An-Id" />
                        <div className="svg-container">
                            <svg viewBox="0 0 24 24" className="svg-outline" xmlns="http://www.w3.org/2000/svg">
                                <path d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Zm-3.585,18.4a2.973,2.973,0,0,1-3.83,0C4.947,16.006,2,11.87,2,8.967a4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,11,8.967a1,1,0,0,0,2,0,4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,22,8.967C22,11.87,19.053,16.006,13.915,20.313Z" stroke="#BEBEBE"></path>
                            </svg>
                            
                            <svg viewBox="0 0 24 24" className="svg-filled" xmlns="http://www.w3.org/2000/svg">
                                <path d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Z">
                                </path>
                            </svg>
                            <svg className="svg-celebrate" width="100" height="100" xmlns="http://www.w3.org/2000/svg">
                                <polygon points="10,10 20,20"></polygon>
                                <polygon points="10,50 20,50"></polygon>
                                <polygon points="20,80 30,70"></polygon>
                                <polygon points="90,10 80,20"></polygon>
                                <polygon points="90,50 80,50"></polygon>
                                <polygon points="80,80 70,70"></polygon>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </section>
   </div>
   </>
  )
}

export default Productpage
