import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import ratingIcon from '../images/Vector (17).svg';
import shareIcon from '../images/ios_share (2).svg';
import mapIcon from '../images/images2/mobile icons/map.png';
import storeIcon from '../images/images2/mobile icons/store.png'
import logo from '../images/images2/desktop icons/logo.png';
import './style.css';

import 'swiper/css';
import ThingCards from '../components/ThingCards.jsx';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "../components/ui/drawer.jsx"


function Productpage() {
      // State to track whether the full description is visible
  const [showFullDescription, setShowFullDescription] = useState(false);

  // Function to handle click event on "See full description" link
  const handleShowMore = () => {
    // Update the state to show the full description
    setShowFullDescription(true);
  };
  const [reviewText, setReviewText] = useState('');
  const [reviews, setReviews] = useState([]);
  const [displayedReviews, setDisplayedReviews] = useState(5);
    const [showAll, setShowAll] = useState(false);

    const toggleShowMore = () => {
        setShowAll(!showAll); // Toggle the state to show/hide additional reviews
    };

  const handleReviewInput = (event) => {
    setReviewText(event.target.value);
  };

  const displayReview = () => {
    const text = reviewText.trim();
    if (text) {
      const newReview = {
        text,
        author: 'Kunal Deb', // You can replace this with dynamic author name if needed
      };
      setReviews([...reviews, newReview]);
      setReviewText('');
    }
  };

  const showMoreReviews = () => {
    setDisplayedReviews(reviews.length);
  };

  const seeLessReviews = () => {
    setDisplayedReviews(reviews.length);
  };
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
            <Drawer>
               <DrawerTrigger><div className="w-10 h-10 mt-3 bg-[#F5F5F5] rounded-full flex justify-center items-center">
                    <img src={ratingIcon} alt="" className="w-5" />
                </div></DrawerTrigger> 
                

             <DrawerContent className="h-[70vw]">
    
 
                 <DrawerClose>
   
                </DrawerClose>
  
           </DrawerContent>
              </Drawer>

              

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
        <div className="mt-4 ml-6">
      <h2 className="font-black text-lg">Canon XYZ Camera</h2>
      {/* <p className="text-[#9C9C9C]">Assam, Karimganj, Shyamaprasad Road- house no.3</p> */}
      
      <div className="flex  mt-5 gap-4">
        {/* <img src={mapIcon} alt="" className="w-20" /> */}
        <div className="w-full bg-[#F5F5F5] p-4 py-2 rounded-xl flex justify-between mr-4 items-center">
          <div>
            <div className="flex">
              <h2 className="text-2xl font-extrabold mt-2">&#x20b9; 2000</h2>
              <p className="text-red-600 font-black ml-2 mt-4">40% Discount</p>
            </div>
            <p className="text-[#A9A9A9] font-extrabold mt-[-5px] ml-5 text-md line-through">
              MRP ₹700
            </p>
          </div>
          <div className="bg-[#094446] p-2 py-2 w-14 h-14 mt-1 rounded-lg ml-12 flex justify-center items-center">
            <img src={storeIcon} alt="" className="w-7" />
          </div>
        </div>
      </div>
    </div>
    <div className="ml-6 mt-7">
      <h2 className="text-2xl font-extrabold font-gotham-black">Description <span className="text-red-600"> &bull;</span></h2>
      <p className={`mt-4 mr-4 text-[14px] ${showFullDescription ? '' : 'overflow-hidden line-clamp-3'}`}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo adipisci itaque enim dolorem atque labore dignissimos, ratione explicabo repellat totam id earum a alias impedit consequuntur tempore suscipit consequatur eveniet?
      </p>
      {!showFullDescription && (
        <p className="mt-2">
          <a href="#" className="text-[#094446] mt-[-5px]" onClick={handleShowMore}>See full description</a>
        </p>
      )}
    </div>
    <div className="mt-14 ml-6">
      <h2 className="text-2xl font-extrabold font-gotham-black">Related Products<span className="text-green-600"> &bull;</span></h2>
    </div>
    <Swiper
          className="mySwiper mr-2 ml-4 mt-7"
          spaceBetween={10}
          slidesPerView={2.2}
         
        >
            <SwiperSlide>
                <ThingCards/>
            </SwiperSlide>
            <SwiperSlide>
                <ThingCards/>
            </SwiperSlide>
            <SwiperSlide>
                <ThingCards/>
            </SwiperSlide>
            <SwiperSlide>
                <ThingCards/>
            </SwiperSlide>
            <SwiperSlide>
                <ThingCards/>
            </SwiperSlide>
        </Swiper>
        
        <div className="ml-6 mt-9">
      <h2 className="text-2xl font-gotham-black font-extrabold">Reviews <span className="text-red-600"> &bull;</span></h2>
    </div>
    <div className="m-4">
      <div className="mt-7 p-3 relative">
        <input
          type="text"
          placeholder="Add your review"
          className="border border-black p-4 mb-4 w-full outline-none rounded-xl text-[18px]"
          style={{ paddingLeft: '50px' }}
          value={reviewText}
          onChange={handleReviewInput}
          onKeyDown={(event) => {
            if (event.key === 'Enter') {
              displayReview();
            }
          }}
        />
        <div className="w-12 h-12 rounded-full absolute top-[-11px] left-[-10px] mt-7 ml-6 flex items-center justify-center">
          <img src={logo} alt="" className="w-6" />
        </div>
      </div>

        {reviews.slice(0, displayedReviews).map((review, index) => (
          <div
            key={index}
            className={`review-item transform transition-all duration-500 px-4 delay-100 hover:translate-x- mt-2`}
            
          >
            <div className="flex gap-2 mb-3">
              <div className="w-8 h-8 mt-3 bg-[#616363] rounded-full"></div>
              <p className=" font-semibold text-[#9C9C9C] mt-5">{review.author}</p>
            </div>
            <p className="break-all">{review.text}</p>
          </div>
        ))}

{reviews.length > 5 && (
                <button onClick={toggleShowMore} className="mt-4">
                    {showAll ? 'Show Less' : 'Show More'}
                </button>
            )}
    </div>
    </section>
   </div>
   </>
  )
}

export default Productpage