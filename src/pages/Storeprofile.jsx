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
import { Link } from 'react-router-dom';
import { storage } from '../../firebase';
import { ref, uploadBytes } from 'firebase/storage';
import ThingCards from '@/components/ThingCards';
import Featuredthingcard from '@/components/Featuredthingcard';
import xyzstore from '../images/damian-barczak-U9E423m3Hd8-unsplash.jpg'


const Storeprofile = () => {
  // Define state variables for dynamic content
  const storeID = 'STORE0001';
  const [Toggled, setToggled] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  
  const handleAddStory = async () => {

    if(!selectedFile){
      alert('Please select a file to upload as story');
      return;
    }

    const storageRef = ref(storage, `${storeID}/story/${selectedFile.name}`);
    await uploadBytes(storageRef,selectedFile);
    console.log('File uploaded succesfully');
  };
  
  return (
    <>
    <div className='forscroll'>
    {/* <div className='add-story-btn'>
        <input type="file" name="story" id="story" onChange={(e)=>{setSelectedFile(e.target.files[0])}} />
        <button onClick={handleAddStory}>Upload</button>
      </div> */}
    <section className="lg:hidden">
      <div className="flex justify-center">
            <div className="w-[97vw] rounded-3xl mt-4 bg-[#2D332F] relative">
                <div className="flex gap-4 ml-4 items-center">
                    <div className="rounded-xl w-[11vh] h-[11vh] bg-green-200 mt-6 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${xyzstore})` }}></div>
                    <div className="flex flex-col">
                      <div className=" absolute flex justify-center items-center text-[#DEFF98] border-[#DEFF98] border-2 px-4 py-1 rounded-2xl mt-8">
                        <h3 className="text-[3vw]">Clothing</h3>
                      </div>
                      <div className="flex items-center gap-3 mt-16">
                        <h2 className="text-white font-bold text-[7vw]">XYZ Store</h2>
                        <div className="rounded-full bg-green-500 w-[1vh] h-[1vh]  mt-1"></div>
                    </div>
                    <div className="flex gap-3 items-center">
                        <img className="w-[1.3vh]" src={vectorImage} alt=""/>
                        <p className="text-white opacity-50 text-[3vw]">xyzstore.tnennt.store</p>
                    </div>
                </div>
                
            </div>
            <div className="flex justify-between items-center mb-3 mt-8">
            <div className="flex gap-3 items-center">
                <img
            className="w-[4vw]  ml-4 "
            src={iosShareImage}
            alt=""
          />
          <button
          className="bg-[#67676733] px-5 py-2  rounded-full text-white text-[2.7vw] font-bold"
        >
          Assam-Karimganj
        </button>
            </div>
            <div className="flex items-center gap-3 ">
            <p className="font-bold text-white text-[2.9vw]">Accepting Orders:</p>
            <div
        className={`toggle w-[15vw] h-[8vw] bg-transparent border-2 border-white rounded-[30px] flex items-center px-1 mr-2 ${
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
              className="bg-transparent   p-2 h-[32vw] w-[98vw] mt-4 rounded-3xl"
            >
              <div className="flex px-1 py-2 gap-3 justify-center items-center">
                <Link to='/createpage'>
                <div className="bg-green-200 w-[29vw] h-[24vw] rounded-lg p-2">
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
                </Link>
                <Link to='/analytics'>
                <div className="bg-[#EAE6F6] w-[29vw] h-[24vw] rounded-lg p-2">
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
                </Link>
                <Link to='/mycommunity'>
                <div className="bg-[#EFEFEF] w-[30vw] h-[24vw] rounded-lg p-2">
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
                </Link>
              </div>
            </div>
            </div>
            <div className="flex justify-center">
                <div className='flex justify-between items-center mt-9 gap-5'>
                  <div className='w-[45vw] h-[39vw] bg-[#F3F3F3]  rounded-3xl '>
                    <div className='flex flex-col'>
                      <div className='w-[41vw] h-[17vw] rounded-3xl bg-[#FFFFFF] mt-2 ml-2 flex flex-col'>
                         <h2 className='font-bold text-[3.2vw] text-[#272822] ml-4 mt-2'>Store Engagement</h2>
                         <h2 className='font-bold text-[6vw] text-[#094446] ml-4 m'>2500</h2>
                      </div>
                      <div className='flex justify-between ml-5 mt-5 relative'>
                        <img className='w-[7vw] absolute mt-1 ml-2' src={flag} alt="" />
                        <div className='flex flex-col ml-14'>
                          <h2 className='font-bold text-[3.2vw]'>Total Reviews</h2>
                          <p className='text-[3.4vw]'>800/900</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='flex flex-col gap-4'>
                    <Link to='/orderandpays'>
                     <div className='w-[45vw] h-[17vw] bg-[#F3F3F3] rounded-3xl flex justify-between items-center'>
                      <div className='w-[14vw] h-[14vw] rounded-full bg-white ml-1 flex justify-center items-center'>
                        <img className='w-[5vw]' src={contact} alt="" />
                      </div>
                      <div className='flex flex-col mr-5 gap-1'>
                        <h2 className='text-[3.2vw] font-bold '>Orders & pays</h2>
                        <p className='text-[2.3vw] text-[#838383]leading-[0.05rem]'>Orders, payments &<br/>cupons</p>
                      </div>
                     </div>
                     </Link>
                     <Link to='/storesettings'>
                     <div className='w-[45vw] h-[17vw] bg-[#F3F3F3] rounded-3xl flex justify-between items-center'>
                      <div className='w-[14vw] h-[14vw] rounded-full bg-white ml-1 flex justify-center items-center'>
                      <img className='w-[5vw]' src={settings} alt="" />
                      </div>
                      <div className='flex flex-col mr-8 gap-1'>
                        <h2 className='text-[3.2vw] font-bold '>My Settings</h2>
                        <p className='text-[2.3vw] text-[#838383]leading-[0.05rem]'>Store Setting</p>
                      </div>
                     </div>
                     </Link>
                  </div>
                </div>
      </div>
      <h2 className="font-bold text-[5vw] ml-5 mt-6">Updates</h2>
      <div className="flex justify-center">
      <div className="w-[95vw] h-[40vw] mt-5 flex gap-2 ml-5 mr-3">
      <Swiper
      spaceBetween={10}
      slidesPerView={2.5}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
     
      <SwiperSlide>
      <div className="border-[1px] border-[#B5B5B5] h-[30vw] w-[34vw] rounded-xl  flex justify-center items-center">
                    
                    <div className="bg-[#F5F5F5] h-[6vh] w-[6vh] rounded-full flex justify-center items-center">
                        <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.8828 1.71387L10.8828 19.2853" stroke="#B5B5B5" strokeWidth="3" strokeLinecap="round"/>
                            <path d="M19.2852 10.1182L1.71373 10.1182" stroke="#B5B5B5" strokeWidth="3" strokeLinecap="round"/>
                            </svg>
                    </div>
                
            </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className="border-[1px] border-[#B5B5B5] h-[30vw] w-[34vw] rounded-xl  flex justify-center items-center">
                    
                    <div className="bg-[#F5F5F5] h-[6vh] w-[6vh] rounded-full flex justify-center items-center">
                        <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.8828 1.71387L10.8828 19.2853" stroke="#B5B5B5" strokeWidth="3" strokeLinecap="round"/>
                            <path d="M19.2852 10.1182L1.71373 10.1182" stroke="#B5B5B5" strokeWidth="3" strokeLinecap="round"/>
                            </svg>
                    </div>
                
            </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className="border-[1px] border-[#B5B5B5] h-[30vw] w-[34vw] rounded-xl  flex justify-center items-center">
                    
                    <div className="bg-[#F5F5F5] h-[6vh] w-[6vh] rounded-full flex justify-center items-center">
                        <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.8828 1.71387L10.8828 19.2853" stroke="#B5B5B5" strokeWidth="3" strokeLinecap="round"/>
                            <path d="M19.2852 10.1182L1.71373 10.1182" stroke="#B5B5B5" strokeWidth="3" strokeLinecap="round"/>
                            </svg>
                    </div>
                
            </div>
      </SwiperSlide>
    </Swiper>
    </div>
    </div>
    <div className="flex justify-between px-5 items-center">
            <h2 className="font-bold text-[5vw]">Featured</h2>
            <div className="bg-[#323232] h-[4vh] w-[4vh] rounded-xl flex justify-center items-center">
                <svg width="18" height="18" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.8828 1.71387L10.8828 19.2853" stroke="white" strokeWidth="3" strokeLinecap="round"/>
                    <path d="M19.2852 10.1182L1.71373 10.1182" stroke="white" strokeWidth="3" strokeLinecap="round"/>
                    </svg>
            </div>
        </div>
        <div className="flex ml-4 mr-2 mt-7">
        <Swiper
      spaceBetween={40}
      slidesPerView={2.5}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
     <SwiperSlide>
     <Featuredthingcard marginTop="0" width="37vw" height="52vw" />
     </SwiperSlide>
     <SwiperSlide>
      <Featuredthingcard marginTop="0" width="37vw" height="52vw" />
     </SwiperSlide>
     <SwiperSlide>
      <Featuredthingcard marginTop="0" width="37vw" height="52vw" />
     </SwiperSlide>
    </Swiper>
        </div>
        <h2 className='ml-4 text-[5vw] font-bold mt-7'>Category 01</h2>
        <div className="flex ml-4 mr-2 mt-7 mb-12">
        <Swiper
      spaceBetween={40}
      slidesPerView={2.5}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
     <SwiperSlide>
     <Featuredthingcard marginTop="0" width="37vw" height="52vw" />
     </SwiperSlide>
     <SwiperSlide>
      <Featuredthingcard marginTop="0" width="37vw" height="52vw" />
     </SwiperSlide>
     <SwiperSlide>
      <Featuredthingcard marginTop="0" width="37vw" height="52vw" />
     </SwiperSlide>
    </Swiper>
    </div>
    </section>
    </div>
    </>
  );
};

export default Storeprofile;

