import React, { useState } from 'react';
import './style.css'; 
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import vectorImage from '../images/Vector (5).svg';
import iosShareImage from '../images/ios_share.svg';
import groupImage from '../images/Group 1 (1).svg';
import settings from '../images/settings.svg';
import contact from '../images/Frame 416.svg';
import flag from '../images/Vector (2).png';
import camera from '../images/Rectangle 2267.svg';


const Storeprofile = () => {
  // Define state variables for dynamic content
  const [Toggled, setToggled] = useState(false)
  
  return (
    <>
    <div className='forscroll'>
    <section className="lg:hidden">
      <div className="flex justify-center">
            <div className="w-[93vw] rounded-3xl mt-4 bg-[#2D332F] relative">
                <div className="flex gap-4 ml-4 items-center">
                    <div className="rounded-xl w-[11vh] h-[11vh] bg-green-200 mt-6"></div>
                    <div className="flex flex-col">
                      <div className=" absolute flex justify-center items-center text-[#DEFF98] border-[#DEFF98] border-2 px-4 py-1 rounded-2xl mt-8">
                        <h3 className="text-[3vw]">Clothing</h3>
                      </div>
                      <div className="flex items-center gap-3 mt-16">
                        <h2 className="text-white font-bold text-[7vw]">Jain Brothers</h2>
                        <div className="rounded-full bg-green-500 w-[1vh] h-[1vh]  mt-1"></div>
                    </div>
                    <div className="flex gap-3 items-center">
                        <img className="w-[1.3vh]" src={vectorImage} alt=""/>
                        <p className="text-white opacity-50 text-[3vw]">jainbrothers.tnennt.store</p>
                    </div>
                </div>
                
            </div>
            <div className="flex justify-between items-center mb-2">
            <div className="flex gap-3 items-center">
                <img
            className="w-[4vw] mt-12 ml-4 mb-4"
            src={iosShareImage}
            alt=""
          />
          <button
          className="bg-[#67676733] px-5 py-2 mt-9 rounded-full text-white text-[2.7vw] font-bold"
        >
          Assam-Karimganj
        </button>
            </div>
            <div className="flex items-center gap-3 mt-4">
            <p className="font-bold text-white text-[3vw] mt-6">Accepting Orders:</p>
            <div
        className={`toggle w-[15vw] h-[8vw] bg-transparent border-2 border-white rounded-[30px] flex items-center px-1 mr-2 mt-6 ${
          Toggled ? "Toggled" : ""
        }`}
        onClick={() => setToggled(!Toggled)}
      >
        <div
          className="toggle-btn rounded-full w-[5vw] h-[5vw] bg-red-500 ease-in duration-300"
        />
      </div>
      </div>
        </div>
        </div>
        </div>
        <div className="flex justify-center w-full items-center">
            <div
              className="bg-transparent border-2 border-[#A7A7A7]  p-2 h-[32vw] w-[96vw] mt-4 rounded-3xl"
            >
              <div className="flex px-1 py-2 gap-2 justify-center items-center">
                <div className="bg-green-200 w-[33%] h-[24vw] rounded-lg p-2">
                  <div className="flex gap-1 items-center">
                    <h2 className="font-bold text-[3.2vw]">LIST</h2>
                    <div className="bg-[#FF0000] h-[0.6vh] w-[0.6vh] rounded-full"></div>
                   </div>
                    <h2 className="font-bold text-[3.2vw]">PRODUCT</h2>
                    <div className="flex justify-between items-center">
                    <div className="mt-3 flex flex-col">
                        <h2 className="font-bold text-[3.2vw]">137</h2>
                        <h3 className="text-[2.3vw] opacity-50 font-bold mt-[-2.7%]">PRODUCTS</h3>
                    </div>
                    <div className="bg-[#0D6A6D] h-[3vh] w-[3vh] mt-3 rounded-lg flex justify-center items-center p-2">
                          
                        <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.8828 1.71387L10.8828 19.2853" stroke="white" strokeWidth="3" strokeLinecap="round"/>
                            <path d="M19.2852 10.1182L1.71373 10.1182" stroke="white" strokeWidth="3" strokeLinecap="round"/>
                            </svg>
                          
                    </div>
                    </div>
                </div>
                <div className="bg-[#EAE6F6] w-[33%] h-[24vw] rounded-lg p-2">
                    <div className="flex gap-1 items-center">
                        <h2 className="font-bold text-[3.2vw]">ANALYTICS</h2>
                        <div className="bg-[#0D6A6D] h-[0.6vh] w-[0.6vh] rounded-full"></div>
                       </div>
                        
                        <div className="flex justify-between mt-4 items-center">
                         <img className="w-[14vw]" src={groupImage} alt=""/>
                        <div className="bg-[#0D6A6D] h-[3vh] w-[3vh] mt-4 rounded-lg flex justify-center items-center p-2">
                          
                            <svg width="12" height="12" viewBox="0 0 12 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <line x1="1.91914" y1="1.53789" x2="10.5895" y2="10.2082" stroke="white" strokeWidth="2.59973"/>
                                <line x1="1.52617" y1="17.4266" x2="8.87943" y2="10.0733" stroke="white" strokeWidth="2.59973"/>
                                </svg>
                                
                              
                        </div>
                      
                    </div>
                </div>
              
                <div className="bg-[#EFEFEF] w-[33%] h-[24vw] rounded-lg p-2">
                    <div className="flex gap-1 items-center">
                        <h2 className="font-bold text-[2.5vw]">STORE</h2>
                        <div className="bg-yellow-400 h-[0.6vh] w-[0.6vh] rounded-full"></div>
                       </div>
                        <h2 className="font-bold text-[2.5vw] leading-1">COMMUNITY<br/>POST</h2>
                        <div className="flex justify-between mt-[4px]">
                        <div className=" flex flex-col">
                            <h2 className="font-bold text-[3.2vw]">17</h2>
                            <h3 className="text-[2.3vw] opacity-50 font-bold mt-[-4.7%]">POSTS</h3>
                        </div>
                        <div className="bg-[#7E7E7E] h-[3vh] w-[3vh] mt-[1px] rounded-lg flex justify-center items-center p-2">
                            <svg width="12" height="12" viewBox="0 0 12 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <line x1="1.91914" y1="1.53789" x2="10.5895" y2="10.2082" stroke="#DEFF98" strokeWidth="2.59973"/>
                                <line x1="1.52617" y1="17.4266" x2="8.87943" y2="10.0733" stroke="#DEFF98" strokeWidth="2.59973"/>
                                </svg>
                        </div>
                    </div>
                </div>
              </div>
            </div>
            </div>
            <div class="flex justify-center">
                <div class="w-[95vw] h-[30vw] mt-5 flex gap-2">
            <Swiper
      spaceBetween={10}
      slidesPerView={3}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
      <div className="bg-transparent border-2 rounded-xl border-[#B5B5B5] h-[25vw] w-[29vw] p-2">
                        <div className="flex gap-1 items-center">
                            <h2 className="font-bold text-[3.2vw]">STORE</h2>
                            <div className="bg-[#FF0000] h-[0.6vh] w-[0.6vh] rounded-full"></div>
                           </div>
                            <h2 className="font-bold text-[3.2vw]">ENGAGEMENT</h2>
                            <div className="flex justify-between items-center">
                            <div className="mt-3 flex flex-col">
                                <h2 className="font-bold text-[3.2vw]">179</h2>
                                <h3 className="text-[2.3vw] opacity-50 font-bold mt-[-2.7%]">CONNECTIONS</h3>
                            </div>
                            </div>
                            
                    </div>
                    
                    
                    
      </SwiperSlide>
      <SwiperSlide>
      <div className=" bg-transparent border-2 rounded-xl border-[#B5B5B5] h-[25vw] w-[29vw] p-2">
                        <div className="flex gap-1 items-center">
                            <h2 className="font-bold text-[3.2vw]">TOTAL</h2>
                            <div className="bg-[#FF0000] h-[0.6vh] w-[0.6vh] rounded-full"></div>
                           </div>
                            <h2 className="font-bold text-[3.2vw]">REVIEWS</h2>
                            <div className="flex-col flex">
                            <div className="rounded-full w-[7vw] h-[7vw] border-[1px] border-[#CECECE] mt-1 flex justify-center items-center">
                                <img className="w-[3vw]" src={flag} alt=""/>
                            </div>
                            <h3 className="font-bold opacity-50 text-[2.7vw]">800/700</h3>
                            </div>
                    </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className=" bg-transparent border-2 rounded-xl border-[#B5B5B5] h-[25vw] w-[29vw] p-2">
                        <div className="flex gap-1 items-center">
                            <h2 className="font-bold text-[3.2vw]">CUSTOMER</h2>
                            <div className="bg-[#0D6A6D] h-[0.6vh] w-[0.6vh] rounded-full"></div>
                           </div>
                           <h2 className="font-bold text-[3.2vw]">ORDER</h2>
                            <div className="flex justify-between mt-3 items-center">
                             <img className="w-[6vw]" src={contact} alt=""/>
                            <div className="bg-[#F5F5F5] h-[3vh] w-[3vh]  rounded-full flex justify-center items-center p-2">
                              
                                <svg width="12" height="12" viewBox="0 0 12 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <line x1="1.91914" y1="1.53789" x2="10.5895" y2="10.2082" stroke="#7E7E7E" stroke-width="2.59973"/>
                                    <line x1="1.52617" y1="17.4266" x2="8.87943" y2="10.0733" stroke="#7E7E7E" stroke-width="2.59973"/>
                                    </svg>
                                    
                                  
                            </div>
                          
                        </div>
                    </div> 
      </SwiperSlide>
      <SwiperSlide>
      <div className="bg-transparent border-2 rounded-xl border-[#B5B5B5] h-[25vw] w-[29vw] p-2">
                        <div className="flex gap-1 items-center">
                            <h2 className="font-bold text-[3.2vw]">STORE</h2>
                            <div className="bg-[#0D6A6D] h-[0.6vh] w-[0.6vh] rounded-full"></div>
                           </div>
                           <h2 className="font-bold text-[3.2vw]">SETTING</h2>
                            <div className="flex justify-between mt-3 items-center">
                             <img className="w-[6vw]" src={settings} alt=""/>
                            <div className="bg-[#F5F5F5] h-[3vh] w-[3vh]  rounded-full flex justify-center items-center p-2">
                              
                                <svg width="12" height="12" viewBox="0 0 12 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <line x1="1.91914" y1="1.53789" x2="10.5895" y2="10.2082" stroke="#7E7E7E" stroke-width="2.59973"/>
                                    <line x1="1.52617" y1="17.4266" x2="8.87943" y2="10.0733" stroke="#7E7E7E" stroke-width="2.59973"/>
                                    </svg>
                                    
                                  
                            </div>
                          
                        </div>
                    </div> 
      </SwiperSlide>
      </Swiper>
      </div>
      </div>
      <h2 className="font-bold text-[5vw] ml-5 mt-3">Highlights</h2>
      <div class="flex justify-center">
      <div class="w-[95vw] h-[40vw] mt-5 flex gap-2 ml-5 mr-3">
      <Swiper
      spaceBetween={10}
      slidesPerView={2.5}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
      <div class="border-[1px] border-[#B5B5B5] h-[30vw] w-[34vw] rounded-xl flex justify-center items-center swiper-slide">
                    
                    <div class="bg-[#F5F5F5] h-[6vh] w-[6vh] rounded-full flex justify-center items-center">
                        <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.8828 1.71387L10.8828 19.2853" stroke="#B5B5B5" stroke-width="3" stroke-linecap="round"/>
                            <path d="M19.2852 10.1182L1.71373 10.1182" stroke="#B5B5B5" stroke-width="3" stroke-linecap="round"/>
                            </svg>
                    </div>
                
            </div>
      </SwiperSlide>
      <SwiperSlide>
      <div class="border-[1px] border-[#B5B5B5] h-[30vw] w-[34vw] rounded-xl  flex justify-center items-center">
                    
                    <div class="bg-[#F5F5F5] h-[6vh] w-[6vh] rounded-full flex justify-center items-center">
                        <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.8828 1.71387L10.8828 19.2853" stroke="#B5B5B5" stroke-width="3" stroke-linecap="round"/>
                            <path d="M19.2852 10.1182L1.71373 10.1182" stroke="#B5B5B5" stroke-width="3" stroke-linecap="round"/>
                            </svg>
                    </div>
                
            </div>
      </SwiperSlide>
      <SwiperSlide>
      <div class="border-[1px] border-[#B5B5B5] h-[30vw] w-[34vw] rounded-xl  flex justify-center items-center">
                    
                    <div class="bg-[#F5F5F5] h-[6vh] w-[6vh] rounded-full flex justify-center items-center">
                        <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.8828 1.71387L10.8828 19.2853" stroke="#B5B5B5" stroke-width="3" stroke-linecap="round"/>
                            <path d="M19.2852 10.1182L1.71373 10.1182" stroke="#B5B5B5" stroke-width="3" stroke-linecap="round"/>
                            </svg>
                    </div>
                
            </div>
      </SwiperSlide>
      <SwiperSlide>
      <div class="border-[1px] border-[#B5B5B5] h-[30vw] w-[34vw] rounded-xl  flex justify-center items-center">
                    
                    <div class="bg-[#F5F5F5] h-[6vh] w-[6vh] rounded-full flex justify-center items-center">
                        <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.8828 1.71387L10.8828 19.2853" stroke="#B5B5B5" stroke-width="3" stroke-linecap="round"/>
                            <path d="M19.2852 10.1182L1.71373 10.1182" stroke="#B5B5B5" stroke-width="3" stroke-linecap="round"/>
                            </svg>
                    </div>
                
            </div>
      </SwiperSlide>
    </Swiper>
    </div>
    </div>
    <div class="flex justify-between px-5 items-center">
            <h2 class="font-bold text-[5vw]">Featured</h2>
            <div class="bg-[#323232] h-[4vh] w-[4vh] rounded-xl flex justify-center items-center">
                <svg width="18" height="18" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.8828 1.71387L10.8828 19.2853" stroke="white" stroke-width="3" stroke-linecap="round"/>
                    <path d="M19.2852 10.1182L1.71373 10.1182" stroke="white" stroke-width="3" stroke-linecap="round"/>
                    </svg>
            </div>
        </div>
        <div class="flex justify-center px-2 mt-7 mb-12">
        <Swiper
      spaceBetween={10}
      slidesPerView={2.5}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide><div className="bg-[#F5F5F5] w-[37vw] h-[52vw] flex flex-col rounded-lg swiper-slide">
      <div className="w-full h-[70%] rounded-lg bg-cover bg-center bg-no-repeat relative" style={{ backgroundImage: `url(${camera})` }}>
        <div className="bg-white rounded-full w-[6vw] h-[6vw] absolute top-2 right-2 flex justify-center items-center">
          <svg width="13" height="3" viewBox="0 0 16 3" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line x1="0.800781" y1="1.05859" x2="15.8008" y2="1.05859" stroke="#FF0000" strokeWidth="2" />
          </svg>
        </div>
      </div>
      <div className="flex flex-col gap-4 ml-2">
        <h1 className="font-extrabold text-[3vw] mt-2">Canon xyz Camera</h1>
        <p className="text-left font-extrabold text-[3vw] mb-2">&#8377; 200</p>
      </div>
    </div></SwiperSlide>
    <SwiperSlide><div className="bg-[#F5F5F5] w-[37vw] h-[52vw] flex flex-col rounded-lg swiper-slide">
      <div className="w-full h-[70%] rounded-lg bg-cover bg-center bg-no-repeat relative" style={{ backgroundImage: `url(${camera})` }}>
        <div className="bg-white rounded-full w-[6vw] h-[6vw] absolute top-2 right-2 flex justify-center items-center">
          <svg width="13" height="3" viewBox="0 0 16 3" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line x1="0.800781" y1="1.05859" x2="15.8008" y2="1.05859" stroke="#FF0000" strokeWidth="2" />
          </svg>
        </div>
      </div>
      <div className="flex flex-col gap-4 ml-2">
        <h1 className="font-extrabold text-[3vw] mt-2">Canon xyz Camera</h1>
        <p className="text-left font-extrabold text-[3vw] mb-2">&#8377; 200</p>
      </div>
    </div></SwiperSlide>
    <SwiperSlide><div className="bg-[#F5F5F5] w-[37vw] h-[52vw] flex flex-col rounded-lg swiper-slide">
      <div className="w-full h-[70%] rounded-lg bg-cover bg-center bg-no-repeat relative" style={{ backgroundImage: `url(${camera})` }}>
        <div className="bg-white rounded-full w-[6vw] h-[6vw] absolute top-2 right-2 flex justify-center items-center">
          <svg width="13" height="3" viewBox="0 0 16 3" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line x1="0.800781" y1="1.05859" x2="15.8008" y2="1.05859" stroke="#FF0000" strokeWidth="2" />
          </svg>
        </div>
      </div>
      <div className="flex flex-col gap-4 ml-2">
        <h1 className="font-extrabold text-[3vw] mt-2">Canon xyz Camera</h1>
        <p className="text-left font-extrabold text-[3vw] mb-2">&#8377; 200</p>
      </div>
    </div></SwiperSlide>
    <SwiperSlide><div className="bg-[#F5F5F5] w-[37vw] h-[52vw] flex flex-col rounded-lg swiper-slide">
      <div className="w-full h-[70%] rounded-lg bg-cover bg-center bg-no-repeat relative" style={{ backgroundImage: `url(${camera})` }}>
        <div className="bg-white rounded-full w-[6vw] h-[6vw] absolute top-2 right-2 flex justify-center items-center">
          <svg width="13" height="3" viewBox="0 0 16 3" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line x1="0.800781" y1="1.05859" x2="15.8008" y2="1.05859" stroke="#FF0000" strokeWidth="2" />
          </svg>
        </div>
      </div>
      <div className="flex flex-col gap-4 ml-2">
        <h1 className="font-extrabold text-[3vw] mt-2">Canon xyz Camera</h1>
        <p className="text-left font-extrabold text-[3vw] mb-2">&#8377; 200</p>
      </div>
    </div></SwiperSlide>
    </Swiper>
        </div>
    </section>
    </div>
    </>
  );
};

export default Storeprofile;

