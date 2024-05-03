import React, { useEffect, useState, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import './style.css';
import './script.js';
import image1 from '../images/image 1.png';
import image4 from '../images/image 4.svg';
import frame380 from '../images/Frame 380.png';
import frame396 from '../images/Frame 396.png';
import frame401 from '../images/Frame 401.png';
import frame292 from '../images/Frame 292.png';
import notificationIcon from '../images/notfication00.png';
import vector5 from '../images/Vector (5).svg';
import designImage from '../images/design.png';
import camera from '../images/Rectangle 2267.svg';
import Rectangle2484Image from '../images/images2/mobile icons/Rectangle 2484.svg';
import Rectangle2485Image from '../images/images2/mobile icons/Rectangle 2485.svg';
import Rectangle2486Image from '../images/images2/mobile icons/Rectangle 2486.svg';
import Rectangle2487Image from '../images/images2/mobile icons/Rectangle 2487.svg';
import Rectangle2488Image from '../images/images2/mobile icons/Rectangle 2488.svg';
import Rectangle1856 from '../images/Rectangle 1856.svg';
import Rectangle2267Image from '../images/images2/mobile icons/Rectangle 2267 (1).svg';
import HomeIcon from '../images/images2/mobile icons/home.png';
import CatalogIcon from '../images/images2/mobile icons/catalog.png';
import StoreIcon from '../images/images2/mobile icons/store.png';
import GalleryIcon from '../images/images2/mobile icons/gallery.png';
import CommunityIcon from '../images/images2/mobile icons/community.png';
import { db } from "../../firebase.js";
import { doc, setDoc, arrayUnion } from "firebase/firestore";



function Store() {
  const [todaysDate, setTodaysDate] = useState('');

  const userID = "Customer-0003";
  const storeID = "Store-0001";
  useEffect(() => {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const today = new Date();
    const dayOfWeek = days[today.getDay()];
    const dayOfMonth = today.getDate();
    const month = months[today.getMonth()];
    const formattedDate = `${dayOfWeek} ${dayOfMonth} ${month}`;
    setTodaysDate(formattedDate);
  }, []);
  
  const [selectedCategory, setSelectedCategory] = useState('vehicles');

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };


  const handleClick = async (e) =>{
      e.preventDefault();
      try {
        console.log("Adding Data to Users - Connect List -");
        const userDocRef = doc(db, `Users/${userID}`);
        await setDoc(userDocRef,{
          ConnectList: arrayUnion(storeID)
        });
        console.log('--Success--');
        
        console.log("Adding Data to Store/CommunityPost -Following List -");
        const storeDocRef = doc(db,`Store/${storeID}`);
        await setDoc(storeDocRef,{
          FollowingList: arrayUnion(userID)
        });
        console.log('--Success--');
      
      } catch (error) {
        console.log("Failed: ",error);
      }
      

  }

  return (
    <>
    <div className='forscroll'>
      <div className='follow-btn'><button onClick={handleClick}>follow store</button></div>
    <section className='lg:hidden'>
      <div className="flex justify-between items-center">
        <div className="mt-7 ml-4">
          <p className="text-[3vw] text-[#727272] font-bold" id="todaysDate">{todaysDate}</p>
          <h2 className="text-[6vw] font-bold">Barnik Deb <span className="text-green-500"> &bull;</span></h2>
        </div>
        <div className="flex justify-center items-center gap-4 mt-7 mr-3">
          <img className="w-[21px]" src={notificationIcon} alt="" />
          <div className="bg-slate-300 h-[7vh] w-[7vh] rounded-full"></div>
        </div>
      </div>

      <div className="mt-7 p-3 relative">
        
        <div className="w-14 h-14 bg-[#DDDDDD] rounded-full absolute top-7 left-0  ml-6 flex items-center justify-center">
          <img src={image4} alt="" className="w-8" />
        </div>
        <input type="text" className="input-field px-6 py-4 pl-16 border-2  border-black rounded-full w-full text-lg focus:outline-none" placeholder="Search Products & Store" />
      </div>

      <div className="flex justify-center relative">
        <div className="relative">
          <img className="w-[93vw] mt-6 mb-5" src={frame396} alt="" />

          <h2 className="absolute bottom-2 left-0 text-white ml-6 mb-4 font-bold leading-[1.2] text-[4vw]" style={{ bottom: '54%', left: '8%' }}>Buy From Your Local Store<br />At A Discounted Price</h2>
          <h2 className="absolute bottom-2 left-0 text-white ml-6 mb-4 leading-[1.2] text-[4vw]" style={{ bottom: '29%', left: '74%' }}>Tnennt<br />Store<span className="text-red-500"> &bull;</span></h2>
          <div className="absolute bottom-9 left-5 w-[38vw]" id="carousel" data-auto="true">
          <div id="scene">
          <img className="carousel_item" src={Rectangle1856} alt=""/>
          <img className="carousel_item" src={Rectangle1856} alt=""/>
          <img className="carousel_item" src={Rectangle1856} alt=""/>
          <img className="carousel_item" src={Rectangle1856} alt=""/>
          <img className="carousel_item" src={Rectangle1856} alt=""/>
          <img className="carousel_item" src={Rectangle1856} alt=""/>
          <img className="carousel_item" src={Rectangle1856} alt=""/>
          <img className="carousel_item" src={Rectangle1856} alt=""/>
          <img className="carousel_item" src={Rectangle1856} alt=""/>
          
    </div>
          </div>
        </div>
      </div>
      <h2 className="text-[5vw] font-bold ml-4">Updates</h2>
      <div className="flex mt-4">
        <Swiper
          className="mySwiperrr mr-2 ml-4"
          spaceBetween={10}
          slidesPerView={2.7}
          navigation
        >
          <SwiperSlide>
            <div className="flex-col swiper-slide">
              <div className="h-[30vw] w-[31vw] rounded-lg bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${Rectangle1856})` }}></div>
              <h2 className="px-[28%] text-[4vw]">Nahata</h2>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex-col swiper-slide">
              <div className="h-[30vw] w-[31vw] rounded-lg bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${Rectangle1856})` }}></div>
              <h2 className="px-[28%] text-[4vw]">Nahata</h2>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex-col swiper-slide">
              <div className="h-[30vw] w-[31vw] rounded-lg bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${Rectangle1856})` }}></div>
              <h2 className="px-[28%] text-[4vw]">Nahata</h2>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="mt-6 ml-3 flex gap-3 flex-wrap w-[93vw]">
      <button
        className={`text-[4vw] focus:outline-none visited:outline-none active:outline-none category-button border border-black ${
          selectedCategory === 'vehicles' ? 'bg-[#343434] text-white' : 'bg-white text-[#737373]'
        } px-4 py-2 rounded-3xl transition-colors duration-300 inline-flex items-center`}
        style={{ WebkitTapHighlightColor: 'rgba(0,0,0,0)' }}
        onClick={() => handleCategoryClick('vehicles')}
      >
        Electronics
      </button>

      <button
        className={`text-[4vw] focus:outline-none visited:outline-none active:outline-none category-button border border-black ${
          selectedCategory === 'housing' ? 'bg-[#343434] text-white' : 'bg-white text-[#737373]'
        } px-4 py-2 rounded-3xl transition-colors duration-300 inline-flex items-center`}
        style={{ WebkitTapHighlightColor: 'rgba(0,0,0,0)' }}
        onClick={() => handleCategoryClick('housing')}
      >
        Clothings
      </button>

      {/* Repeat the same structure for the remaining buttons */}
      
      <button
        className={`text-[4vw] focus:outline-none visited:outline-none active:outline-none category-button border border-black ${
          selectedCategory === 'electronics' ? 'bg-[#343434] text-white' : 'bg-white text-[#737373]'
        } px-4 py-2 rounded-3xl transition-colors duration-300 inline-flex items-center`}
        style={{ WebkitTapHighlightColor: 'rgba(0,0,0,0)' }}
        onClick={() => handleCategoryClick('electronics')}
      >
        Accessories
      </button>

      <button
        className={`text-[4vw] focus:outline-none visited:outline-none active:outline-none category-button border border-black ${
          selectedCategory === 'others' ? 'bg-[#343434] text-white' : 'bg-white text-[#737373]'
        } px-4 py-2 rounded-3xl transition-colors duration-300 inline-flex items-center`}
        style={{ WebkitTapHighlightColor: 'rgba(0,0,0,0)' }}
        onClick={() => handleCategoryClick('others')}
      >
        Groceries
      </button>

      <button
        className={`text-[4vw] focus:outline-none visited:outline-none active:outline-none category-button border border-black ${
          selectedCategory === 'our_services' ? 'bg-[#343434] text-white' : 'bg-white text-[#737373]'
        } px-4 py-2 rounded-3xl transition-colors duration-300 inline-flex items-center`}
        style={{ WebkitTapHighlightColor: 'rgba(0,0,0,0)' }}
        onClick={() => handleCategoryClick('our_services')}
      >
        Books
      </button>

      <button
        className={`text-[4vw] focus:outline-none visited:outline-none active:outline-none category-button border border-black ${
          selectedCategory === 'more' ? 'bg-[#343434] text-white' : 'bg-white text-[#737373]'
        } px-4 py-2 rounded-3xl transition-colors duration-300 inline-flex items-center`}
        style={{ WebkitTapHighlightColor: 'rgba(0,0,0,0)' }}
        onClick={() => handleCategoryClick('more')}
      >
        More+
      </button>
      </div>
      <img className="absolute right-0 mr-2 w-[7.5vw]" src={designImage} alt="" />
      <h2 className="text-[7vw] font-bold ml-4 mt-10">Featured</h2>
      <Swiper
      spaceBetween={10}
      slidesPerView={2.3}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      className='mr-2 ml-5 mt-4'
    >
        <SwiperSlide>
        <div className=" bg-[#F5F5F5] w-[37vw] h-[52vw] flex flex-col rounded-lg ">
                    <div className="w-full h-[70%] rounded-lg bg-cover bg-center bg-no-repeat relative"
                      style={{ backgroundImage: `url(${camera})` }}>
                      <div className="bg-white rounded-full w-[6vw] h-[6vw] absolute top-2 right-2  flex justify-center items-center">
                        <div className="heart-container " title="Like">
                          <input type="checkbox" className="checkbox w-[1vw]" id="Give-It-An-Id"/>
                          <div className="svg-container">
                            <svg viewBox="0 0 24 24" className="svg-outline" xmlns="http://www.w3.org/2000/svg">
                              <path
                                d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Zm-3.585,18.4a2.973,2.973,0,0,1-3.83,0C4.947,16.006,2,11.87,2,8.967a4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,11,8.967a1,1,0,0,0,2,0,4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,22,8.967C22,11.87,19.053,16.006,13.915,20.313Z">
                              </path>
                            </svg>
                            <svg viewBox="0 0 24 24" className="svg-filled" xmlns="http://www.w3.org/2000/svg">
                              <path
                                d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Z">
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
                    <div className="flex flex-col gap-4 ml-2">
                      <h1 className="font-extrabold text-[3vw] mt-2">Canon xyz Camera</h1>
                      <p className="text-left font-extrabold text-[3vw] mb-2">&#8377; 200</p>
                    </div>
                  </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className=" bg-[#F5F5F5] w-[37vw] h-[52vw] flex flex-col rounded-lg ">
                    <div className="w-full h-[70%] rounded-lg bg-cover bg-center bg-no-repeat relative"
                      style={{ backgroundImage: `url(${camera})` }}>
                      <div className="bg-white rounded-full w-[6vw] h-[6vw] absolute top-2 right-2  flex justify-center items-center">
                        <div className="heart-container " title="Like">
                          <input type="checkbox" className="checkbox w-[1vw]" id="Give-It-An-Id"/>
                          <div className="svg-container">
                            <svg viewBox="0 0 24 24" className="svg-outline" xmlns="http://www.w3.org/2000/svg">
                              <path
                                d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Zm-3.585,18.4a2.973,2.973,0,0,1-3.83,0C4.947,16.006,2,11.87,2,8.967a4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,11,8.967a1,1,0,0,0,2,0,4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,22,8.967C22,11.87,19.053,16.006,13.915,20.313Z">
                              </path>
                            </svg>
                            <svg viewBox="0 0 24 24" className="svg-filled" xmlns="http://www.w3.org/2000/svg">
                              <path
                                d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Z">
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
                    <div className="flex flex-col gap-4 ml-2">
                      <h1 className="font-extrabold text-[3vw] mt-2">Canon xyz Camera</h1>
                      <p className="text-left font-extrabold text-[3vw] mb-2">&#8377; 200</p>
                    </div>
                  </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className=" bg-[#F5F5F5] w-[37vw] h-[52vw] flex flex-col rounded-lg ">
                    <div className="w-full h-[70%] rounded-lg bg-cover bg-center bg-no-repeat relative"
                      style={{ backgroundImage: `url(${camera})` }}>
                      <div className="bg-white rounded-full w-[6vw] h-[6vw] absolute top-2 right-2  flex justify-center items-center">
                        <div className="heart-container " title="Like">
                          <input type="checkbox" className="checkbox w-[1vw]" id="Give-It-An-Id"/>
                          <div className="svg-container">
                            <svg viewBox="0 0 24 24" className="svg-outline" xmlns="http://www.w3.org/2000/svg">
                              <path
                                d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Zm-3.585,18.4a2.973,2.973,0,0,1-3.83,0C4.947,16.006,2,11.87,2,8.967a4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,11,8.967a1,1,0,0,0,2,0,4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,22,8.967C22,11.87,19.053,16.006,13.915,20.313Z">
                              </path>
                            </svg>
                            <svg viewBox="0 0 24 24" className="svg-filled" xmlns="http://www.w3.org/2000/svg">
                              <path
                                d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Z">
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
                    <div className="flex flex-col gap-4 ml-2">
                      <h1 className="font-extrabold text-[3vw] mt-2">Canon xyz Camera</h1>
                      <p className="text-left font-extrabold text-[3vw] mb-2">&#8377; 200</p>
                    </div>
                  </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className=" bg-[#F5F5F5] w-[37vw] h-[52vw] flex flex-col rounded-lg ">
                    <div className="w-full h-[70%] rounded-lg bg-cover bg-center bg-no-repeat relative"
                      style={{ backgroundImage: `url(${camera})` }}>
                      <div className="bg-white rounded-full w-[6vw] h-[6vw] absolute top-2 right-2  flex justify-center items-center">
                        <div className="heart-container " title="Like">
                          <input type="checkbox" className="checkbox w-[1vw]" id="Give-It-An-Id"/>
                          <div className="svg-container">
                            <svg viewBox="0 0 24 24" className="svg-outline" xmlns="http://www.w3.org/2000/svg">
                              <path
                                d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Zm-3.585,18.4a2.973,2.973,0,0,1-3.83,0C4.947,16.006,2,11.87,2,8.967a4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,11,8.967a1,1,0,0,0,2,0,4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,22,8.967C22,11.87,19.053,16.006,13.915,20.313Z">
                              </path>
                            </svg>
                            <svg viewBox="0 0 24 24" className="svg-filled" xmlns="http://www.w3.org/2000/svg">
                              <path
                                d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Z">
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
                    <div className="flex flex-col gap-4 ml-2">
                      <h1 className="font-extrabold text-[3vw] mt-2">Canon xyz Camera</h1>
                      <p className="text-left font-extrabold text-[3vw] mb-2">&#8377; 200</p>
                    </div>
                  </div>
        </SwiperSlide>
    </Swiper>
    <div className="flex mt-12">
      <Swiper
        spaceBetween={20}
        slidesPerView={2}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        className='ml-5 mr-2'
      >
        <SwiperSlide>
          <div className="w-[39vw] h-[52vw] flex flex-col swiper-slide">
            <div className="w-full h-[38vw] rounded-lg bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${Rectangle2488Image})` }}></div>
            <div className="w-full h-[58vw] mt-2 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${Rectangle2486Image})` }}></div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-[45vw] swiper-slide bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${Rectangle2484Image})` }}></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-[39vw] h-[52vw] flex flex-col swiper-slide">
            <div className="w-full h-[58vw] rounded-lg bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${Rectangle2485Image})` }}></div>
            <div className="w-full h-[38vw] mt-2 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${Rectangle2487Image})` }}></div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
    <div>
      <div className="flex justify-between mt-8">
        <h2 className="font-bold text-[6vw] ml-4">Featured Store</h2>
        <p className="text-[3vw] mt-3 mr-4">View All</p>
      </div>
      <div className="flex mt-6">
        <Swiper
          className="mySwiperrr mr-2 ml-4"
          spaceBetween={10}
          slidesPerView={4}
          navigation
        >
          <SwiperSlide>
            <div className="flex-col swiper-slide">
              <div className="h-[20vw] w-[21vw] rounded-lg bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${Rectangle1856})` }}></div>
              <h2 className="px-[20%] text-[4vw]">Nahata</h2>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex-col swiper-slide">
              <div className="h-[20vw] w-[21vw] rounded-lg bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${Rectangle1856})` }}></div>
              <h2 className="px-[20%] text-[4vw]">Nahata</h2>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex-col swiper-slide">
              <div className="h-[20vw] w-[21vw] rounded-lg bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${Rectangle1856})` }}></div>
              <h2 className="px-[20%] text-[4vw]">Nahata</h2>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex-col swiper-slide">
              <div className="h-[20vw] w-[21vw] rounded-lg bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${Rectangle1856})` }}></div>
              <h2 className="px-[20%] text-[4vw]">Nahata</h2>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex-col swiper-slide">
              <div className="h-[20vw] w-[21vw] rounded-lg bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${Rectangle1856})` }}></div>
              <h2 className="px-[20%] text-[4vw]">Nahata</h2>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex-col swiper-slide">
              <div className="h-[20vw] w-[21vw] rounded-lg bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${Rectangle1856})` }}></div>
              <h2 className="px-[20%] text-[4vw]">Nahata</h2>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex-col swiper-slide">
              <div className="h-[20vw] w-[21vw] rounded-lg bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${Rectangle1856})` }}></div>
              <h2 className="px-[20%] text-[4vw]">Nahata</h2>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
    <h2 className="text-[7vw] font-bold ml-4 mt-10 ">Category</h2>
      
      <div className="flex justify-center">
        <div className="h-[78vw] w-[95vw] mt-6">
          <div className="flex gap-4">
            <div className="w-[50%] mb-28">
              <div className="flex flex-col w-full h-[60vw] bg-[#F5F5F5] rounded-lg">
                <div className="w-full bg-slate-200 h-[45vw] rounded-lg bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${Rectangle2267Image})` }}></div>
                <h2 className="px-[31%] text-[4vw] py-[10%]">Clothings</h2>
              </div>
              <div className="flex flex-col w-full h-[60vw] bg-[#F5F5F5] mt-12 rounded-lg">
                <div className="w-full bg-slate-200 h-[45vw] rounded-lg bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${Rectangle2267Image})` }}></div>
                <h2 className="px-[31%] text-[4vw] py-[10%]">Clothings</h2>
              </div>
              <div className="flex flex-col w-full h-[60vw] bg-[#F5F5F5] mt-12 rounded-lg">
                <div className="w-full bg-slate-200 h-[45vw] rounded-lg bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${Rectangle2267Image})` }}></div>
                <h2 className="px-[31%] text-[4vw] py-[10%]">Clothings</h2>
              </div>
            </div>
            <div className="w-[50%] mb-28">
              <div className="flex flex-col w-full h-[60vw] bg-[#F5F5F5] rounded-lg">
                <div className="w-full bg-slate-200 h-[45vw] rounded-lg bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${Rectangle2267Image})` }}></div>
                <h2 className="px-[31%] text-[4vw] py-[10%]">Clothings</h2>
              </div>
              <div className="flex flex-col w-full h-[60vw] bg-[#F5F5F5] mt-12 rounded-lg">
                <div className="w-full bg-slate-200 h-[45vw] rounded-lg bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${Rectangle2267Image})` }}></div>
                <h2 className="px-[31%] text-[4vw] py-[10%]">Clothings</h2>
              </div>
              <div className="flex flex-col w-full h-[60vw] bg-[#F5F5F5] mt-12 rounded-lg">
                <div className="w-full bg-slate-200 h-[45vw] rounded-lg bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${Rectangle2267Image})` }}></div>
                <h2 className="px-[31%] text-[4vw] py-[10%]">Clothings</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="fixed bottom-4 left-0 right-0 flex mx-auto mb-1 bg-[#2D332F] rounded-full text-xl p-2 w-[350px] text-white justify-around items-center z-50">
        <a href="store.html" className="icon p-4 bg-white rounded-full w-14 h-14 flex items-center justify-center">
          <img src={HomeIcon} alt="" className="w-8" />
        </a>
        <a href="catalog.html" className="icon flex items-center justify-center bg-[#2D332F] rounded-full p-4 w-14 h-14">
          <img src={CatalogIcon} alt="" className="w-8" />
        </a>
        <a href="rent.html" className="icon flex items-center justify-center bg-[#2D332F] rounded-full p-4 w-14 h-14">
          <img src={StoreIcon} alt="" className="w-8" />
        </a>
        <a href="gallery.html" className="icon flex items-center justify-center bg-[#2D332F] rounded-full p-4 w-14 h-14">
          <img src={GalleryIcon} alt="" className="w-5" />
        </a>
        <a href="#" className="icon flex items-center justify-center bg-[#2D332F] rounded-full p-4 w-14 h-14">
          <img src={CommunityIcon} alt="" className="w-5" />
        </a>
      </div>
    
      </section>
      </div>
    </>
  );
}

export default Store;
