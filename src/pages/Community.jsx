import React from 'react'
import movieEditIcon from '../images/movie_edit.svg';
import profileImage from '../images/kate-trysh-Dnkr_lmdKi8-unsplash 1.png';
import iosshare from '../images/ios_share (1).svg'

function Community() {
  return (
    <>
     <div className="fixed bg-white z-40 w-full top-0">
      <div className="flex justify-between p-3 mt-4">
        <h2 className="font-bold text-[5vw] ml-2 mt-5">COMMUNITY<span className="text-red-500"> &bull;</span></h2>
        <div className="w-[6vh] h-[6vh] rounded-full bg-[#343434] flex justify-center items-center mt-2 mr-2 p-3">
          <img className="w-[5.9vw]" src={movieEditIcon} alt="" />
        </div>
      </div>
        
      <button className="ml-5 mb-5 px-3 py-3 bg-[#094446] text-white font-bold text-[4vw] rounded-lg" data-category="demand">
        Demand & Sales
      </button>
    </div>
    <div className="flex justify-center mt-[50%]">
      <div className="w-[93vw] flex flex-col gap-3">
        <div className="flex justify-between">
          <div className="flex gap-2">
            <div className="w-[5vh] h-[5vh] rounded-full bg-[#343434]"></div>
            <h2 className="font-bold text-[5vw] mt-2">Kunal Deb</h2>
          </div>
          <h2 className="mt-4 text-[3.4vw] font-bold opacity-50">8 h ago</h2>
        </div>
        <div className="flex justify-center mt-4 px-2">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
        <div className="flex justify-center">
          <div className="bg-slate-400 w-[99%] h-[62vw] rounded-sm mt-4 bg-cover bg-no-repeat bg-center"
            style={{ backgroundImage: `url(${profileImage})` }}>
          </div>
        </div>
        <div className='flex justify-between mt-4 mb-4'>
         <div className='flex gap-2'>
                <div className='flex gap-3 border-2 px-4 py-1  ml-2 items-center'>
                 
                </div>
                <div class="p-4 h-[3vw] border-2 border-[#BEBEBE] rounded-lg flex justify-center items-center">
                <h2 class="text-[3.5vw] text-[#989797]">Budget: $990</h2>
         </div>
            </div>
            <div className='flex gap-3'>
            <div class="p-4 h-[3vw] bg-[#094446] rounded-lg flex justify-center items-center mt-1">
            <h2 class="text-[3.5vw] text-white font-bold">Connect</h2>
        </div>
        <img className='w-[5vw]' src={iosshare} alt="" />
            </div>
        </div>
      </div>
    </div>

    </>
  )
}

export default Community
