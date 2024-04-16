import React from 'react'
import './style.css'; 
import backoption from '../images/back.png';
import person from '../images/person.svg';
import forward from '../images/forward.svg';
import globe from '../images/Vector (4).svg';
import circle1 from '../images/Frame 372.svg';
import circle2 from '../images/Vector (6).svg';
import circle3 from '../images/Vector (7).svg';
import circle4 from '../images/add_shopping_cart.svg';
import circle5 from '../images/time-past (1).svg';
import circle6 from '../images/Vector (8).svg';
import circle7 from '../images/Vector (9).svg';
import circle8 from '../images/Vector (10).svg';


function Userprofile() {
  return (
    
      <>
      <div className='forscroll'>
      <section className="lg:hidden">
    
    <div className="flex justify-center">
        <div className="w-[93vw] rounded-3xl h-[40vw] mt-4 bg-[#2D332F]">
            <img className="w-[10vw] ml-[83%] mt-6" src={backoption} alt=""/>
            <div className="flex gap-4 ml-4 mt-[-5%] ">
                <div className="rounded-full w-[7vh] h-[7vh] bg-green-200"></div>
                <div className="flex flex-col mt-[-1%]">
                    <div className="flex items-center gap-3">
                    <h2 className="text-white font-bold text-[7vw]">Kunal Deb</h2>
                    <div className="rounded-full bg-green-500 w-[1vh] h-[1vh]  mt-1"></div>
                </div>
                <div className="flex gap-3">
                <img className="w-[1.5vh]" src={person} alt=""/>
                <p className="text-white opacity-50 text-[3.5vw]">kunal_deb009</p>
            </div>
                </div>
            </div>
            
        </div>

    </div>
    <div className="flex justify-center items-center">
        <div className="w-[93vw]  bg-[#EDEDED] mt-6 rounded-3xl">
            <div className="flex justify-between items-center mb-6">
                <div className="flex gap-3 items-center">
                <div className="w-[16vw] h-[16vw] bg-[#094446] ml-4 mt-6 rounded-xl flex justify-center">
                    <img className="w-[8vw]" src={globe} alt=""/>
                </div>
                <div className="flex-col mt-4">
                    <h2 className="font-bold opacity-70">Shyamaprasad Road Ka...</h2>
                    <h3 className="font-bold text-[3vw] text-[#787878] mt-1"><span className="font-bold text-[#094446] text-[3.5vw]">Pincode:</span>  788711</h3>
                </div>
            </div>
                <img className="mr-4 mt-5 w-[11vw]" src={forward} alt=""/>
            </div>
        </div>
    </div>
    <div className="flex justify-center mb-24">
      <div className="w-[93vw] mt-7 px-2">
        <div className="flex gap-6 items-center">
        <div className="rounded-full w-[6vh] h-[6vh] bg-[#2B2B2B] flex justify-center">
            <img className="w-[44%]" src={circle1} alt=""/>
        </div>
        <p className="font-bold text-[4vw] text-[#9B9B9B]">Report Issue</p>
    </div>
    <div className="flex gap-6 items-center mt-3">
        <div className="rounded-full w-[6vh] h-[6vh] bg-[#2B2B2B] flex justify-center">
            <img className="w-[44%]" src={circle2} alt=""/>
        </div>
        <p className="font-bold text-[4vw] text-[#9B9B9B]">About</p>
    </div>
    <div className="flex gap-6 items-center mt-3">
        <div className="rounded-full w-[6vh] h-[6vh] bg-[#2B2B2B] flex justify-center">
            <img className="w-[44%]" src={circle3} alt=""/>
        </div>
        <p className="font-bold text-[4vw] text-[#9B9B9B] ">Send Feedback</p>
    </div>
    <div className="flex gap-6 items-center mt-3">
        <div className="rounded-full w-[6vh] h-[6vh] bg-[#2B2B2B] flex justify-center">
            <img className="w-[44%]" src={circle4} alt=""/>
        </div>
        <p className="font-bold text-[4vw] text-[#9B9B9B]">Purchase History</p>
    </div>
    <div className="flex gap-6 items-center mt-3">
        <div className="rounded-full w-[6vh] h-[6vh] bg-[#2B2B2B] flex justify-center">
            <img className="w-[44%]" src={circle5} alt=""/>
        </div>
        <p className="font-bold text-[4vw] text-[#9B9B9B]">Change Password & Email</p>
    </div>
    <div className="flex gap-6 items-center mt-3">
        <div className="rounded-full w-[6vh] h-[6vh] bg-[#2B2B2B] flex justify-center">
            <img className="w-[44%]" src={circle6} alt=""/>
        </div>
        <p className="font-bold text-[4vw] text-[#9B9B9B]">Delete Account</p>
    </div>
    <div className="flex gap-6 items-center mt-3">
        <div className="rounded-full w-[6vh] h-[6vh] bg-[#2B2B2B] flex justify-center">
            <img className="w-[44%]" src={circle7} alt=""/>
        </div>
        <p className="font-bold text-[4vw] text-[#9B9B9B]">Help</p>
    </div>
    <div className="flex gap-6 items-center mt-3">
        <div className="rounded-full w-[6vh] h-[6vh] bg-[#2B2B2B] flex justify-center">
            <img className="w-[44%]" src={circle8} alt=""/>
        </div>
        <p className="font-bold text-[4vw] text-[#9B9B9B]">Legal</p>
    </div>
      </div>
    </div>
   
    <button className="absolute bg-[#094446] font-bold text-white px-7 py-3 text-[3.7vw] ml-[37%] rounded-xl mt-7 bottom-[12px]">Sign Out</button>
    
   </section>
   </div>
      </>
    
  )
}

export default Userprofile